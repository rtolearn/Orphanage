<template>
  <Form
    action="#sign-in-form"
    class="w-full h-full p-4 sm:p-8 border-2 border-solid border-black-600 rounded-md m-auto block"
    @submit="handleSignIn"
  >
    <h1 class="mb-10 w-full text-center text-lg sm:text-xl">Sign in</h1>
    <div class="mt-5 w-full">
      <Field
        v-model="signInIndividual.email"
        type="email"
        name="sign_in_email"
        :rules="validateEmail"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Email (Individual)"
        required
      />
      <ErrorMessage name="sign_in_email" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <div class="mt-5 w-full">
      <Field
        v-model="signInIndividual.password"
        type="password"
        name="sign_in_password"
        :rules="validateEmptyContent"
        class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Password (Individual)"
        required
      />
      <ErrorMessage name="sign_in_password" v-slot="{ message }">
        <span class="text-red-500 text-sm">{{ message }}</span>
      </ErrorMessage>
    </div>

    <div class="mt-10">
      <label for="MarketingAccept" class="flex gap-4">
        <Field
          v-slot="{ field }"
          name="terms"
          type="checkbox"
          :value="true"
          :unchecked-value="false"
        >
          <label>
            <input type="checkbox" name="terms" v-bind="field" :value="true" />
            <span class="text-sm text-gray-700">
              I want to receive emails about events, product updates and company
              announcements.
            </span>
          </label>
        </Field>
      </label>
    </div>

    <!-- Part for user to create account -->
    <div
      class="mt-5 text-center sm:flex sm:items-center sm:gap-4 sm:justify-center"
    >
      <Button
        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        type="submit"
      >
        Sign In
      </Button>
      <p class="mt-4 text-sm text-gray-500 sm:mt-0">
        Don't have an account yet?
        <span class="text-gray-700 hover:underline hover:text-blue-500">
          <router-link to="/sign-up"> Sign Up </router-link>
        </span>
      </p>
    </div>
  </Form>
</template>

<script setup>
import validateEmail from "../Data&Functions/function/validateEmail.js";
import validateEmptyContent from "../Data&Functions/function/validateEmptyContent.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { supabase } from "@/clients/supabaseClient";
import { useRouter } from "vue-router";

//Create object to store the value of each form
const signInIndividual = ref({
  email: "",
  password: "",
});
//---------------------------------------------



// Assign the value to the globla variable into the store
import { useMessageStore } from "@/store/messageStore";
const messageStore = useMessageStore();
const message = ref(messageStore.statusLogIn);
const updateMessage = () => {
  messageStore.setStatus(!message.value);
};
//---------------------------------------------------------

// Implementarion of router-------
const router = useRouter();
//--------------------------------

// Function to handle sign in---------------------------
async function handleSignIn () {
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signInIndividual.value.email,
      password: signInIndividual.value.password,
    });

    if (error) {
      // Throw the error so that the error will be caught by the catch block
      throw error;
    }

    if (data) {
      alert("Login successful");
      // Check if data.user exists before accessing user ID
      if (data.user) {
        const userId = data.user.id; // Extract the user ID from the response
        console.log("User ID being saved:", userId); // Log the user ID
        messageStore.setUserId(userId); // Save the user ID in the store
      } else {
        console.error("User object not found in the response:", data);
      }
      
      // Call the function to update the global user login status
      updateMessage();
      // Redirect to home or another route
      router.push({ path: "./" });
    }
  } catch (error) {
    alert(error.message);
  }
}

// -----------------------------------------------------
</script>
