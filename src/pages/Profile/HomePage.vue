<template>
  <Button
    class="w-full h-auto p-2 flex justify-center items-center gap-4 bg-green-300 border-none hover:scale-105"
    icon="pi pi-arrow-down-left"
    @click="openPosition('topright')"
    severity="secondary"
  >
    <Avatar :image="avatarImg" class="mr-2" size="large" shape="circle" />
    <div class="flex gap-1 hidden sm:block">
      <h1>Welcome!</h1>
      <h1 class="font-bold">{{ props.profileName }}</h1>
    </div>
  </Button>

  <Dialog
    v-model:visible="visible"
    header="Edit Profile"
    :style="{ width: '100%' }"
    :position="position"
    :modal="true"
    :draggable="false"
  >
    <span class="text-surface-500 dark:text-surface-400 block m-auto"
      >Update your information.</span
    >
    <!-- Call the component of uploading the file -->
    <UploadProfileImage :imageUrl="handleImageUrl"/>
    <!-- Update First Name -->
    <div class="sm:flex items-center gap-4 mb-4">
      <label for="first_name" class="font-semibold w-1/2 block"
        >First Name</label
      >
      <InputText
        v-model="updatedValue.first_name"
        id="first_name"
        class="w-full"
        autocomplete="off"
        placeholder="First Name..."
      />
    </div>
    <!-- Update Last Name -->
    <div class="sm:flex items-center gap-4 mb-4">
      <label for="last_name" class="font-semibold w-1/2 block">Last Name</label>
      <InputText
        v-model="updatedValue.last_name"
        id="last_name"
        class="w-full"
        autocomplete="off"
        placeholder="Last Name..."
      />
    </div>
    <!-- Update Email -->
    <div class="sm:flex items-center gap-4 mb-4">
      <label for="email" class="font-semibold w-1/2 block">Email</label>
      <InputText
        v-model="updatedValue.email"
        id="email"
        class="w-full"
        autocomplete="off"
        placeholder="Email..."
      />
    </div>
    <!-- Update Contact Number -->
    <div class="sm:flex items-center gap-4 mb-4">
      <label for="contact_number" class="font-semibold w-1/2 block"
        >Contact Number</label
      >
      <InputText
        v-model="updatedValue.contact_number"
        id="contact_number"
        class="w-full"
        autocomplete="off"
        placeholder="Contact Number..."
      />
    </div>
    <!-- Update State -->
    <div class="sm:flex items-center gap-4 mb-4">
      <label for="state" class="font-semibold w-1/2 block">State</label>
      <InputText
        v-model="updatedValue.state"
        id="state"
        class="w-full"
        autocomplete="off"
        placeholder="State..."
      />
    </div>
    <!-- Update Address -->
    <div class="sm:flex items-center gap-4 mb-8">
      <label for="address" class="font-semibold w-1/2 block">Address</label>
      <InputText
        v-model="updatedValue.address"
        id="address"
        class="w-full"
        autocomplete="off"
        placeholder="Address..."
      />
    </div>
    <div class="flex justify-between gap-2">
      <Button
        type="button"
        label="Sign Out"
        severity="danger"
        @click="handleSignOut"
      ></Button>
      <div>
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="Update" @click="handleUpdate"></Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import UploadProfileImage from "./UploadProfileImg.vue";
//Declare an object to store all the updated value
const updatedValue = {
  first_name: "",
  last_name: "",
  email: "",
  contact_number: "",
  state: "",
  address: "",
};
//Define a prop for the value passed from the NavBar
const props = defineProps({
  profileName: {
    type: String,
    required: true,
  },
});
//Manipulate with the updation of users' profile
const position = ref("center");
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
};

import { useMessageStore } from "@/store/messageStore";
const store = useMessageStore();
const message = ref(store.statusLogIn);
//Function for handling signing out
const handleSignOut = () => {
  store.clearStorage();
  store.setStatus(!message.value);
  visible.value = false; // Close the dialog
};

import { supabase } from "@/clients/supabaseClient";
const userId = ref(store.userId);
const imageUrl = ref("");
const handleImageUrl = (value) =>{
  imageUrl.value = value;
}
const handleUpdate = async () => {
  visible.value = false;
  try {
    // Update user profile information in the database
    const { error } = await supabase
      .from("sign_up")
      .update({
        first_name: updatedValue.first_name,
        last_name: updatedValue.last_name,
        email: updatedValue.email,
        contact_number: updatedValue.contact_number,
        state: updatedValue.state,
        address: updatedValue.address,
        image_url: imageUrl, // Include image URL if it exists
      })
      .eq("user_id", userId.value);

    if (error) {
      throw error;
    }
    alert("Data updated");
  } catch (error) {
    alert(error.message);
  }
};

//Create function to handle the submission of the file into the storage in supabase
</script>
