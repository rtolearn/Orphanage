<template>
  <div class="w-4/5 h-auto m-auto mt-[3.5rem] block border solid black">
    <div class="flex justify-end mt-[5rem]">
      <router-link to="/">
        <button
          class="text-sm border border-solid border-2 pt-1 pb-1 pl-2 pr-2 sm:pt-2 sm:pb-2 sm:pl-5 sm:pr-5 rounded-md"
        >
          Home
        </button>
      </router-link>
    </div>
    <div class="m-auto block mt-[5rem]">
      <Timeline :value="events">
        <template #opposite="slotProps">
          <small class="text-surface-500 dark:text-surface-400">{{
            slotProps.item.date
          }}</small>
        </template>
        <template #content="slotProps">
          <i :class="slotProps.item.icon" style="font-size: 0.85rem"></i>
          {{ slotProps.item.status }}
          <!-- <button @click="updateStatus(slotProps.item.status)">
            Update Status
          </button> -->
          <!-- Button to update status -->
        </template>
        <template #content-detail="slotProps">
            {{ slotProps.item.image }}
            {{ slotProps.item.description }}

        </template>
      </Timeline>
    </div>
    <div class="card flex justify-center items-center mt-[10rem]">
      <ProgressSpinner
        style="width: 10%; height: 10%"
        strokeWidth="18"
        fill="transparent"
        animationDuration="1s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Timeline from "primevue/timeline";
import "primeicons/primeicons.css";

import ProgressSpinner from "primevue/progressspinner";



// Events array
const events = ref([
  {
    status: "Processing",
    date: "15/10/2020 10:30",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "./aboutUs.jpg",
    description: "halo I am working hard for you"
  },
  {
    status: "Evaluating",
    date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
    image: "./aboutUs.jpg",
    description: "halo I am working hard for you"
  },
  {
    status: "Completed",
    date: "15/10/2020 16:15",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
    image: "./aboutUs.jpg",
    description: "halo I am working hard for you"
  },
  {
    status: "Notification",
    date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
    image: "./aboutUs.jpg",
    description: "halo I am working hard for you"
  },
]);


</script>
