<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="m-auto block">
    <Stepper :value="activeStep">
      <StepComponent
        v-for="step in stepInformation"
        :key="step.id"
        :value="step.value"
        :title="step.title"
        :component="step.component"
        :button="step.button"
        :callBackValue="step.callBackValue"
        :callNextValue="step.callNextValue"
        @stepChange="updateActiveStep"
      />
    </Stepper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Stepper from "primevue/stepper";
import Overview from "./ScholarshipOverview.vue";
import Requirement from "./ScholarshipRequirement.vue";
import MeetingInformation from "./ScholarshipMeeting.vue";
import Gratitude from "./ScholarshipGratitude.vue";
import StepComponent from "./StepComponent.vue";

//Create an object to store all the data
// const collectData ={
//   requirement: [],
//   giver: [],
// }
const activeStep = ref(1);

const stepInformation = [
  {
    value: 1,
    title: "Overview",
    component: Overview,
    button: ["NextButton"],
    callBackValue: null,
    callNextValue: 2,
  },
  {
    value: 2,
    title: "Requirement",
    component: Requirement,
    button: ["BackButton", "NextButton"],
    callBackValue: 1,
    callNextValue: 3,
  },
  {
    value: 3,
    title: "Patron Information",
    component: MeetingInformation,
    button: ["BackButton", "ConfirmButton"],
    callBackValue: 2,
    callNextValue: 4,
  },
  {
    value: 4,
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
