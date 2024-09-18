<template>
  <div
    class="sticky top-0 h-[62px] flex items-center px-1 justify-between bg-white z-50"
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
      <div v-if="statusAvatar">
        <!-- Component for users' profile -->
        <Profile :profileName="fullName" />
      </div>
      <div v-if="!statusAvatar" class="flex gap-4">
        <Button label="Log In" as="router-link" to="/sign-in" outlined />
        <Button label="Sign Up" as="router-link" to="/sign-up" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import NavLinks from "./NavLinks.vue";
import Profile from "../Profile/index.vue";
import { useMessageStore } from "@/store/messageStore";
import { supabase } from "@/clients/supabaseClient";

const visible = ref(false);
const messageStore = useMessageStore();
const statusAvatar = ref(messageStore.statusLogIn); // Initialize with store value

// Watch for changes in statusLogIn from the store
watch(
  () => messageStore.statusLogIn,
  (newStatus) => {
    statusAvatar.value = newStatus; // Update statusAvatar whenever statusLogIn changes
  }
);
const userId = messageStore.userId;
console.log(messageStore.statusLogIn);

const fullName = ref("");

//Get the information from the user and then display his name in the column there
const dynamicUserName = async () => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("first_name, last_name")
      .eq("user_id", userId)
      .single();
    if (error) {
      throw error;
    } else {
      fullName.value = `${data.first_name} ${data.last_name}`;
    }
  } catch (error) {
    alert(error.message);
  }
};

// //Check the status when the component is mounted and call the function to fetch the username

if (statusAvatar.value) {
  dynamicUserName();
}
</script>
