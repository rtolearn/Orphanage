<!-- eslint-disable vue/multi-word-component-names -->
<!-- for the selection option, use the form onsubmit to verify it, the rest are validated individually -->
<template>
  <section class="bg-white" id="sign-in-form">
    <Introduction />
    <!-- Part of the form to sign in -->
    <Accordion value="0" class="w-full h-auto m-auto block">
      <AccordionPanel value="0">
        <AccordionHeader>
          <div class="w-full">
            <h1 class="text-xl">Male</h1>
            <!-- Implement the progression bar -->
            <!-- <ProgressBar :value="progressionBarMale">
              {{ progressionBarMale }}/100
            </ProgressBar> -->
            <div v-if="progressionBarMale >= 0 && progressionBarMale < 100">
              <ProgressBar :value="progressionBarMale">
                {{ progressionBarMale }}/100
              </ProgressBar>
            </div>
            <div v-else>
              <ProgressBar :value="progressionBarMale">
                Completed!
              </ProgressBar>
            </div>
          </div>
        </AccordionHeader>
        <AccordionContent class="w-full lg:w-4/5 h-full m-auto block mt-5">
          <div>
            <!-- For the form of Male information -->
            <formMale @progressionBarEvent="handleProgressionFormMale" />
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader>
          <div class="text-xl w-full">
            <h1>Female</h1>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
            <!-- For the form of Male information -->
            <formFemale />
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="2">
        <AccordionHeader>
          <div class="text-xl w-full">
            <h1>Prove of Marriage</h1>
            <!-- Implement the progression bar -->
            <ProgressBar :value="progressionBarMarriage">
              {{ progressionBarMarriage }}/100
            </ProgressBar>
          </div>
        </AccordionHeader>

        <AccordionContent>
          <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
            <!-- For the form of Company -->
            <formMarriage
              @progressionBarMarriage="handleProgressionFormMarriage"
            />
          </div>
        </AccordionContent>
      </AccordionPanel>
      <button
        class="border solid m-auto block mt-[1rem] w-4/5 h-auto p-[0.56rem]
        bg-green-500 hover:bg-green-600"
      >
        Confirm
      </button>
    </Accordion>

    <div class="col-span-6 flex justify-center items-center p-5 m-5">
      <!-- Here we need to apply some logic to check for all the value of the knob before we can click this button
       1) Disable this button first before all the necessaary information have been filled in -->
      <router-link to="">
        <button label="Complete" @click="applicationProgression"></button>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

import formMale from "./formMale.vue";
import formFemale from "./formFemale.vue";
import Introduction from "./introduction.vue";

import ProgressBar from "primevue/progressbar";
import formMarriage from "./formMarriage.vue";
const progressionBarMale = ref(0);
const progressionBarMarriage = ref(0);

//Function that receive the update value passed from the child component
const handleProgressionFormMale = (value) => {
  console.log("Value passed from child component: " + value);
  progressionBarMale.value = value;
  console.log(progressionBarMale.value);
};

const handleProgressionFormMarriage = (value) => {
  progressionBarMarriage.value = value;
};
</script>
