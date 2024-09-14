<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from "@/pages/HomePage/NavBar.vue";
import HomePage from "./HomePage.vue";
import Introduction from "./Introduction.vue";
// import ApplicationProgressionButton from "./ApplicationProgressionButton.vue";
import ApplicationProgression from "./ApplicationProgression.vue";
import { supabase } from "@/clients/supabaseClient";
import { ref, onMounted } from "vue";

const userId = ref("");
const applicationStatus = ref(false);
// Function to get the current user's ID
onMounted(async () => {
  const {
    data: { user },
    error: getIdError,
  } = await supabase.auth.getUser();
  if (getIdError) {
    throw getIdError;
  } else {
    userId.value = user.id;
  }

  const { data, error: programStatus } = await supabase
    .from("adoption_program")
    .select("program_status")
    .eq("user_id", userId.value)
    .single()

  if (programStatus) {
    console.error("Error getting program ID", programStatus);
    return;
  }

  if (data.program_status) {
    applicationStatus.value = true;
    console.log("aplication status:" + applicationStatus.value)
  }
});
</script>

<template>
  <div id="sponsor&donation" class="max-w-[1440px] h-screen mx-auto px-5">
    <NavBar />
    <Introduction />
    <div v-if="applicationStatus">
      <ApplicationProgression :userId="userId"/>
    </div>

    <div v-else>
      <HomePage />
    </div>
  </div>
</template>
