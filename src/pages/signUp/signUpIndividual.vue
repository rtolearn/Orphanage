<template>
  <Form
    action="#"
    class="mt-8 p-5 grid content-center grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
    @submit = "handleSignUp"
    >
    <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">Sign Up</h1>

    <!-- Validation of First Name -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.first_name"
        type="text"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="First Name"
        required
        name="first_name"
        :rules="validateName"
      />
      <ErrorMessage name="first_name" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Last Name -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.last_name"
        name="last_name"
        type="text"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Last Name"
        required
        :rules="validateName"
      />
      <ErrorMessage name="last_name" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Age -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.age"
        type="number"
        name="age"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 text-sm text-gray-700 shadow-sm"
        placeholder="Age"
        required
      />
      <ErrorMessage name="age" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Gender -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.gender"
        as="select"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 text-sm text-gray-700 shadow-sm"
        name="gender"
        :rules="validateSelectionInput"
      >
        <option value="" disabled>Gender</option>
        <option v-for="gender in genderType" :key="gender" :value="gender">
          {{ gender }}
        </option>
      </Field>
      <ErrorMessage name="gender" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of State Selection -->
    <div class="col-span-6 sm:col-span-6 border border-solid border-gray-350 flex justify-between items-center">
      <Field
        v-model="signUpIndividual.state"
        as="select"
        class="m-3 p-1 w-4/5 rounded-sm border border-solid border-gray-450 text-gray-700 sm:text-sm block"
        name="state"
        :rules="validateSelectionInput"
      >
        <option value="" disabled>State / Region</option>
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </Field>
      <ErrorMessage name="state" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Email -->
    <div class="col-span-6">
      <Field
        v-model="signUpIndividual.email"
        type="email"
        name="email"
        :rules="validateEmail"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Email"
        required
      />
      <ErrorMessage name="email" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Password -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.password"
        type="password"
        name="password"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Password"
        required
      />
      <ErrorMessage name="password" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Password Confirmation -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.password_confirmation"
        type="password"
        name="password_confirmation"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Confirm Password"
        required
      />
      <ErrorMessage name="password_confirmation" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Phone Number -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.phone_number"
        type="tel"
        id="contact_number"
        name="contact_number"
        :rules="validatePhoneNumber"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Contact Number"
      />
      <ErrorMessage name="contact_number" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Validation of Address -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpIndividual.address"
        type="text"
        name="address"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Address"
        required
        :rules="validateEmptyContent"
      />
      <ErrorMessage name="address" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Submit Button -->
    <div class="col-span-6 m-auto block text-center sm:flex sm:items-center sm:gap-4 sm:justify-center">
      <button
        class="m-auto block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        type="submit"
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
  </Form>
</template>

<script setup>
import { ref } from "vue";
import states from "@/system_information/data/states.json";
import genderType from "@/system_information/data/gender.json";
import validateName from "@/system_information/function/validateName.js";
import validateEmail from "@/system_information/function/validateEmail.js";
import validatePhoneNumber from "@/system_information/function/validatePhoneNumber.js";
import validateSelectionInput from "@/system_information/function/validateSelectionInput.js";
import validateEmptyContent from "@/system_information/function/validateEmptyContent.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import {signUp} from '@/clients/authentication'
const signUpIndividual = ref({
  first_name: "",
  last_name: "",
  age: null,
  gender: "",
  state: "",
  email: "",
  password: "",
  password_confirmation: "",
  phone_number: "",
  address: "",
});

const handleSignUp = async () => {
  try {
    const user = await signUp(signUpIndividual);
    if (user) {
      console.log('Signed up user:', user);
      // Handle successful sign-up (e.g., save user profile or redirect)
    }
    else{
      console.log("No user has been signed up")
    }
  } catch (error) {
    console.error('Sign up error:', error);
  }
}; 


</script>
