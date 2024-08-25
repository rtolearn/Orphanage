<template>
  <section class="bg-white" id="sign-in-form">
    <!-- Introduction Part for Sign In-->
    <div class="w-4/5 h-auto m-auto block mt-10">
      <h1
        class="font-bold text-gray-900 text-2xl sm:text-3xl flex justify-between items-center"
      >
        Join Our Community
        <button
          class="text-sm border border-solid border-2 pt-1 pb-1 pl-2 pr-2 sm:pt-2 sm:pb-2 sm:pl-5 sm:pr-5 rounded-md"
        >
          <router-link to="/">Home</router-link>
        </button>
      </h1>
      <p
        class="mt-4 leading-relaxed text-gray-600 text-left text-sm sm:text-lg"
      >
        Welcome! We're excited to have you with us. +By creating an account,
        you'll be able to support our mission, stay updated on our activities,
        and connect with a community dedicated to helping children in need. Your
        involvement makes a real difference in the lives of the children we
        serve. Please fill out the form below to get started and become a valued
        member of our cause.
      </p>
    </div>

    <!-- Toggel button to choose which identity to sign in -->
    <div class="flex justify-center items-center mt-5 mb-0 text-sm">
      <SelectButton
        v-model="selectedOption"
        :options="options"
        aria-labelledby="basic"

      />
    </div>
    
    <!-- Part of the form to sign in -->
    <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
      <!-- For the form of individual -->
      <div v-show="selectedOption === 'Individual'">
        <signUpIndividual />
      </div>

      <!-- For the form of Company -->
      <div v-show="selectedOption === 'Company'">
        <signUpCompany />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import signUpIndividual from './signUpIndividual.vue'
import signUpCompany from "./signUpCompany.vue";
const options = ref(["Individual", "Company"]);
const selectedOption = ref("Individual");

</script>
