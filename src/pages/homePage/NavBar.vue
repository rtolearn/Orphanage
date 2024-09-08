<template>
  <div
    class="sticky top-0 h-[62px] flex items-center px-6 justify-between bg-white z-50"
  >
    <div class="flex">
      <!-- Logo -->
      <div class="w-[50px] h-[50px]">
        <a href="/">
          <img
            class="w-full h-full object-contain"
            src="@/images/logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <!-- Mobile Side Menu -->
      <div class="card flex justify-center lg:hidden">
        <Drawer v-model:visible="visible" header="Menu" class="!w-[15rem]">
          <NavLinks />
        </Drawer>
        <Button icon="pi pi-bars" @click="visible = true" text />
      </div>
    </div>
    <!-- Menu -->
    <NavLinks class="hidden lg:block" />
    <!-- Log In / Sign Up -->
    <div>
      <!-- //Display the avatar if the user log in their account -->

      <div v-if="statusAvatar" class="flex justify-center items-center gap-4">
        <Avatar :image="avatarImg" class="mr-2" size="large" shape="circle" />
        <div class="flex gap-1">
          <h1>Welcome!</h1>
          <h1 class="font-bold">Chen Yang</h1>
        </div>
      </div>
      <div v-if="!statusAvatar" class="flex gap-4">
        <Button label="Log In" as="router-link" to="/sign-in" outlined />
        <Button label="Sign Up" as="router-link" to="/sign-up" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavLinks from "./NavLinks.vue";
//Import Avatar from 'primevue/avatar';

const visible = ref(false);

//Import global variable
import { useMessageStore } from "@/store/messageStore";
const messageStore = useMessageStore();
const statusAvatar = messageStore.statusLogIn;
console.log(messageStore.statusLogIn);

//Import the image for avatar for temporary usage
import avatarImg from "@/images/avatarPic.jpg";

//Get the information from the user and then display his name in the column there
//Confirm with teammate of the relationship between the entity first
</script>
