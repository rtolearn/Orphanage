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
        v-model="input.value"
        :id="input.id"
        class="w-full"
        autocomplete="off"
        :placeholder="input.title + `...`"
      />
    </div>
  </div>
</template>

<script setup>
//Declare an object to store all the updated value
const updatedValue = {
  first_name: "",
  last_name: "",
  email: "",
  contact_number: "",
  state: "",
  address: "",
};
//Object for input field
const inputField = [
  {
    title: "First Name",
    id: "first_name",
    value: updatedValue.first_name,
  },
  {
    title: "Last Name",
    id: "last_name",
    value: updatedValue.last_name,
  },
  {
    title: "Contact Number",
    id: "contact_number",
    value: updatedValue.contact_number,
  },
  {
    title: "State",
    id: "state",
    value: updatedValue.state,
  },
  {
    title: "Address",
    id: "address",
    value: updatedValue.address,
  },
];

const emit = defineEmits(['valueFileInput'])
emit("valueFileInput", updatedValue)
</script>

