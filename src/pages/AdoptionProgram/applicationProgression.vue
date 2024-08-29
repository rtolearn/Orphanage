<template>
  <div class="w-4/5 h-auto m-auto block border solid black">
    <div class="flex justify-end mt-[1rem]">
      <router-link to="/">
        <button
          class="text-sm border solid black rounded-md pt-1 pb-1 pl-2 pr-2 sm:pt-2 sm:pb-2 sm:pl-5 sm:pr-5"
        >
          Home
        </button>
      </router-link>
    </div>
    <div
      class="m-auto block mt-[5rem] md:text-lg border solid black w-4/5 h-full bg-cyan-100"
    >
      <h1 class="text-center text-sm sm:text-lg md:text-xl mt-2 font-bold">Progression of evaluation:</h1>
      <Timeline :value="events" layout="vertical" class="sm:m-5 p-5 text-xs sm:text-sm md:text-lg">
       
        <!-- Left hand-side -->
        <template #opposite="slotProps">
          <small class="text-surface-500 dark:text-surface-400">{{
            slotProps.item.date
          }}</small>
        </template>

        <!-- Right hand-side -->
        <template #content="slotProps">
          <i
            :class="slotProps.item.icon"
            style="font-size: 0.85rem"
            class="icon-class"
          ></i>
          {{ slotProps.item.status }}

        </template>
      </Timeline>
    </div>
    <!-- Display the information of the current phase -->
    <div class="text-center m-10">
      <h1 class="text-lg sm:text-2xl">{{ currentPhase.status }} Phase</h1>
      <i :class="currentPhase.icon" class="m-10" style="font-size: 3rem"></i>
      <h1 class="text-lg m-3">{{currentPhase.description}}</h1>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import Timeline from "primevue/timeline";
import "primeicons/primeicons.css";
// import ProgressSpinner from "primevue/progressspinner";

// const updateCurrentPhase = () =>{
//   currentPhase.value
// }
// Events array
const events = ref([
  {
    status: "Processing",
    date: "15/10/2020 10:30",
    icon: "pi pi-spinner-dotted",
    color: "#9C27B0",
    image: "./aboutUs.jpg",
    description: "Your forms are processing by our client...",
  },
  {
    status: "Evaluating",
    date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
    image: "./aboutUs.jpg",
    description: "Your forms are received and now in the process of evaluation",
  },
  {
    status: "Completed",
    date: "15/10/2020 16:15",
    icon: "pi pi-check",
    color: "#FF9800",
    image: "./aboutUs.jpg",
    description: "Your forms are done evaluated",
  },
  {
    status: "Notification",
    date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
    image: "./aboutUs.jpg",
    description: "Kindly wait for the client to contact you again",
  },
]);

//Variabel for current phase
const currentPhase = ref("");
currentPhase.value = events.value[1];
</script>

<style>
@media (max-width: 425px) {
  .icon-class {
    display: none;
  }
}
</style>
