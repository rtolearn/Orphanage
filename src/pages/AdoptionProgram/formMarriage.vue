<template>
  <Form
    action="#"
    class="mt-8 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
  >
    
    <Message class="col-span-6">Marriage Evidence</Message>

    <div class="col-span-6">
      <div>
        <h1>Marriage Certificate:</h1>
      </div>
      <div
        class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
      >
        <Field
          name="marriageEvidence"
          type="file"
          :rules="validateFile"
      
          @change="updateProgression(0)"
        >
        </Field>

        <ErrorMessage name="marriageEvidence" v-slot="{ message }">
          <span class="text-red-500 text-sm">
            {{ message }}
          </span>
        </ErrorMessage>
      </div>
    </div>
    <!-- Submit button -->
    <div class="col-span-6 flex justify-center items-center p-5">
      <input
        type="submit"
        value="Submit"
        class="bg-green-400 w-full h-auto p-1.5 rounded-md cursor-pointer hover:text-white"
      />
    </div>



  </Form>
</template>

<script setup>
import {ref} from "vue"
import { Form, Field, ErrorMessage } from "vee-validate";
import Message from "primevue/message";
import validateFile from "./function/validateFile";




const emit = defineEmits('progressionBarMarriage')

//Progression Tacker
let progressionBarMarriage = ref(0);
// const progressionBartemp = ref(null);
const arrTemp = ref([]);
// Create a method to update the value to the parent component
const updateProgression = (index) => {
  console.log("Content Before push any value: " + arrTemp.value);
  if (!arrTemp.value.includes(index)) {
    arrTemp.value.push(index);
    console.log("Content of array" + arrTemp.value);
    progressionBarMarriage.value += 100;
    emit("progressionBarMarriage", progressionBarMarriage.value);
  } else {
    progressionBarMarriage.value += 0;
    emit("progressionBarMarriage", progressionBarMarriage.value);
  }
};

</script>

<style scoped>
input[type="file"]::file-selector-button {
  background-color: #357560;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
}



</style>
