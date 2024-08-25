<template>
  <section class="bg-white" id="sign-in-form">
    <!-- Introduction Part for Sign In-->
    <div class="w-4/5 h-auto m-auto block mt-10">
      <h1
        class="font-bold text-gray-900 text-2xl sm:text-3xl flex justify-between items-center"
      >
        Welcome Back!
        <button
          class="text-sm border border-solid border-2 pt-1 pb-1 pl-2 pr-2 sm:pt-2 sm:pb-2 sm:pl-5 sm:pr-5 rounded-md"
        >
          <router-link to="/">Home</router-link>
        </button>
      </h1>
      <p
        class="mt-4 leading-relaxed text-gray-600 text-left text-sm sm:text-lg"
      >
        We're glad to see you again. Log in to stay connected with our
        community, manage your contributions, and learn about our latest
        initiatives. Your support helps us provide a loving home and brighter
        future for the children. If you're new, please register here to join our
        cause and make a difference.
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
          <signInIndividual />
      </div>

      <!-- For the form of Company -->
      <div v-show="selectedOption === 'Company'">
          <signInCompany />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import signInIndividual  from "./signInIndividual.vue";
import signInCompany from "./signInCompany.vue";
const options = ref(["Individual", "Company"]);
const selectedOption = ref("Individual");
</script>
