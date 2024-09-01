<template>
  <div class="flex flex-col h-auto m-5">
    <div
      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
      <!--  Schedule a meeting-->
      <!-- Name of patron -->
      <div class="m-5">
        <div class="my-3 block">
          <label for="name" class="block">Name:</label>
          <Field
            type="text"
            id="name"
            name="name"
            class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
            placeholder="Name"
            required
            :rules="validateName"
          />
          <ErrorMessage name="name" v-slot="{ message }">
            <span class="text-red-500 text-sm">
              {{ message }}
            </span>
          </ErrorMessage>
        </div>
        <!-- Gmail for contact / future communication -->
        <div class="my-3">
          <label for="name" class="block">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            :rules="validateEmail"
            class="mt-1 p-3 w-2/5 rounded-md border border-solid border-gray-350 text-sm text-gray-700 shadow-sm"
            placeholder="Email"
            required
          />
          <ErrorMessage name="email" v-slot="{ message }">
            <span class="text-red-500 text-sm">
              {{ message }}
            </span>
          </ErrorMessage>
        </div>
        <!-- Select a date for meeting (interview)-->

        <div class="card flex justify-center">
          <label for="date" class="block">Date:</label>
          <DatePicker v-model="date" name="date" placeholder="Select a date" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

const date = ref();
const validateName = (valueName) => {
  if (valueName && valueName.trim()) {
    if (/[^a-zA-Z\s]/.test(valueName)) {
      return "Name can only contain alphabetic characters";
    } else {
      return true;
    }
  } else {
    return "This field is required";
  }
};
const validateEmail = (valueEmail) => {
  if (valueEmail) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueEmail)) {
      return "Please enter a valid email address.";
    } else {
      return true;
    }
  } else {
    return "This field is required";
  }
};
</script>
