<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-4/5 h-auto m-auto">
    <div class="flex justify-left items-center text-center mt-10 gap-5">
      <router-link to="/sponsor&donation">
        <span class="pi pi-home mx-3 text-xl">Home</span>
      </router-link>
      <h1 class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Thanks for your contribution
      </h1>
    </div>

    <!-- Display all the items needed in a list  -->
    <div
      class="w-full h-auto m-auto block my-[1.5rem] border solid border-black rounded-lg"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-fit h-auto m-auto block card flex justify-between items-center px-10"
      >
        <div class="card-items flex justify-left items-center">
          <img :src="item.img" class="w-1/5 h-auto" />

          <div class="ml-2 w-4/5">
            <div class="flex justify-between items-end">
              <h1
                class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl my-5"
              >
                {{ item.name }}
              </h1>
            </div>

            <ProgressBar :value="item.currentAmount" class="my-5">
              
                {{ item.currentAmount }}/{{
                  item.currentAmount + item.neededAmount
                }}
         
            </ProgressBar>

            <div
              class="flex justify-between items-center text-xs sm:text-lg md:text-base"
            >
              <h1 class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                RM{{ item.neededAmount }}.00 more to go!
              </h1>

              <button
                class="my-1 w-2/5 bg-gray-400 p-1 rounded-sm focus:text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressBar from "primevue/progressbar";
const equipmentImage =
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80";

const items = [
  {
    name: "Wheelchair",
    currentAmount: 100,
    neededAmount: 5,
    img: equipmentImage,
  },
  {
    name: "Crutches",
    currentAmount: 8,
    neededAmount: 4,
    img: equipmentImage,
  },
  {
    name: "Walkers",
    currentAmount: 6,
    neededAmount: 3,
    img: equipmentImage,
  },
  {
    name: "Hospital Beds",
    currentAmount: 15,
    neededAmount: 5,
    img: equipmentImage,
  },
  {
    name: "Blood Pressure Monitors",
    currentAmount: 7,
    neededAmount: 300,
    img: equipmentImage,
  },
  {
    name: "Thermometers",
    currentAmount: 12,
    neededAmount: 5,
    img: equipmentImage,
  },
  {
    name: "First Aid Kits",
    currentAmount: 20,
    neededAmount: 10,
    img: equipmentImage,
  },
  {
    name: "Computers",
    currentAmount: 5,
    neededAmount: 10,
    img: equipmentImage,
  },
  {
    name: "Projectors",
    currentAmount: 3,
    neededAmount: 2,
    img: equipmentImage,
  },
  {
    name: "Bicycles",
    currentAmount: 10,
    neededAmount: 5,
    img: equipmentImage,
  },
];
</script>
