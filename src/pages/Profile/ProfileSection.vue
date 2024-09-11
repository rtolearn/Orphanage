<template>
  <!-- Profile Section -->
  <Avatar :image="avatarImg" class="mr-2" size="large" shape="circle" />
  <div class="flex gap-1 hidden sm:block">
    <h1>Welcome!</h1>

    <h1 class="font-bold">{{ props.profileName }}</h1>
  </div>
</template>

<script setup>
import avatarImg from "@/images/avatarPic.jpg";

const props = defineProps({
  profileName: {
    type: String,
    required: true,
  },
});
</script>
