<template>
  <div class="flex flex-col h-auto m-5">
    <div
      class="text-center border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
      <div class="m-auto w-auto h-auto p-10">
        <h1 class="font-bold text-center text-lg sm:text-xl md:text-2xl pb-5">
          Thank you
        </h1>
        <div class="text-gray-500 text-base sm:text-lg font-medium">
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
import { useRouter } from "vue-router";

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

//Push the data into supabase
import { supabase } from "@/clients/supabaseClient";
import {ref } from 'vue'
const userId = ref("")
const handleDataSubmission = async () => {
  console.log("Data before submiting to the supabase" + props.submitData);

  try {
    const { data:{user}, error: getIdError} = await supabase.auth.getUser();
    if (getIdError) {
      throw getIdError;
    }else{
      userId.value = user.id
    }
    const {error: insertError } = await supabase
      .from("donation_scholarship")
      .insert([
        {
          requirement: props.submitData.requirement,
          donor_name: props.submitData.patron.name,
          donor_email: props.submitData.patron.email,
          amount: props.submitData.patron.fund,
          meeting_date: props.submitData.patron.date,
          user_id: userId.value,
        },
      ]);
    if (insertError) {
      throw insertError;
    }
  } catch (error) {
    console.log(error.message);
  }

  alert(
    `All the information are stored,
    please wait for the updates via your email for futher discussion`
  );

  router.push("/sponsor&donation");
};
</script>
