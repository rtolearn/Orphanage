<template>
  <StepItem :value="props.value">
    <!-- Display the title -->
    <Step>{{ props.title }}</Step>
    <StepPanel :activateCallback="activateCallback">
      <!-- Component -->
      <component :is="props.component" />
      <!-- Display the Buttons -->
      <div class="py-6 flex gap-2">
        <Button
          v-for="buttonType in props.button"
          :key="buttonType"
          :label="
            buttonType === 'NextButton'
              ? 'Next'
              : buttonType === 'BackButton'
              ? 'Back'
              : buttonType === 'ConfirmButton'
              ? 'Confirm'
              : 'Complete'
          "
          @click="handleButtonClick(buttonType)"
          class="p-button-primary"
        />
      </div>
    </StepPanel>
  </StepItem>
</template>

<script setup>
import { defineProps } from "vue";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import Button from "primevue/button"; // Make sure to import Button

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  component: {
    type: Object,
    required: true,
  },
  button: {
    type: Array,
    required: true,
  },
  callBackValue: {
    type: Number,
    required: true,
  },
  callNextValue: {
    type: Number,
    required: true,
  },
});

// Emit an event to handle the button click and pass the next step value
const emit = defineEmits(["stepChange"]);

const handleButtonClick = (buttonType) => {
  if (buttonType === "NextButton") {
    emit("stepChange", props.callNextValue);
  } else if (buttonType === "BackButton") {
    emit("stepChange", props.callBackValue);
  } else if (buttonType === "ConfirmButton") {
    // Handle confirm action here, if needed
    emit("stepChange", props.callNextValue);
  } else if (buttonType === "CompleteButton") {
    // Handle complete action here, if needed
    emit("stepChange", null);
  }
};
</script>
