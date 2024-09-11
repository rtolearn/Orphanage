<template>
    <div class="card flex flex-col items-center gap-6">
      <!-- Display the uploaded profile picture or default avatar -->
      <img
        v-if="src"
        :src="src"
        alt="Image"
        class="shadow-md rounded-full w-48 h-auto"
      />
  
      <img
        v-if="!src"
        :src="avatarImg"
        alt="Image"
        class="shadow-md rounded-full w-48 h-auto cursor-pointer"

      />
  
      <FileUpload
        mode="basic"
        @select="onFileSelect"
        auto
        class="p-button-outlined p-[1rem] mb-10"
      />
  
      <!-- Display any error messages -->
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import avatarImg from "@/images/avatarPic.jpg";
  import { useMessageStore } from "@/store/messageStore";
  import { supabase } from "@/clients/supabaseClient";
  
  const emit = defineEmits(["imageUrl"]);
  
  // Get the user ID from the global store
  const store = useMessageStore();
  const userId = ref(store.userId);
  
  const src = ref(null);
  const errorMessage = ref(null);

  //Display the image selected
  const onFileSelect = async (event) => {
    const file = event.files[0];
  
    // Check if a file is selected and it's an image
    if (!file || !file.type.startsWith('image/')) {
      errorMessage.value = "Please select a valid image file.";
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = async (e) => {
      src.value = e.target.result; // Set the image preview
      try {
        const imageUrl = await uploadImage(file, userId); // Upload the image
        emit("imageUrl", imageUrl); // Emit the uploaded image URL
        errorMessage.value = null; // Clear any previous error message
      } catch (error) {
        errorMessage.value = "Error uploading image: " + error.message; // Set the error message
      }
    };
  
    reader.readAsDataURL(file);
  };
  
  // Upload image to the storage into Supabase and get the URL
  const uploadImage = async (file, userId) => {
    const fileName = `UserProfilePicture/${userId.value}/${file.name}`;
  
    // Upload the image to Supabase Storage
    const { error } = await supabase.storage
      .from("UserProfilePicture") // Replace with your actual bucket name
      .upload(fileName, file);
  
    if (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload image."); // Provide a clearer error message
    }
  
    // Get the public URL of the uploaded image
    const { publicURL, error: urlError } = supabase.storage
      .from("UserProfilePicture")
      .getPublicUrl(fileName);
  
    if (urlError) {
      console.error("Error getting public URL:", urlError);
      throw new Error("Failed to retrieve image URL."); // Provide a clearer error message
    }
    
    return publicURL; // Return the public URL of the uploaded image
  };
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  