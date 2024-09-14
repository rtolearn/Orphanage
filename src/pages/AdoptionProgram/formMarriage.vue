<template>
  <Form
    action="#"
    class="mt-8 p-8 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
    @submit="onSubmit"
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
          v-model="formValue.file_marriage"
          name="marriageEvidence"
          type="file"
          :rules="validateFile"
          @change="handleFileChange($event)"
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
      <Button
        type="submit"
        value="Submit"
        label="Submit"
        class="bg-green-400 w-full h-auto p-1.5 rounded-md cursor-pointer hover:text-white"
        :disabled="progressionBar < 95"
      >
      </Button>
    </div>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import Message from "primevue/message";
import Button from "primevue/button";
//Declare an object to store the value of file input
const formValue = ref({
  file_marriage: ""
})
const emit = defineEmits(["progressionBar", "collectData"]);
//Alert after submitting the form
const onSubmit = () => {
  progressionBar.value += 5;
  emit("progressionBar", progressionBar.value, 2);
  emit("collectData", formValue.value,2)
  alert("Form is submitted.");
};
//Progression Tacker
let progressionBar = ref(0);
// const progressionBartemp = ref(null);
const arrTemp = ref([]);
// Create a method to update the value to the parent component
const updateProgression = (index) => {
  console.log("Content Before push any value: " + arrTemp.value);
  if (!arrTemp.value.includes(index)) {
    arrTemp.value.push(index);
    console.log("Content of array" + arrTemp.value);
    progressionBar.value += 95;
    emit("progressionBar", progressionBar.value, 2);
  } else {
    progressionBar.value += 0;
    emit("progressionBar", progressionBar.value, 2);
  }
};

const validateFile = (valueFile) => {
  if (!valueFile) {
    return "This field is required.";
  } else {
    return true;
  }
};

import { supabase } from "@/clients/supabaseClient";
const userId = ref("");

const handleFileChange = (event) => {
  updateProgression(0);
  handleFileUpload(event);
}

const getUserId = async () =>{
  try{
    const {data: {user}, error} = await supabase.auth.getUser()
    if(error){
      throw error;      
    }
    userId.value = user.id; 
  }catch(error){
    alert(error.message)
  }
}
// Function to upload the file to Supabase with user-specific folder
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  //Call the getUserId function
  getUserId();
  // Define the folder structure
  const folderPath = `UserAdoptionInformation/${userId.value}/Marriage`;
  const fileName = `${folderPath}/Marriage-${Date.now()}-${file.name}`;

  // Upload the file to Supabase storage
  const { error } = await supabase.storage
    .from('UserAdoptionInformation')
    .upload(fileName, file);

  if (error) {
    console.error('File upload failed', error);
    return;
  }

  // Get the public URL for the uploaded file
  const { data, error: urlError } = supabase.storage
    .from('UserAdoptionInformation')
    .getPublicUrl(fileName);

  if (urlError) {
    console.error('Failed to retrieve public URL', urlError);
    return;
  }

  formValue.value.file_marriage = data.publicUrl;
  console.log(`Marriage Evidence uploaded to:`, data.publicUrl);
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
