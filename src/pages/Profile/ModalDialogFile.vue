<template>
  <!-- File upload component with image preview -->
  <div class="card flex flex-col items-center gap-6">
    <!-- Display the uploaded profile picture or default avatar -->
    <img
      v-if="src"
      :src="src"
      alt="Profile Picture"
      class="shadow-md rounded-full w-48 h-auto"
    />

    <img
      v-if="!src"
      :src="avatarImg"
      alt="Default Avatar"
      class="shadow-md rounded-full w-48 h-auto cursor-pointer"
    />

    <!-- FileUpload component for image selection -->
    <FileUpload
      mode="basic"
      @select="onFileSelect"
      class="p-button-outlined p-[1rem] mb-10"
    />

    <!-- Display error message if any -->
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import avatarImg from "@/images/avatarPic.jpg";
import { supabase } from "@/clients/supabaseClient";

const src = ref(null);
const errorMessage = ref(null);
const emits = defineEmits(["imageURL"]);

// Function to display the user's profile picture as default
onMounted(async () => {
  try {
    // Get the currently authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      alert("User is not authenticated.");
      return;
    }

    const { data, error } = await supabase
      .from("sign_up")
      .select("image_url")
      .eq("user_id", user.id)
      .single();

    src.value = data.image_url;
    emits("imageURL", src.value);
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
});
// Function triggered when the user selects a file
const onFileSelect = async (event) => {
  const file = event.files[0]; // Get the selected file
  if (!file) {
    errorMessage.value = "No file selected.";

    return;
  }

  // Reset any previous error
  errorMessage.value = null;

  try {
    // Create a temporary URL for the image to display in an <img> tag
    src.value = URL.createObjectURL(file); // This allows for immediate preview

    // Get the currently authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      errorMessage.value = "User is not authenticated.";
      return;
    }

    // Construct the file path using the user's ID
    const filePath = `UserProfilePicture/${user.id}/${file.name}`;

    // Upload the file to Supabase Storage, overwriting if it already exists
    const { error: uploadError } = await supabase.storage
      .from("UserProfilePicture") // Use your Supabase bucket name
      .upload(filePath, file, {
        cacheControl: "3600", // Adjust cache if necessary
        upsert: true, // This ensures the image is overwritten if the same name exists
      });

    if (uploadError) {
      throw uploadError;
    }
    // Declare an Emit Event to send back to value to the HomePage

    // Retrieve the public URL of the latest file
    const { data, error: urlError } = supabase.storage
      .from("UserProfilePicture")
      .getPublicUrl(filePath);

    if (urlError || !data.publicUrl) {
      throw urlError;
    } else {
      console.log("image URL emitted: " + data.publicUrl);
      emits("imageURL", data.publicUrl);
    }

    // Successfully uploaded the image
    console.log("Image uploaded successfully!");
  } catch (err) {
    errorMessage.value = `Error uploading image: ${err.message}`;
  }
};
</script>
