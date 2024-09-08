<template>
  <Form
    action="#"
    class="m-2.5 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
  >
    <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">Sign Up</h1>

    <!-- Company Name Validation -->
    <div class="col-span-6">
      <Field
        v-model="signUpCompany.name"
        type="text"
        class="mt-1 block p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Company Name"
        required
        name="company_name"
        :rules="validateName"
      />
      <ErrorMessage name="company_name" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Company Starting Date Validation -->

    <div class="col-span-6 sm:col-span-3">
      <label
        for="starting_date"
        class="block text-sm font-medium text-gray-700"
      >
        Company started at:
      </label>
      <Field
        v-model="signUpCompany.starting_date"
        type="date"
        class="w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        id="starting_date"
        name="starting_date"
        :rules="validateEmptyContent"
      />
      <ErrorMessage name="starting_date" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Career Industry Validation -->
    <div class="col-span-6 sm:col-span-3">
      <label
        for="starting_date"
        class="block text-sm font-medium text-gray-700"
      >
        Career Industry:
      </label>
      <Field
        as="select"
        v-model="signUpCompany.industry_select"
        class="w-full mt-1 rounded-md border-gray-300 text-gray-700 text-sm"
        name="industry"
        :rules="validateSelectionInput"
      >
        <option value="" disabled selected>Involved / Involving</option>
        <option
          v-for="industry in industries"
          :key="industry"
          :value="industry"
        >
          {{ industry }}
        </option>
      </Field>
      <ErrorMessage name="industry" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- State Selection Validation -->
    <div class="col-span-6 sm:col-span-6 flex flex-col">
      <label for="state" class="block text-sm font-medium text-gray-700 mb-1+"
        >State / Region</label
      >
      <Field
        as="select"
        v-model="signUpCompany.state_select"
        class="mt-1 p-2.5 w-full rounded-md border border-solid border-gray-450 text-gray-700 text-sm"
        name="state"
        :rules="validateSelectionInput"
      >
        <option value="" disabled selected>State / Region</option>
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </Field>
      <ErrorMessage name="state" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Email Validation -->
    <div class="col-span-6">
      <Field
        v-model="signUpCompany.email"
        type="email"
        id="email"
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

    <!-- Password Validation -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpCompany.password"
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

    <!-- Password Confirmation Validation -->
    <div class="col-span-6 sm:col-span-3">
      <Field
        v-model="signUpCompany.password_confirmation"
        type="password"
        name="password_confirmation"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Password Confirmation"
        required
      />
      <ErrorMessage name="password_confirmation" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Office Number Validation -->
    <div class="col-span-6">
      <Field
        v-model="signUpCompany.office_number"
        type="text"
        name="office_number"
        :rules="validatePhoneNumber"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Office Number"
      />
      <ErrorMessage name="office_number" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Company SSN Validation -->
    <div class="col-span-6">
      <Field
        v-model="signUpCompany.SSN"
        type="text"
        name="company_SSN"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Company SSN"
      />
      <ErrorMessage name="company_SSN" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Company Address Validation -->
    <div class="col-span-6">
      <Field
        v-model="signUpCompany.address"
        type="text"
        name="company_address"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Company Address"
      />
      <ErrorMessage name="company_address" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <!-- Create Account Button -->
    <div
      class="col-span-6 m-auto block text-center sm:flex sm:items-center sm:gap-4 sm:justify-center"
    >
      <button
        class="m-auto block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        @click="handleSignUp"
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
import { Form, Field, ErrorMessage } from "vee-validate";
import validateName from "@/pages/Data&Functions/function/validateName.js";
import validateEmail from "@/pages/Data&Functions/function/validateEmail.js";
import validatePhoneNumber from "@/pages/Data&Functions/function/validatePhoneNumber.js";
import validateSelectionInput from "@/pages/Data&Functions/function/validateSelectionInput.js";
import validateEmptyContent from "@/pages/Data&Functions/function/validateEmptyContent.js";

const signUpCompany = ref({
  name: "",
  starting_date: "",
  industry_select: "",
  state_select: "",
  email: "",
  password: "",
  password_confirmation: "",
  office_number: "",
  SSN: "",
  address: "",
});
import { supabase } from "@/clients/supabaseClient";
import { useRouter } from "vue-router";
const router = useRouter();
const handleSignUp = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email: signUpCompany.value.email,
      password: signUpCompany.value.password,
    });

    if (error) {
      throw error;
    }

    // Proceed with inserting user data into your database
    // (Optional)
    alert("Sign Up successfully!");
    router.push({ path: "/sign-in" });
  } catch (error) {
    alert(error.message);
  }
};
</script>
