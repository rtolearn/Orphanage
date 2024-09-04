<template>
  <div class="flex flex-col h-auto m-5">
    <div
      class="text-center border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
      <div class="m-auto w-auto h-auto p-10">
        <h1 class=" font-bold text-center text-lg sm:text-xl md:text-2xl pb-5">Thank you</h1>
        <div class="text-gray-500 text-base sm:text-lg font-medium ">
          <p>
            Thank you for participating in this program. Your generosity is
            highly appreciated.
          </p>
          <p>
            We will contact you within a week for future discussion and
            procedures.
          </p>
        </div>
      </div>
      <div class="p-6 flex gap-2 text-sm sm:text-base">
        <button class="bg-gray-300 py-2 px-4 rounded" @click="handleClick(`3`)">
          Back
        </button>
        <button
          class="bg-green-500 text-white py-2 px-4 rounded"
          @click="handleDataSubmission"
        >
          Complete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router"
const router = useRouter();
const props = defineProps({
  submitData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["currentStep"]);

const handleClick = (value) => {
  emit("currentStep", value);
};
// const handleDataSubmission = async () => {
//   let dataToSubmit = {
//     arrRequirement: [...props.submitData.requirement],
//     name: props.submitData.patron.name,
//     email: props.submitData.patron.email,
//     fund: props.submitData.patron.fundRange,
//     meetingDate: props.submitData.patron.date,
//     status: "Pending",
//   };
//   try {
//     // Value of userID
//     const existingUserID = await api.checkUserID(1);
//     const existingSponsor = ref([]);

//     if (existingUserID) {
//       // Get the sponsor data of the existingUserID
//       existingSponsor.value = await api.getExistingSponsor(existingUserID);
//     }

//     if (existingUserID && existingSponsor.value) {
//       // Ensure that existingSponsor.value is an array
//       existingSponsor.value.push(dataToSubmit);

//       await api.updateScholarshipData(existingUserID, existingSponsor.value);
//     } else {
//       // If the user does not exist, create a new entry
//       const newDataToSubmit = {
//         sponsor: [dataToSubmit], // Wrap dataToSubmit in an array
//       };

//       // Post new scholarship data
//       await api.postScholarshipData(newDataToSubmit);
//     }

//     // Handle success
//     console.log("Data submitted successfully");
//     alert("Your submission was successful! Thank you for your participation.");
//   } catch (error) {
//     // Handle error
//     console.error("Error submitting data:", error);
//     alert("There was an error submitting your data. Please try again.");
//   }
// };

const handleDataSubmission = () => {
  console.log(props.submitData);
  alert("All the information are stored")
  router.push("/sponsor&donation")
};
</script>
