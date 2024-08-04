<template>
  <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->

  <section class="bg-white">
    <div class=" flex justify-center items-center m-5  text-sm">
      <SelectButton
        v-model="selectedOption"
        :options="options"
        aria-labelledby="basic"
        @change="changeStatus"
      />
    </div>
    <div class="md:grid md:min-h-screen md:grid-cols-24 xl:grid-cols-12 ">
      <aside class="relative block h-16 lg:col-span-12 xl:col-span-6 h-full" :class="[imageOrder]">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>
      <!-- Section for individual to sign Up -->
      <div
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        :class="[formPositionIndividual, formOpacityIndividual]"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <h1
            class=" font-bold text-gray-900 text-2xl sm:text-3xl flex justify-between items-center"
          >
            Welcome Back!
            <button
              class="text-sm border border-solid border-2 pt-1 pb-1 pl-2 pr-2 sm:pt-2 sm:pb-2 sm:pl-5 sm:pr-5 rounded-md"
            >
              <router-link to="/">Home</router-link>
            </button>
          </h1>

          <p class="mt-4 leading-relaxed text-gray-600 text-left text-sm sm:text-lg">
            We're glad to see you again. Log in to stay connected with our
            community, manage your contributions, and learn about our latest
            initiatives. Your support helps us provide a loving home and
            brighter future for the children. If you're new, please register
            here to join our cause and make a difference.
          </p>

          <form
            action="#"
            class="mt-8 p-5 grid content-center grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
          >
            <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl ">
              Sign in to your account
            </h1>
            <div class="col-span-6">
              <input
                type="email"
                id="Email"
                name="email"
                class="p-5 w-full rounded-md border-1 border-solid border-black bg-green text-sm text-gray-500 shadow-sm"
                placeholder="Enter Email"
  
              />
            </div>

            <div class="col-span-6">
              <input
                type="password"
                id="Password"
                name="password"
                class="p-5 w-full rounded-md border-gray-200 bg-white text-sm  text-gray-700 shadow-sm"
                placeholder="Enter Password"
              />
            </div>

            <div class="col-span-6 m-3">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="size-7 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div
              class="col-span-6 m-auto block  text-center sm:flex sm:items-center sm:gap-4 sm:justify-center m-3"
            >
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Don't have an account yet?
                <span class="text-gray-700 hover:underline hover:text-blue-500">
                  <router-link to="/sign-up">
                      Sign Up
                  </router-link>                  
                </span>                 
              </p>
            </div>
          </form>
        </div>
      </div>























      <!-- Section for Company to sign Up -->
      <div
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        :class="[formPositionCompany, formOpacityCompany]"
      >
        <div class="max-w-xl lg:max-w-3xl">
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

          <p class="mt-4 leading-relaxed text-gray-600 text-left text-sm sm:text-lg">
            We're glad to see you again. Log in to stay connected with our
            community, manage your contributions, and learn about our latest
            initiatives. Your support helps us provide a loving home and
            brighter future for the children. If you're new, please register
            here to join our cause and make a difference.
          </p>
          <form
            action="#"
            class="mt-8 p-5 grid content-center grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
          >
            <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">
              Sign in to your account
            </h1>
            <div class="col-span-6">
              <input
                type="email"
                id="Email"
                name="email"
                class="p-5 w-full rounded-md border-1 border-solid border-black bg-green text-sm  text-gray-500 shadow-sm"
                placeholder="Enter Company Email"
              />
            </div>
            <div class="col-span-6">
              <input
                type="password"
                id="Password"
                name="password"
                class="p-5 w-full rounded-md border-gray-200 bg-white text-sm  text-gray-700 shadow-sm"
                placeholder="Enter Password"
              />
            </div>
            <div class="col-span-6 m-3">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="size-7 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>
            <div
              class="col-span-6 m-auto block  text-center sm:flex sm:items-center sm:gap-4 sm:justify-center m-3"
            >
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have an account yet?
                <span class="text-gray-700 hover:underline hover:text-blue-500">
                  <router-link to="/sign-up">
                      Sign Up
                  </router-link>                  
                </span>   
              </p>
            </div>
          </form>

          
        </div>
      </div>
  






    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const options = ref(["Individual", "Company"]);
const selectedOption = ref("Individual");
let formPositionIndividual = ref("");
let formOpacityIndividual = ref("");
let formPositionCompany = ref("");
let formOpacityCompany = ref("");
let imageOrder = ref("order-last")
// let formPositionCompany = ref('');
// let formOpacityCompany = ref('');

if (selectedOption.value === "Individual") {
  formPositionIndividual = ref("relative");
  formOpacityIndividual = ref("opacity-100");
  formPositionCompany = ref("absolute");
  formOpacityCompany = ref("opacity-0");
} else {
  formPositionIndividual = ref("absolute");
  formOpacityIndividual = ref("opacity-0");
  formPositionCompany = ref("relative");
  formOpacityCompany = ref("opacity-100");
}
const changeStatus = () => {
  // return selectedOption.value === "One-Way"
  //   ? "You have selected the One-Way option. Here is more information about it."
  //   : "You have selected the Return option. Here is more information about it.";
  // :class="[formPosition, formOpacity]"

  if (selectedOption.value === "Company") {
    console.log(selectedOption.value);
    formPositionIndividual = ref("absolute");
    formOpacityIndividual = ref("opacity-0");
    formPositionCompany = ref("relative");
  formOpacityCompany = ref("opacity-100");
  imageOrder = ref("order-first");
  } else {
    console.log(selectedOption.value);
    formPositionIndividual = ref("relative");
    formOpacityIndividual = ref("opacity-100");
    formPositionCompany = ref("absolute");
  formOpacityCompany = ref("opacity-0");
  imageOrder = ref("order-last");
  }
};
</script>
