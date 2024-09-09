<template>
  <div class="col-span-6 flex justify-center items-center">
    <!-- Confirm button will be disabled based on the progression status -->
    <Button
      type="submit"
      value="Submit"
      class="bg-green-400 w-full h-auto py-1.5 rounded-md cursor-pointer hover:text-white"
      @click="handleConfirmSubmission"
      :disabled="submitButtonStatus"
    >
      Confirm
    </Button>
  </div>
  
  <div >
    
  <router-link to="/adoptionProgression" class="col-span-6 flex justify-center items-center py-1.5">
    <Button
      value="Submit"
      class="bg-green-400 w-full h-auto rounded-md cursor-pointer hover:text-white"
      :disabled="proceedToApplication"
    >
      Application Progression
    </Button>
  </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Props are reactive, and `totalProgressionValue` is passed from the parent
const props = defineProps({
  totalProgressionValue: {
    type: Number,
    required: true,
  }
});


// Compute the status of the submit button dynamically based on the total progression value
const submitButtonStatus = computed(() => {
  console.log("submitButtonStatus computed: ", props.totalProgressionValue < 300);
  // The button will be disabled if total progression is less than 300
  return props.totalProgressionValue < 300;
});
const proceedToApplication = ref(true)
// Handle submission data logic
const handleConfirmSubmission = () => {
  proceedToApplication.value = false;
  console.log("Submitting data...");
};
</script>
