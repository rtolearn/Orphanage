<template>
  <div class="col-span-6 flex justify-center items-center">
    <!-- Confirm button will be disabled based on the progression status -->
    <router-link :to="{ path: './adoption', query: { programStatus: true } }">
      <Button
        type="submit"
        value="Submit"
        class="bg-green-400 w-full h-auto rounded-md cursor-pointer hover:text-white"
        @click="handleConfirmSubmission(props.dataBeforeSubmit, programId)"
        :disabled="submitButtonStatus"
      >
        Confirm
      </Button>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { handleConfirmSubmission } from "@/services/adoptionprogramServices";
// Props are reactive, and `totalProgressionValue` is passed from the parent
const props = defineProps({
  totalProgressionValue: {
    type: Number,
    required: true,
  },
  dataBeforeSubmit: {
    type: Array,
    required: true,
  },
});

// Compute the status of the submit button dynamically based on the total progression value
const submitButtonStatus = computed(() => {
  console.log(
    "submitButtonStatus computed: ",
    props.totalProgressionValue < 300
  );
  return props.totalProgressionValue < 300;
});

const programId = ref(0);
</script>
