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
            <option value="">--Select a fund--</option>
            <option v-for="amount in fundOptions" :key="amount" :value="amount">
              RM{{ amount }}
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
            class="mt-1 p-3 rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
            required
          />
          <span v-if="errors.date" class="text-red-500 text-sm">
            {{ errors.date }}
          </span>
        </div>

        <div class="py-6 flex gap-2">
          <button
            type="button"
            class="bg-gray-300 p-2 rounded"
            @click="handleClick(`2`)"
          >
            Back
          </button>
          <button type="submit" class="bg-blue-500 text-white p-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
//Define the emit event
const emit = defineEmits(["currentStep", "collectDataPatron"]);
// Declare an object to collect the data of the form
const data = ref({
  name: "",
  email: "",
  fundRange: "",
  date: "",
});

// Array of affordable fund options
const fundOptions = [10000, 20000, 30000, 40000, 50000]; // Add more as needed

const errors = ref({}); // For storing validation errors

const onSubmit = () => {
  // Clear previous errors
  errors.value = {};

  // Validate name
  if (!data.value.name || !data.value.name.trim()) {
    errors.value.name = "This field is required";
  } else if (/[^a-zA-Z\s]/.test(data.value.name)) {
    errors.value.name = "Name can only contain alphabetic characters";
  }

  // Validate email
  if (!data.value.email) {
    errors.value.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.value.email)) {
    errors.value.email = "Please enter a valid email address.";
  }

  // Validate date
  if (!data.value.date) {
    errors.value.date = "This field is required";
  }
  // Validate fund selection
  if (!data.value.fund) {
    errors.value.fund = "Please select a fund.";
  }
  // If no errors, submit the form (you can add your submission logic here)
  if (!errors.value.name && !errors.value.email && !errors.value.date) {
    emit("collectDataPatron", data);
    emit("currentStep", `4`);
  }
};

const handleClick = (value) => {
  // Handle back button click (you can add your logic here)
  emit("CurrentStep", value);
  console.log("Going back to step:", value);
};
</script>
