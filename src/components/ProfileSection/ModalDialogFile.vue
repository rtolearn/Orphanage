<template>
  <div class="card flex flex-col items-center gap-6">
    <img v-if="src" :src="src" alt="Profile Picture" class="shadow-md rounded-full w-48 h-auto" />
    <FileUpload mode="basic" @select="handleFileSelect" class="p-button-outlined p-[1rem] mb-10" />
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"; // Import necessary Vue features
import { defaultEditProfilePicture, onFileSelect } from "../../services/profilesectionService";
import avatarImg from "@/images/avatarPic.jpg";

// Define emits directly in the setup script
const emit = defineEmits(["imageURL"]); // Correctly use defineEmits here

// Define refs for image source and error message
const src = ref(avatarImg);
const errorMessage = ref(null);

// Function to handle file selection
const handleFileSelect = async (event) => {
  await onFileSelect(event, emit, src); // Pass emit to the function
};

// Fetch default profile picture on mounted
onMounted(async () => {
  await defaultEditProfilePicture(src);
});
</script>
