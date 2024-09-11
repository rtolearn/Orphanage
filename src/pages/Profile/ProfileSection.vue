<template>
  <!-- Profile Section -->
  <Avatar
    :image="userProfilePicture"
    class="mr-2"
    size="large"
    shape="circle"
  />
  <div class="flex gap-1 hidden sm:block">
    <h1>Welcome!</h1>
    <h1 class="font-bold">{{ props.profileName }}</h1>
  </div>
</template>

<script setup>
import avatarImg from "@/images/avatarPic.jpg";
import { ref, onMounted } from "vue";
import { supabase } from "@/clients/supabaseClient";

const props = defineProps({
  profileName: {
    type: String,
    required: true,
  },
});

// Reactive reference for the image source
const userProfilePicture = ref(avatarImg); // Default image

// Function to fetch user profile picture
const fetchUserProfilePicture = async () => {
  // Get the currently authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) {
    alert("User is not authenticated.");
    return;
  }
  try {
    const { data, error } = await supabase
      .from("sign_up")
      .select("image_url")
      .eq("user_id", user.id)
      .single();
      userProfilePicture.value = data.image_url;
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};

// Fetch user profile picture when the component is mounted
onMounted(fetchUserProfilePicture);

// Fetch the image's URL from the table
</script>
