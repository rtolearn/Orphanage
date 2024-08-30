<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="max-w-[1440px] md:h-screen m-auto block bg-green-50">
    <div>
      <div class="py-10 sm:pt-[6rem]">
        <router-link to="/">
      <span class="pi pi-home mx-3"></span>
    </router-link>

        <h1 class="font-bold text-lg sm:text-2xl text-center">
          Become our Sponsor or Donor
        </h1>
        
      </div>
      <div
        class="w-full h-fit m-auto block p-5 text-md sm:text-xl md:flex md:justify-center md:items-center md:gap-10"
      >
        <Card
          class="m-auto block hover:scale-105 hover:shadow-2xl shadow-2xl w-4/5 md:w-4/5 h-auto overflow-hidden"
        >
          <template #header>
            <img alt="user header" :src="donation" class="w-full h-auto" />
          </template>
          <template #title>Sponsor:</template>
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
                  <h1>Equipment / Necessaries</h1>
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
                  <h1>Used Item</h1>
                </div>
              </router-link>
            </div>
          </template>
        </Card>

        <h1 class="text-center font-bold m-5">OR</h1>

        <Card
          class="m-auto my-5 block hover:scale-105 hover:shadow-2xl shadow-2xl w-4/5 md:w-4/5 h-auto overflow-hidden"
        >
          <template #header>
            <img alt="user header" :src="donation" class="w-full h-auto" />
          </template>
          <template #title>Donation:</template>
          <template #subtitle>
            <div class="text-[1.1rem]">
              <router-link to="">
                <div
                  class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
                >
                  <img
                    :src="scholarship"
                    class="w-[1.5rem] sm:w-[2rem] h-auto m-3"
                  />
                  <h1>Scholarship</h1>
                </div>
              </router-link>
              <router-link to="">
                <div
                  class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
                >
                  <img :src="fund" class="w-[1.5rem] md:w-[2rem] h-auto m-3" />
                  <h1>Fund</h1>
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
