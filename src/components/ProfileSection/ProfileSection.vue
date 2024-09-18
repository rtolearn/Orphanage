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
import { useMessageStore } from "@/store/messageStore";
const userId = useMessageStore().userId;
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
  const { data } = await supabase
    .from("users")
    .select("image_url")
    .eq("user_id", userId)
    .single();
  if (data && data.image_url) {
    userProfilePicture.value = data.image_url;
  } 
};

// Fetch user profile picture when the component is mounted
onMounted(fetchUserProfilePicture);

// Fetch the image's URL from the table
</script>
