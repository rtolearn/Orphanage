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
        @change="changeStatus"
      />
    </div>

    <!-- Part of the form to sign in -->
    <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
      <!-- For the form of individual -->
      <div v-show="selectedOption === 'Individual'">
        <form
          action="#"
          class="mt-8 p-5 grid content-center grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
        >
          <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">
            Sign Up
          </h1>
          <div class="col-span-6 sm:col-span-3">
            <input
              type="text"
              id="FirstName"
              name="first_name"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="First Name"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <input
              type="text"
              id="LastName"
              name="last_name"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Last Name"
            />
          </div>
          <div
            class="col-span-6 sm:col-span-6 flex justify-between items-center"
          >
            <div class="col-span-6 sm:col-span-3">
              <input
                type="number"
                id="age"
                name="age"
                class="mt-1 p-1.5 w-4/5 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Age"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <select
                name="statesSelect"
                id="statesSelect"
                class="mt-1 w-full h-auto rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                <option value="Male">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div
            class="col-span-6 sm:col-span-6 flex justify-between items-center"
          >
            <div class="col-span-6 sm:col-span-3">
              <!-- <label
                    for="statesSelect"
                    class=" text-sm text-gray-900"
                  >
                    State / Region

                  </label> -->

              <select
                name="statesSelect"
                id="statesSelect"
                class="mt-1.5 w-4/5 h-auto rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                <option value="">State / Region</option>
                <optgroup label="J">
                  <option value="Johor">Johor</option>
                </optgroup>

                <optgroup label="K">
                  <option value="Kedah">Kedah</option>
                  <option value="Kelantan">Kelantan</option>
                </optgroup>

                <optgroup label="M">
                  <option value="Malacca">Malacca</option>
                </optgroup>

                <optgroup label="N">
                  <option value="Negeri Sembilan">Negeri Sembilan</option>
                </optgroup>

                <optgroup label="P">
                  <option value="Pahang">Pahang</option>
                  <option value="Penang">Penang</option>
                  <option value="Perak">Perak</option>
                  <option value="Perlis">Perlis</option>
                </optgroup>

                <optgroup label="S">
                  <option value="Sabah">Sabah</option>
                  <option value="Sarawak">Sarawak</option>
                  <option value="Selangor">Selangor</option>
                </optgroup>

                <optgroup label="T">
                  <option value="Terengganu">Terengganu</option>
                </optgroup>

                <optgroup label="F">
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Putrajaya">Putrajaya</option>
                  <option value="Labuan">Labuan</option>
                </optgroup>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <span class="background-gray"> Malaysia </span>
            </div>
          </div>

          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Email"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <input
              type="password"
              id="Password"
              name="password"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Password"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Password Confirmation"
            />
          </div>

          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Phone Number"
            />
          </div>
          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Address"
            />
          </div>
        </form>
      </div>

      <!-- For the form of Company -->
      <div v-show="selectedOption === 'Company'">
        <form
          action="#"
          class="mt-8 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
        >
          <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">
            Sign Up
          </h1>
          <div class="col-span-6 sm:col-span-6">
            <input
              type="text"
              id="CompanyName"
              name="company_name"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Company Name"
            />
          </div>

          <div
            class="col-span-6 sm:col-span-6 sm:flex sm:justify-between sm:items-center"
          >
            <div class="col-span-6 sm:col-span-3 w-full sm:w-2/5 mb-4 sm:mb-0">
              <label
                for="LastName"
                class="block text-sm font-medium text-gray-700 m-3 ml-0"
              >
                Company started at:
              </label>

              <input
                type="date"
                id="LastName"
                name="last_name"
                class="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Company start at"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 w-full sm:w-2/5">
              <select
                name="industrySelect"
                id="industrySelect"
                class=" w-full rounded-sm border-gray-300 text-gray-700 sm:text-sm"
              >
                <option value="">Select Industry</option>
                <option value="technology">Technology</option>
                <option value="environment">Environment</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="construction">Construction</option>
                <option value="retail">Retail</option>
                <option value="transportation">Transportation</option>
                <option value="energy">Energy</option>
                <option value="agriculture">Agriculture</option>
                <option value="real_estate">Real Estate</option>
                <option value="telecommunications">Telecommunications</option>
                <option value="hospitality">Hospitality</option>
                <option value="media">Media</option>
                <option value="legal">Legal</option>
                <option value="nonprofit">Nonprofit</option>
                <option value="government">Government</option>
              </select>
            </div>
          </div>

          <div
            class="col-span-6 sm:col-span-6 flex justify-between items-center"
          >
            <div class="col-span-6 sm:col-span-3">
              <!-- <label
                for="statesSelect"
                class="text-sm font-medium text-gray-900"
              >
                State / Region
              </label> -->

              <select
                name="statesSelect"
                id="statesSelect"
                class="mt-1 w-4/5 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                <option value="">State / Region</option>
                <optgroup label="J">
                  <option value="Johor">Johor</option>
                </optgroup>

                <optgroup label="K">
                  <option value="Kedah">Kedah</option>
                  <option value="Kelantan">Kelantan</option>
                </optgroup>

                <optgroup label="M">
                  <option value="Malacca">Malacca</option>
                </optgroup>

                <optgroup label="N">
                  <option value="Negeri Sembilan">Negeri Sembilan</option>
                </optgroup>

                <optgroup label="P">
                  <option value="Pahang">Pahang</option>
                  <option value="Penang">Penang</option>
                  <option value="Perak">Perak</option>
                  <option value="Perlis">Perlis</option>
                </optgroup>

                <optgroup label="S">
                  <option value="Sabah">Sabah</option>
                  <option value="Sarawak">Sarawak</option>
                  <option value="Selangor">Selangor</option>
                </optgroup>

                <optgroup label="T">
                  <option value="Terengganu">Terengganu</option>
                </optgroup>

                <optgroup label="F">
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Putrajaya">Putrajaya</option>
                  <option value="Labuan">Labuan</option>
                </optgroup>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <span class="background-gray"> Malaysia </span>
            </div>
          </div>

          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Email"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <input
              type="password"
              id="Password"
              name="password"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Password"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Password Confirmation"
            />
          </div>

          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Office Number"
            />
          </div>

          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Company SSN"
            />
          </div>

          <div class="col-span-6">
            <input
              type="email"
              id="Email"
              name="email"
              class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              placeholder="Address"
            />
          </div>
        </form>
      </div>

      <!-- Part for user to create account -->
      <div
        class="m-5 text-center sm:flex sm:items-center sm:gap-4 sm:justify-center"
      >
        <button
          class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Create an account
        </button>
        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
          Don't have an account yet?
          <span class="text-gray-700 hover:underline hover:text-blue-500">
            <router-link to="/sign-in"> Sign In </router-link>
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
