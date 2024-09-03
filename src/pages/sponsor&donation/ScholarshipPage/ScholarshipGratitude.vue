<template>
  <div class="flex flex-col w-fit h-auto m-5">
    <div
      class="text-center border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
      <div class="m-auto w-[23.5rem] h-auto py-3">
        <h1 class="text-center text-base">Thank you</h1>
        <div class="text-gray-500 text-sm">
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
      <div class="py-6 flex gap-2">
        <Button severity="secondary" label="Back" @click="handleClick('3')" />
        <Button label="Complete" @click="handleDataSubmission" />
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/services/api";
//Requirement (array) & patron (object)
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
const handleDataSubmission = async () => {
  let dataToSubmit = {
    arrRequirement: [...props.submitData.requirement],
    name: props.submitData.patron.name,
    email: props.submitData.patron.email,
    fund: props.submitData.patron.fundRange,
    meetingDate: props.submitData.patron.date,
    status: "Pending",
  };
  try {
    //Value of userID
    // Get the scholarship data for the user
    const existingUserID = await api.checkUserID(1);
    // Get the sponsor of the existingUserID
    const existingSponsor = await api.getExistingSponsor(existingUserID);

    if (existingUserID && existingSponsor) {
      const updatedSponsor = existingSponsor.push(dataToSubmit);

      await api.updateScholarshipData(existingUserID, updatedSponsor);
    } else {
      // If the user does not exist, create a new entry
      dataToSubmit = {
        sponsor:[
          ...dataToSubmit
        ]
      };

      // Post new scholarship data
      await api.postScholarshipData(dataToSubmit);
    }

    // Handle success
    console.log("Data submitted successfully");
    alert("Your submission was successful! Thank you for your participation.");
  } catch (error) {
    // Handle error
    console.error("Error submitting data:", error);
    alert("There was an error submitting your data. Please try again.");
  }
};
</script>
