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
        @change="changeStatus"
      />
    </div>

    <!-- Part of the form to sign in -->
    <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
      <!-- For the form of individual -->
      <div v-show="selectedOption === 'Individual'">
        <form
          action="#sign-in-form"
          class="w-full h-full p-4 sm:p-8 border-2 border-solid border-black-600 rounded-md m-auto block"
        >
          <h1 class="mb-10 w-full text-center text-lg sm:text-xl">Sign in</h1>
          <div class="mt-5 w-full">
            <input
              type="email"
              id="Email"
              name="email"
              class="p-5 w-full rounded-md border-1 border-solid border-black bg-green text-sm text-gray-500 shadow-sm"
              placeholder="Enter Email"
            />
          </div>

          <div class="mt-5 w-full">
            <input
              type="password"
              id="Password"
              name="password"
              class="p-5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Enter Password"
            />
          </div>

          <div class="mt-10">
            <label for="MarketingAccept" class="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span class="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>
        </form>
      </div>

      <!-- For the form of Company -->
      <div v-show="selectedOption === 'Company'">
        <form
          action="#sign-in-form"
          class="w-full h-full p-4 sm:p-8 border-2 border-solid border-black-600 rounded-md m-auto block"
        >
          <h1 class="mb-10 w-full text-center text-lg sm:text-xl">Sign in</h1>
          <div class="mt-5 w-full">
            <input
              type="email"
              id="Email"
              name="email"
              class="p-5 w-full rounded-md border-1 border-solid border-black bg-green text-sm text-gray-500 shadow-sm"
              placeholder="Enter Company Email"
            />
          </div>
          <div class="mt-5 w-full">
            <input
              type="password"
              id="Password"
              name="password"
              class="p-5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Enter Company Password"
            />
          </div>
          <div class="mt-10">
            <label for="MarketingAccept" class="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />
              <span class="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>
        </form>
      </div>

      <!-- Part for user to create account -->
      <div
        class="mt-5 text-center sm:flex sm:items-center sm:gap-4 sm:justify-center"
      >
        <button
          class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Create an account
        </button>
        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
          Don't have an account yet?
          <span class="text-gray-700 hover:underline hover:text-blue-500">
            <router-link to="/sign-up"> Sign Up </router-link>
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const options = ref(["Individual", "Company"]);
const selectedOption = ref("Individual");
</script>
