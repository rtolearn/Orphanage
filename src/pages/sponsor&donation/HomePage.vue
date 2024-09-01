<template>
  <div class="max-w-[1440px] md:h-screen m-auto block">
    <div>
      <div class="py-10 sm:pt-[6rem]">
        <h1 class="font-bold text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Become our Sponsor or Donor
        </h1>
      </div>
      <div
        class="w-full h-fit m-auto block p-5 text-md sm:text-xl md:flex md:justify-center md:items-center md:gap-10"
      >
        <!-- Sponsor Card -->
        <Card
          class="m-auto block hover:scale-105 hover:shadow-2xl shadow-2xl w-full md:w-[40%] h-auto overflow-hidden"
        >
          <template #header>
            <img alt="user header" :src="donation" class="w-full h-auto" />
          </template>
          <template #title>
            <h1 class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Sponsor:</h1></template>
          <template #subtitle>
            <div class="text-[1.1rem]">
              <router-link to="/equipment">
                <div
                  class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
                >
                  <img
                    :src="equipment"
                    class="w-[1.5rem] md:w-[2rem] h-auto m-3"
                  />
                  <h1 class="text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl">Equipment / Necessaries</h1>
                </div>
              </router-link>
              <router-link to="/necessary">
                <div
                  class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
                >
                  <img
                    :src="usedItem"
                    class="w-[1.5rem] sm:w-[2rem] h-auto m-3"
                  />
                  <h1 class="text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl">Used Item</h1>
                </div>
              </router-link>
            </div>
          </template>
        </Card>

        <!-- OR Divider -->
        <div class="flex md:flex-col items-center justify-center w-full md:w-auto h-auto my-5 m-auto">
          <div class="border border-black w-full h-[2px]"></div>
          <h1 class="text-center font-bold m-3 sm:m-5 w-auto">OR</h1>
          <div class="border border-black w-full h-[2px]"></div>
        </div>

        <!-- Donation Card -->
        <Card
          class="m-auto my-5 block hover:scale-105 hover:shadow-2xl shadow-2xl w-full md:w-[40%] h-auto overflow-hidden"
        >
          <template #header>
            <img alt="user header" :src="donation" class="w-full h-auto" />
          </template>
          <template #title ><h1 class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Donation:</h1></template>
          <template #subtitle>
            <div class="text-[1.1rem]">
              <router-link to="/scholarship">
                <div
                  class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
                >
                  <img
                    :src="scholarship"
                    class="w-[1.5rem] sm:w-[2rem] h-auto m-3"
                  />
                  <h1 class="text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl">Scholarship</h1>
                </div>
              </router-link>
              <router-link to="">
                <div
                  class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
                >
                  <img :src="fund" class="w-[1.5rem] md:w-[2rem] h-auto m-3" />
                  <h1 class="text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl">Fund</h1>
                </div>
              </router-link>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "primevue/card";

import usedItem from "@/images/usedItem.svg";
import scholarship from "@/images/scholarship.svg";
import fund from "@/images/fund.svg";
import equipment from "@/images/equipment.svg";
// import sponsor from "@/images/sponsorPic.jpg";
import donation from "@/images/donation.jpg";
</script>
