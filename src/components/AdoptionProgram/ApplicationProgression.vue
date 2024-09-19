<template>
  <div class="w-4/5 h-auto m-auto block border solid black mt-[3rem]">
    <div
      class="m-auto block mt-[5rem] md:text-lg border solid black w-4/5 h-full bg-cyan-100"
    >
      <h1 class="text-center text-sm sm:text-lg md:text-xl mt-2 font-bold">
        Progression of evaluation:
      </h1>
      <Timeline
        :value="events"
        layout="vertical"
        class="sm:m-5 p-5 text-xs sm:text-sm md:text-lg"
      >
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
      <h1 class="text-lg m-3">{{ currentPhase.description }}</h1>
    </div>
  </div>

  <p class="text-center italic mt-[1rem]">
    Based on the current policy, the children to be adopted is limited for the
    sake of taking care both parties.
  </p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Timeline from "primevue/timeline";
import "primeicons/primeicons.css";
import { handleApplicationProgressionBar } from "@/services/adoptionprogramService";


//Array that display until the latest phase of the application
const events = ref([]);
// Create an object to store all the phases of the adoption application
const phaseObj = [
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
];

//Variabel for current phase
const currentPhase = ref([]);

//Push the lastest phase of the application into the array, event

// Function to get the current user's ID
onMounted(async () => {
  handleApplicationProgressionBar(events, phaseObj, currentPhase);
});



</script>



<style>
@media (max-width: 425px) {
  .icon-class {
    display: none;
  }
}
</style>
