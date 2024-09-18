<template>
  <!-- Input Field -->
  <div>
    <div
      v-for="(input, index) in inputField"
      :key="index"
      class="sm:flex items-center gap-4 mb-4"
    >
      <label :for="input.id" class="font-semibold w-1/2 block">{{
        input.title
      }}</label>
      <InputText
        v-model="updatedValue[input.id]"
        :id="input.id"
        class="w-full"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script setup>

import { reactive, watch, onMounted } from "vue";
import {displayValueInInputField} from "../../services/profilesectionService"

//Declare an object to store all the updated value
const updatedValue = reactive({
  first_name: "",
  last_name: "",
  contact_number: "",
  state: "",
  address: "",
});
//Object for input field
const inputField = [
  { title: "First Name", id: "first_name" },
  { title: "Last Name", id: "last_name" },
  { title: "Contact Number", id: "contact_number" },
  { title: "State", id: "state" },
  { title: "Address", id: "address" },
];

const emit = defineEmits(["valueFileInput"]);
// Watch for changes in the updatedValue object
watch(
  updatedValue,
  (newValue) => {
    console.log(newValue);
    emit("valueFileInput", newValue);
  },
  { deep: true }
);

// Display all the related user's information
onMounted(async () => {
  displayValueInInputField(updatedValue);
});



</script>
