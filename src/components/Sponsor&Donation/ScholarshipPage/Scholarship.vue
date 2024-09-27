<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Navigation Bar -->
  <NavBar />
  <div class="p-3">
    <!-- Title -->
    <Title />
  </div>
  <!-- Form -->
  <div class="m-auto block">
    <Stepper :value="activeStep">
      <div v-for="(step, index) in stepInformation" :key="index">
        <StepItem :value="step.value" class="text-base md:text-lg">
          <!-- Display the title -->
          <Step>{{ step.title }}</Step>
          <StepPanel :activateCallback="activateCallback">
            <!-- Component -->
            <component
              :is="step.component"
              @currentStep="updateActiveStep"
              @collectDataRequirement="collectedDataRequirement"
              @collectDataPatron="collectedDataPatron"
              :submitData="dataStorage"
            />
          </StepPanel>
        </StepItem>
      </div>
    </Stepper>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Stepper from "primevue/stepper";
import Overview from "./ScholarshipOverview.vue";
import Requirement from "./ScholarshipRequirement.vue";
import MeetingInformation from "./ScholarshipMeeting.vue";
import Gratitude from "./ScholarshipGratitude.vue";
import NavBar from "@/pages/HomePagetesting/NavBar.vue";
import Title from "./ScholarshipTitle.vue";
// Define activateCallback if needed
const activateCallback = () => {
  console.log("Step activated");
};

//Create an object to store all the data
const dataStorage = reactive({
  requirement: "",
  patron: {},
});

//Method to handle the requirement data (array)
const collectedDataRequirement = (requirement) => {
  dataStorage.requirement = requirement;
  // console.log(dataStorage.requirement);
};
//Method to handle the information of patron (object)
const collectedDataPatron = (information) => {
  dataStorage.patron = information;
  console.log(dataStorage.patron);
};
const activeStep = ref("1");

const stepInformation = [
  {
    value: "1",
    title: "Overview",
    component: Overview,
    button: ["NextButton"],
    callBackValue: null,
    callNextValue: 2,
  },
  {
    value: "2",
    title: "Requirement",
    component: Requirement,
    button: ["BackButton", "NextButton"],
    callBackValue: 1,
    callNextValue: 3,
  },
  {
    value: "3",
    title: "Schedule A Meeting",
    component: MeetingInformation,
    button: ["BackButton", "ConfirmButton"],
    callBackValue: 2,
    callNextValue: 4,
  },
  {
    value: "4",
    title: "Thank you",
    component: Gratitude,
    button: ["BackButton", "CompleteButton"],
    callBackValue: 3,
    callNextValue: null,
  },
];

const updateActiveStep = (nextStep) => {
  if (nextStep !== null) {
    activeStep.value = nextStep;
  }
};
</script>
