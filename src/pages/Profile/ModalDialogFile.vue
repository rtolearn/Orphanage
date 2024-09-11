<template>
    <!-- Call the component of uploading the file -->
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
import {ref} from "vue"
import avatarImg from "@/images/avatarPic.jpg";
const src = ref(null)
function onFileSelect(event) {
    const file = event.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
        src.value = e.target.result;
    };

    reader.readAsDataURL(file);
}
</script>