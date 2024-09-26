<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from "../HomePage/NavBar.vue";
import HomePage from "../../components/AdoptionProgram/HomePage.vue";
import Introduction from "../../components/AdoptionProgram/Introduction.vue";
import ApplicationProgression from "../../components/AdoptionProgram/ApplicationProgression.vue";
// import { ref } from "vue";
import {useRoute} from "vue-router"



// const applicationStatus = ref(false);
const route = useRoute();
const applicationStatus = route.query.programStatus;


</script>

<template>
  <div id="sponsor&donation" class="max-w-[1440px] h-screen mx-auto px-5">
    <NavBar />
    <Introduction />
    <div v-if="applicationStatus">
      <ApplicationProgression/>
    </div>

    <div v-else>
      <HomePage />
    </div>
  </div>
</template>
