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
      <h1 class="font-bold">{{props.profileName}}</h1>
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
    <div class="card flex flex-col items-center gap-6">
      <!-- Upload the profile picture -->
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
        class="shadow-md rounded-full w-48 h-auto"
        @click="onFileSelect"
      />

      <FileUpload
        mode="basic"
        @select="onFileSelect"
        auto
        class="p-button-outlined p-[1rem] mb-10"
      />
    </div>
    <!-- Update First Name -->
    <div class="sm:flex items-center gap-4 mb-4">
      <label for="first_name" class="font-semibold w-1/2 block"
        >First Name</label
      >
      <InputText
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
        @click=" handleSignOut"
      ></Button>
      <div>
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="Update" @click="visible = false"></Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import avatarImg from "@/images/avatarPic.jpg";

const props = defineProps({
    profileName: {
        type: String,
        required: true
    }
})
//Manipulate with the updation of users' profile
const position = ref("center");
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
};

//For uploading the picture
const src = ref(null);

function onFileSelect(event) {
  const file = event.files[0];
  const reader = new FileReader();

  reader.onload = async (e) => {
    src.value = e.target.result;
  };

  reader.readAsDataURL(file);
}
import { useMessageStore } from "@/store/messageStore";
//Function for handling signing out
const store = useMessageStore();
    const message = ref(store.statusLogIn);
const handleSignOut = () => {
    
    store.setStatus(!message.value)
    visible.value = false;  // Close the dialog
}
</script>
