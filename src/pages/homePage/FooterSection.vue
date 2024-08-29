<template>
  <footer class="bg-gray-200 p-2 w-full h-auto px-4 py-1 sm:px-3 lg:px-4">
    <div class=" ">
      <div class="md:flex md:items-center md:justify-center sm:justify-between">
        <div
          class="flex items-center justify-center text-teal-600 gap-2.5 my-3 mx-5"
        >
          <img :src="facebook" alt="facebook" />
          <img :src="instagram" alt="instagram" />
          <img :src="whatsapp" alt="whatsapp" />
          <img :src="email" alt="email" />
        </div>
        <div
          class=" sm:flex sm:justify-center md:justify-end sm:items-center w-full h-auto"
        >
          <div class="flex justify-center items-center mx-2 text-sm">
            <img :src="location" alt="location" class="mx-5 sm:mx-1"/>
            <p class="mx-5 sm:mx-1">123, Penang Road</p>
          </div>
          <img
            :src="divider_vertical"
            alt="divider_vertical_1"
            class="mx-1 hidden sm:block"
          />
          <div class="flex justify-center items-center mx-2 text-sm">
            <img :src="phone" alt="phone" class="mx-5 sm:mx-1" />
            <p class="mx-5 sm:mx-1">+60 12 3456 7890</p>
          </div>
          <img
            :src="divider_vertical"
            alt="divider_vertical_2"
            class="mx-1 hidden sm:block"
          />
          <div class="flex justify-center items-center mx-2 text-sm">
            <img :src="time" alt="time" class="mx-5 sm:mx-1" />
            <p class="mx-5 sm:mx-1">9.00am - 6.00pm</p>
          </div>
        </div>
      </div>
      <img
        :src="divider_horizontal"
        alt="divider_horizontal"
        class="hidden md:block"
      />
      
      <p class="m-2 text-center text-sm text-gray-500 lg:mt-0 lg:text-left">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import facebook from "@/images/facebook_contact.svg";
import instagram from "@/images/instagram_contact.svg";
import whatsapp from "@/images/whatsapp_contact.svg";
import email from "@/images/email_contact.svg";

import location from "@/images/location_contact.svg";
import phone from "@/images/phone_contact.svg";
import time from "@/images/time_contact.svg";
import divider_vertical from "@/images/divider_vertical_contact.svg";
import divider_horizontal from "@/images/divider_horizontal_contact.svg";
</script>
