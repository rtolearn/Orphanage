<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="m-auto block">
    <Stepper value="1">
      <StepItem value="1">
        <Step>Header I</Step>
        <StepPanel v-slot="{ activateCallback }">
          <!-- Introduction -->
          <Overview />
          <div class="py-6">
            <Button label="Next" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>Header II</Step>
        <StepPanel v-slot="{ activateCallback }">
          <!-- Fill in the requirement of the scholarship -->
          <Requirement />
          <div class="flex py-6 gap-2">
            <Button
              label="Back"
              severity="secondary"
              @click="activateCallback('1')"
            />
            <Button label="Next" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>Header III</Step>
        <StepPanel v-slot="{ activateCallback }">
          <!-- Fill in the information of patron -->

          <MeetingInformation />

          <div class="flex py-6 gap-2">
            <Button
              label="Back"
              severity="secondary"
              @click="activateCallback('2')"
            />
            <Button label="Confirm" @click="activateCallback('4')" />
          </div>
        </StepPanel>
      </StepItem>

      <StepItem value="4">
        <Step>Header III</Step>
        <StepPanel >
          <!-- FThanks all the participant-->

          <Gratitude />

          <div class="flex py-6 gap-2">
            <router-link to="/sponsor&donation">
              <Button
              label="Complete"
              severity="secondary"
              @click="s"
            > </Button>
            </router-link>
            

          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>

<script setup>
import Stepper from "primevue/stepper";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";

import Overview from "./ScholarshipOverview.vue";
import Requirement from "./ScholarshipRequirement.vue";
import MeetingInformation from "./ScholarshipMeeting.vue";
import Gratitude from "./ScholarshipGratitude.vue";
</script>
