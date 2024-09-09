<template>
  <div class="flex flex-col min-h-screen">
    <!-- Accordion Section -->
    <div class="flex-grow w-full h-auto m-auto">
      <Accordion value="0">
        <div v-for="(content, index) in contentForm" :key="index">
          <AccordionPanel :value="content.valueForm">
            <AccordionHeader>
              <div class="text-xl w-full">
                <h1 class="m-2.5">{{ content.title }}</h1>
                <div
                  v-if="
                    content.progressionBar >= 0 && content.progressionBar < 100
                  "
                >
                  <ProgressBar :value="content.progressionBar">
                    {{ content.progressionBar }}/100
                  </ProgressBar>
                </div>
                <div v-else>
                  <ProgressBar :value="content.progressionBar">
                    Completed!
                  </ProgressBar>
                </div>
              </div>
            </AccordionHeader>
            <AccordionContent class="w-full lg:w-4/5 h-full m-auto block mt-5">
              <div>
                <!-- Pass the progressionBar as a prop and listen for updates -->
                <component
                  :is="content.component"
                  @progressionBar="handleProgressionForm"
                  
                />
              </div>
            </AccordionContent>
          </AccordionPanel>
        </div>
      </Accordion>
    </div>

    <!-- Submit Button always at the bottom -->
    <div class="w-full h-auto p-5">
      <SubmitButton
        :totalProgressionValue="totalProgression"
        
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import formMale from "./FormMale.vue";
import formFemale from "./FormFemale.vue";
import formMarriage from "./FormMarriage.vue";
import ProgressBar from "primevue/progressbar";
import SubmitButton from "./FormSubmitButton.vue";

import { ref, markRaw } from "vue";
// Display the content of the form 
const contentForm = ref([
  {
    valueForm: "0",
    title: "Male",
    progressionBar: 0,
    component: markRaw(formMale),
  },
  {
    valueForm: "1",
    title: "Female",
    progressionBar: 0,
    component: markRaw(formFemale),
  },
  {
    valueForm: "2",
    title: "Marriage",
    progressionBar: 0,
    component: markRaw(formMarriage),
  },
]);

// Computed property to calculate totalProgression
const totalProgression = computed(() => {
  let total = 0;
  for (let i = 0; i < contentForm.value.length; i++) {
    total += contentForm.value[i].progressionBar;
  }
  return total;
});

//Function that receive the update value passed from the child component
const handleProgressionForm = (value, index) => {
  console.log("Value passed from child component: " + value);
  contentForm.value[index].progressionBar = value;
  console.log(
    "Now in the progressionBar " +
      contentForm.value[index].title +
      ": " +
      contentForm.value[index].progressionBar
  );
  console.log(contentForm.value[index].progressionBar);
};



</script>
