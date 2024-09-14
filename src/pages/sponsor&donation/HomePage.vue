<template>
  <div>
    <div>
      <router-link to="/">
        <div class="flex justify-center pt-[3rem]">
          <span class="pi pi-home mx-3 text-xl"></span>
        </div>
      </router-link>
      <div class="">
        <h1
          class="font-bold text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          Become our Sponsor or Donor
        </h1>
      </div>
    </div>

    <div
      class="w-full h-fit m-auto block p-5 text-md sm:text-xl md:flex md:justify-center md:items-center md:gap-10"
    >
      <!-- Sponsor Card -->
      <CardServices :services="services[0]" />
      <!-- OR Divider -->
      <div
        class="flex md:flex-col items-center justify-center w-full md:w-auto h-auto my-5 m-auto"
      >
        <div class="border border-black w-full h-[2px]"></div>
        <h1 class="text-center font-bold m-3 sm:m-5 w-auto">OR</h1>
        <div class="border border-black w-full h-[2px]"></div>
      </div>
      <!-- Donation Card -->
      <CardServices :services="services[1]" />
    </div>
  </div>
</template>

<script setup>
import CardServices from "./CardServices.vue";
import necessary from "@/images/necessary.svg";
import scholarship from "@/images/scholarship.svg";
import fund from "@/images/fund.svg";
import equipment from "@/images/equipment.svg";
import sponsor from "@/images/sponsor.jpg";
// import {onMounted} from 'vue'
const services = [
  {
    img: sponsor,
    title: "Sponsor: ",
    module: [
      {
        subModuleName: "Equipments",
        subModuleIcon: equipment,
        subModuleLinkage: "./equipment",
      },
      {
        subModuleName: "Necessaries",
        subModuleIcon: necessary,
        subModuleLinkage: "./necessary",
      },
    ],
  },
  {
    img: sponsor,
    title: "Donation: ",
    module: [
      {
        subModuleName: "Scholarship",
        subModuleIcon: scholarship,
        subModuleLinkage: "./scholarship",
      },
      {
        subModuleName: "Fund",
        subModuleIcon: fund,
        subModuleLinkage: "./",
      },
    ],
  },

];
// onMounted(() => {
//   console.log(services[0])
// })
</script>
