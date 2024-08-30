<!-- eslint-disable vue/multi-word-component-names -->
<!-- for the selection option, use the form onsubmit to verify it, the rest are validated individually -->
<template>
  <section class="bg-white" id="sign-in-form">
    <Introduction />
    <!-- Part of the form to sign in -->
    <Accordion value="0" class="w-full h-auto m-auto block" v-if="((totalProgression < 300) && statusApplication)">
      <AccordionPanel value="0">
        <AccordionHeader>
          <div class="text-xl w-full">
            <h1 class="m-2.5">Male</h1>
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
            <formMale @progressionBarMale="handleProgressionFormMale" />
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader>
          <div class="text-xl w-full">
            <h1 class="m-2.5">Female</h1>
            <div v-if="progressionBarFemale >= 0 && progressionBarFemale < 100">
              <ProgressBar :value="progressionBarFemale">
                {{ progressionBarFemale }}/100
              </ProgressBar>
            </div>
            <div v-else>
              <ProgressBar :value="progressionBarFemale">
                Completed!
              </ProgressBar>
            </div>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
            <!-- For the form of Male information -->
            <formFemale @progressionBarFemale="handleProgressionFormFemale" />
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="2">
        <AccordionHeader>
          <div class="text-xl w-full">
            <h1 class="m-2.5">Prove of Marriage</h1>
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
    </Accordion>
    <Button
        class="border solid flex justify-center items-center mt-[15rem] mb-[0.5rem] p-[2rem] w-full h-auto p-[0.56rem] bg-green-500 hover:bg-green-600 hover:text-white text-3xl"
        :disabled="
          progressionBarMale + progressionBarFemale + progressionBarMarriage !==
          300
        "
        @click="updateStatusApplication"
      >
        Confirm
      </Button>
    <router-link to="/adoptionProgression">
      <Button
        class="border solid flex justify-center items-center mt-[0.5rem] mb-[0.5rem] p-[2rem] w-full h-auto p-[0.56rem] bg-green-500 hover:bg-green-600 hover:text-white text-3xl"
        :disabled="
         statusApplication
        "
        
      >
        Progression of application
      </Button>
    </router-link>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Button from "primevue/button";
import formMale from "./formMale.vue";
import formFemale from "./formFemale.vue";
import Introduction from "./introduction.vue";
import ProgressBar from "primevue/progressbar";
import formMarriage from "./formMarriage.vue";

const progressionBarMale = ref(0);
const progressionBarMarriage = ref(0);
const progressionBarFemale = ref(0);
let statusApplication = ref(true)
const totalProgression = ref(0)
//Function that receive the update value passed from the child component
const handleProgressionFormMale = (value) => {
  console.log("Value passed from child component: " + value);
  progressionBarMale.value = value;

  console.log(progressionBarMale.value);
};

const handleProgressionFormFemale = (value) => {
  console.log("Value passed from child component: " + value);
  progressionBarFemale.value = value;

  console.log(progressionBarFemale.value);
};

const handleProgressionFormMarriage = (value) => {
  progressionBarMarriage.value = value;
};

const updateStatusApplication = () =>{
  statusApplication.value = !statusApplication.value;
  totalProgression.value = progressionBarMale.value + progressionBarFemale.value + progressionBarMarriage.value;
  console.log(totalProgression.value);
}
</script>
