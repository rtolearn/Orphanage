<template>
  <form @submit.prevent="onSubmit" class="flex flex-col h-auto m-5">
    <div
      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
      <div class="m-5">
        <!-- Name of patron -->
        <div class="my-3 block">
          <label for="name" class="block">Name:</label>
          <input
            type="text"
            id="name"
            v-model="data.name"
            class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
            placeholder="Name"
            required
          />
          <span v-if="errors.name" class="text-red-500 text-sm">
            {{ errors.name }}
          </span>
        </div>

        <!-- Email for contact / future communication -->
        <div class="my-3">
          <label for="email" class="block">Email:</label>
          <input
            type="email"
            id="email"
            v-model="data.email"
            class="mt-1 p-3 w-2/5 rounded-md border border-solid border-gray-350 text-sm text-gray-700 shadow-sm"
            placeholder="Email"
            required
          />
          <span v-if="errors.email" class="text-red-500 text-sm">
            {{ errors.email }}
          </span>
        </div>

        <!-- Selection for affordable fund -->
        <div class="my-3">
          <label for="fund" class="block">Select Affordable Fund:</label>
          <select
            id="fund"
            v-model="data.fund"
            class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
            required
          >
            <option value="" disabled selected>--Select a fund--</option>
            <option v-for="amount in fundOptions" :key="amount" :value="amount">
              {{ amount }}
            </option>
          </select>
          <span v-if="errors.fund" class="text-red-500 text-sm">{{
            errors.fund
          }}</span>
        </div>

        <!-- Date Picker for meeting (interview) -->
        <div class="card flex justify-center my-3">
          <label for="date" class="block">Date:</label>
          <input
            type="date"
            id="date"
            v-model="data.date"
            :min="minDate"
            class="mt-1 p-3 rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
            required
          />
          <span v-if="errors.date" class="text-red-500 text-sm">{{
            errors.date
          }}</span>
        </div>

        <div class="p-6 flex gap-2 text-sm sm:text-base">
          <button
            class="bg-gray-300 py-2 px-4 rounded"
            @click="handleClick('2')"
          >
            Back
          </button>
          <button
            class="bg-green-500 text-white py-2 px-4 rounded"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import * as Yup from "yup";

//Define the emit event
const emit = defineEmits(["currentStep", "collectDataPatron"]);

// Declare an object to collect the data of the form
const data = ref({
  name: "",
  email: "",
  fund: "",
  date: "",
});

// Array of affordable fund options
const fundOptions = [
  "<RM10000",
  "<RM20000",
  "<RM30000",
  "<RM40000",
  "<RM50000",
];
// Get today's date for date picker (min date)
const today = new Date();
const minDate = today.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

// Store validation errors
const errors = ref({});

// Define Yup validation schema
const schema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabetic characters"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  fund: Yup.string().required("Please select a fund."),
  date: Yup.string().required("This field is required"),
});

// Validate and handle form submission
const onSubmit = async () => {
  errors.value = {};

  try {
    await schema.validate(data.value, { abortEarly: true });

    // If validation passes, submit the form
    emit("collectDataPatron", data);
    emit("currentStep", "4");
  } catch (err) {
    // If validation fails, populate errors
    err.inner.forEach((error) => {
      errors.value[error.path] = error.message;
    });
  }
};

const handleClick = (value) => {
  emit("currentStep", value);
  console.log("Going back to step:", value);
};
</script>
