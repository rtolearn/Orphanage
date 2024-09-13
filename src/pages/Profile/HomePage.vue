<template>
  <Button
    class="w-full h-auto p-2 flex justify-center items-center gap-4 bg-green-300 border-none hover:scale-105"
    @click="openPosition('topright')"
    severity="secondary"
  >
    <!-- Profile Section -->
    <ProfileSection :profileName="props.profileName" />
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
    <!-- Upload file -->
    <ModalDialogFile @imageURL="handleImageURL" />
    <!-- Input Field -->
    <ModalDialogInputField @valueFileInput="handleFileInput" />
    <!-- Profile Button -->
    <ModalDialogButton
      :updatedValue="updatedValue"
      :imageURL="imageURL"
      @visibility="handleVisibility"
    />
  </Dialog>
</template>

<script setup>
import ProfileSection from "./ProfileSection.vue";
import ModalDialogFile from "./ModalDialogFile.vue";
import ModalDialogInputField from "./ModalDialogInputField.vue";
import ModalDialogButton from "./ModalDialogButton.vue";
//Define a prop for the value passed from the NavBar, and pass it to the ProfileSection
const props = defineProps({
  profileName: {
    type: String,
    required: true,
  },
});

import { ref } from "vue";
const position = ref("center");
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
};

//Take the values from the ModalDialogField before passing it to the ModalDialogButton
const updatedValue = ref({});
const handleFileInput = (value) => {
  console.log(value);
  updatedValue.value = { ...value };
};

//Handle the value of visible (passed from the ModalDialogButton)
const handleVisibility = (value) => {
  visible.value = value;
  console.log("after passing value: " + visible.value);
};

const imageURL = ref("");
//Handle the image's URL
const handleImageURL = (value) => {
  imageURL.value = value;
};
</script>
