<!-- eslint-disable no-self-assign -->
<template>
  <Form
    action="#"
    class="mt-8 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
    @submit="onSubmit"
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
      />
      <ErrorMessage name="name" v-slot="{ message }">
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
            :rules="validateSelectionState"
            @blur="updateProgression(1)"
          >
            <option value="" selected disabled>Select State</option>
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
        class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 text-sm text-gray-700 shadow-sm"
        placeholder="Email"
        required
      />
      <ErrorMessage name="email" v-slot="{ message }">
        <span class="text-red-500 text-sm">
          {{ message }}
        </span>
      </ErrorMessage>
    </div>
    <!-- Validation of Phone Number -->
    <div class="col-span-6">
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
        @blur="updateProgression(4)"
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
      v-if="careerStatusMale !== ''"
    >
      <Field
        as="select"
        class="m-3 p-1 w-4/5 rounded-sm border border-solid border-gray-450 text-gray-700 sm:text-sm block"
        name="career_industry"
        :rules="validateSelectionInput"
        @blur="updateProgression(5)"
      >
        <option value="" disabled selected>
          Career Industry Involved / Involving
        </option>
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
    <Message class="col-span-6">Identity Evidence:</Message>
    <!-- Validation for medical check (physically) -->
    <div class="col-span-6">
      <div>
        <h1>Identication Card:</h1>
      </div>
      <div
        class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
      >
        <Field
          name="identicationCard"
          type="file"
          :rules="validateFile"
          v-model="formValues.IC_number"
          @change="updateProgression(6)"
        >
        </Field>
        <ErrorMessage name="identicationCard" v-slot="{ message }">
          <span class="text-red-500 text-sm">
            {{ message }}
          </span>
        </ErrorMessage>
      </div>
      <div
        class="w-full h-auto m-auto block mt-2.5 mb-2.5 sm:flex sm:items-center sm:justify-center text-xs"
      ></div>
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
          type="file"
          :rules="validateFile"
          v-model="formValues.medical_check_physically"
          @blur="updateProgression(7)"
        >
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
          type="file"
          :rules="validateFile"
          v-model="formValues.medical_check_mentally"
          @change="updateProgression(8)"
        >
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
          type="file"
          :rules="validateFile"
          v-model="formValues.salary_slip"
          @change="updateProgression(9)"
        >
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
import { ref, defineEmits } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import Message from "primevue/message";
import industries from "@/system_information/data/industries.json";
import states from "@/system_information/data/states.json";
import careerStatus from "@/system_information/data/careerStatus.json";
import Button from "primevue/button";

//Form value
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

// Create a emit variable to be used in the parent component
const emit = defineEmits(["progressionBarFemale"]);

//Alert after submitting the form
const onSubmit = () => {
  progressionBar.value += 5;
  emit("progressionBarFemale", progressionBar.value);
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
    if (index === 0) {
      progressionBar.value += 5;
    } else {
      progressionBar.value += 10;
    }

    emit("progressionBarFemale", progressionBar.value);
  } else {
    progressionBar.value += 0;
    emit("progressionBarFemale", progressionBar.value);
  }
};
//Only the
const validateName = (valueName) => {
  if (valueName && valueName.trim()) {
    if (/[^a-zA-Z\s]/.test(valueName)) {
      if (arrTemp.value.includes(0)) {
        arrTemp.value.shift(0);
        progressionBar.value -= 10;
        emit("progressionBarFemale", progressionBar.value);
      }
      return "Name can only contain alphabetic characters";
    } else {
      updateProgression(0);
      return true;
    }
  } else {
    return "This field is required";
  }
};
const validateSelectionState = (valueState) => {
  if (valueState) {
    updateProgression(1);
    return true;
  } else {
    if (arrTemp.value.includes(1)) {
      arrTemp.value.shift(1);
      progressionBar.value -= 10;
      emit("progressionBarFemale", progressionBar.value);
    }
    return "This field is required";
  }
};
const validateEmail = (valueEmail) => {
  if (valueEmail) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueEmail)) {
      if (arrTemp.value.includes(2)) {
        arrTemp.value.shift(2);
        progressionBar.value -= 10;
        emit("progressionBarFemale", progressionBar.value);
      }
      return "Please enter a valid email address.";
    } else {
      updateProgression(2);
      return true;
    }
  } else {
    return "This field is required";
  }
};

const validatePhoneNumber = (valuePhone) => {
  if (valuePhone) {
    if (!/^[+]?[0-9]{10,15}$/.test(valuePhone.trim())) {
      if (arrTemp.value.includes(3)) {
        arrTemp.value.shift(3);
        progressionBar.value -= 10;
        emit("progressionBarFemale", progressionBar.value);
      }
      return "Invalid phone number.";
    } else {
      updateProgression(3);
      return true;
    }
  } else {
    return "This field is required";
  }
};

const validateSelectionInput = (valueState) => {
  if (valueState) {
    return true;
  } else {
    return "This field is required";
  }
};

const validateFile = (valueFile) => {
  if (!valueFile) {
    return "This field is required.";
  } else {
    return true;
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
