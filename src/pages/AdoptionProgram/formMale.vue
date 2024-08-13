<template>
  <Form
    action="#"
    class="mt-8 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
    @submit="onSubmit"
    :validation-scheme="schema"
  >
    <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">
      Personal Information
    </h1>
    <Message class="col-span-6">Credential Information</Message>
    <!-- Validation of name -->
    <div class="col-span-6">
      <Field
        type="text"
        id="name"
        name="name"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Name"
        required
        :rules="validateName"
        v-model="formValues.name"
        @blur="progressionTracker(0)"
      />
      <ErrorMessage name="name" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>
    <!-- Validation of IC Number -->
    <div class="col-span-6">
      <Field
        type="number"
        id="IC_number"
        name="IC_number"
        :rules="validateICnumber"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="IC Number"
        required
        v-model="formValues.IC_number"
      />
      <ErrorMessage name="IC_number" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>
    <!-- Validation of State Selection -->
    <div
      class="col-span-6 sm:col-span-6 border border-solid border-gray-350 flex justify-between items-center"
    >
      <div class="w-full">
        <div class="col-span-6">
          <Field
            as="select"
            class="m-3 p-1 w-4/5 rounded-sm border border-solid border-gray-450 text-gray-700 sm:text-sm block"
            name="state"
            :rules="validateSelectionInput"
          >
            <option value="" selected>Select State</option>
            <option v-for="state in states" :key="state" :value="state">
              {{ state }}
            </option>
          </Field>
          <ErrorMessage name="state" v-slot="{ message }">
            <span class="text-red-500 text-sm">
              {{ message }}
            </span>
          </ErrorMessage>
        </div>
      </div>
      <div class="col-span-6 sm:col-span-3 m-1 p-1">
        <span class="background-gray"> Malaysia </span>
      </div>
    </div>

    <!-- Validation of email ---->
    <div class="col-span-6">
      <Field
        type="email"
        id="email"
        name="email"
        :rules="validateEmail"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Email"
        required
      />
      <ErrorMessage name="email" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>
    <div class="col-span-6">
      <!-- Validation of Phone Number -->
      <Field
        type="phone"
        id="contact_number"
        name="contact_number"
        :rules="validatePhoneNumber"
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Contact Number"
      />
      <ErrorMessage name="contact_number" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>

    <!-- Validation of Career Status -->
    <div class="p-1 col-span-6 w-full border border-solid border-gray-350">
      <Field
        v-model="careerStatusMale"
        as="select"
        class="m-3 p-1 w-4/5 rounded-sm border border-solid border-gray-450 text-gray-700 sm:text-sm block"
        name="career_status"
        :rules="validateSelectionInput"
      >
        <option value="" disabled selected>Career Status</option>
        <option v-for="status in careerStatus" :key="status" :value="status">
          {{ status }}
        </option>
      </Field>
      <ErrorMessage name="career_status" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>
    <!-- No validation for this part -->
    <div class="col-span-6" v-if="careerStatusMale == 'others'">
      <Field
        type="text"
        id="career_status_other"
        name="career_status_other"
        class="p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
        placeholder="Explain in details."
      />
    </div>
    <!-- Validation of Career Industry -->
    <div
      class="p-1 col-span-6 w-full border border-solid border-gray-350"
      v-if="
        careerStatusMale !== '' &&
        careerStatusMale !== 'Retired' &&
        careerStatusMale !== 'Unemployed'
      "
    >
      <Field
        as="select"
        class="m-3 p-1 w-4/5 rounded-sm border border-solid border-gray-450 text-gray-700 sm:text-sm block"
        name="career_industry"
        :rules="validateSelectionInput"
      >
        <option value="" disabled selected>Career Industry</option>
        <option
          v-for="industry in industries"
          :key="industry"
          :value="industry"
        >
          {{ industry }}
        </option>
      </Field>
      <ErrorMessage name="career_industry" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>
    <Message class="col-span-6">Health Condition</Message>

    <!-- Validation for medical check (physically) -->
    <div class="col-span-6">
      <div>
        <h1>Medical Check (physically):</h1>
      </div>
      <div
        class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
      >
        <Field
          name="filePhysicalMedicalCheck"
          :rules="validateFileSubmission"
          class="m-auto block"
        >
          <Toast />
          <FileUpload
            name="medical_check_physically"
            url="/api/upload"
            @upload="onAdvancedUpload($event, 'physical')"
            :multiple="true"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            :maxFileSize="1000000"
            class="text-xs sm:text-md"
            v-model="formValues.medical_check_physically"
          >
            <template #empty>
              <span>Drag and drop files to here to upload.</span>
            </template>
          </FileUpload>
        </Field>

        <ErrorMessage name="filePhysicalMedicalCheck" v-slot="{ message }">
          <span class="text-red-500 text-sm">
            {{ message }}
          </span>
        </ErrorMessage>
      </div>
      <div
        class="w-full h-auto m-auto block mt-2.5 mb-2.5 sm:flex sm:items-center sm:justify-center text-xs"
      ></div>
    </div>
    <!-- Validation for medical check (mentally) -->
    <div class="col-span-6">
      <div>
        <h1>Medical Check (mentally):</h1>
      </div>
      <div
        class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
      >
        <Field
          name="fileMentalMedicalCheck"
          :rules="validateFileSubmission"
          class="m-auto block"
        >
          <Toast />
          <FileUpload
            name="medical_check_mentally"
            url="/api/upload"
            @upload="onAdvancedUpload($event, 'physical')"
            :multiple="true"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            :maxFileSize="1000000"
            class="text-xs sm:text-md"
            v-model="formValues.medical_check_physically"
          >
            <template #empty>
              <span>Drag and drop files to here to upload.</span>
            </template>
          </FileUpload>
        </Field>

        <ErrorMessage name="fileMentalMedicalCheck" v-slot="{ message }">
          <span class="text-red-500 text-sm">
            {{ message }}
          </span>
        </ErrorMessage>
      </div>
    </div>
    <!-- Validation of financial condition -->
    <Message class="col-span-6">Financial Condition</Message>
    <div class="col-span-6">
      <div>
        <h1>Salary Slip:</h1>
      </div>
      <div
        class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
      >
      <Field
          name="fileSalarySlip"
          :rules="validateFileSubmission"
          class="m-auto block"
        >
          <Toast />
          <FileUpload
            name="salary_slip"
            url="/api/upload"
            @upload="onAdvancedUpload($event, 'physical')"
            :multiple="true"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            :maxFileSize="1000000"
            class="text-xs sm:text-md"
            v-model="formValues.medical_check_physically"
          >
            <template #empty>
              <span>Drag and drop files to here to upload.</span>
            </template>
          </FileUpload>
        </Field>

        <ErrorMessage name="fileSalarySlip" v-slot="{ message }">
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

// Receive value from parent 
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  }
})

// Define emits for notifying the parent about changes
const emit = defineEmits(['update:modelValue'])

// Create a local ref to progressionBarMale and watch for changes
const progressionBarMale = ref(props.modelValue);

watch(progressionBarMale, (newValue) =>{
  progressionBarMale.value = newValue;
  //Emit an event to update the parent when the modelValue changes

})
import { ref, computed, watch, defineProps, defineEmits} from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import Message from "primevue/message";
import industries from "./data/industries.json";
import states from "./data/states.json";
import careerStatus from "./data/careerStatus.json";
import validateName from "./function/validateName.js";
import validateICnumber from "./function/validateICnumber";
import validateEmail from "./function/validateEmail";
import validatePhoneNumber from "./function/validatePhoneNumber";
import validateSelectionInput from "./function/validateSelectionInput";
import validateFileSubmission from "./function/validateFileSubmission";
import FileUpload from "primevue/fileupload";
import { useToast } from "primevue/usetoast";
import * as yup from "yup";

//yup

const schema = computed(() => {
  return yup.object().shape({
    name: yup
      .string()
      .min(5, "Name must be at least 5 characters")
      .required("Name is required"),
  });
});

//Alert after submitting the form
const onSubmit = () => {
  alert("Form is submitted.");
};

//Uploading file
const toast = useToast();
const onAdvancedUpload = (event, type) => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
  if (event.files.length === 0 && type == "physical") {
    formValues.value.medical_check_physically_status = true;
    formValues.value.medical_check_physically =
      "Please upload required file for this section.";
    return;
  }
};

//Industry object
const careerStatusMale = ref("");
const formValues = ref({
  name: "",
  IC_number: "",
  email: "",
  contact_number: "",
  careerStatus: "",
  career_status_other: "",
  industrySelect: "",
  medical_check_physically: "",
  medical_check_physically_status: false,
  medical_check_mentally: "",
  medical_check_mentally_status: false,
  salary_slip: "",
});
//Progression Tacker
const progressionBarStatus = ref(false);
const progressionBartemp = ref(0);

const progressionTracker = (index) =>{
console.log(progressionBarMale.value)

  indexTracker(index);
  if(progressionBarStatus.value){
    progressionBarMale.value += 10;
    emit('update:modelValue', progressionBarMale.value)
  }
  else{
    progressionBarMale.value += 0;
    emit('update:modelValue', progressionBarMale.value)
  }
  progressionBartemp.value = index;
  console.log("AFTER ADDICTION" + progressionBarMale.value)
}

//Index field tracker
const indexTracker = (index) => {
  if(progressionBartemp.value === index){
    progressionBarStatus.value = false;
  }
  else{
    progressionBarStatus.value = true;
  }
}
</script>
