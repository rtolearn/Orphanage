<template>
  <div class="hero_section_background" id="home">
    <div class="relative z-10 w-4/5 h-auto py-[1rem] m-auto block">
      <img
        class="w-1/2 h-auto m-auto block"
        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
        alt=""
      />
      <figure class="mt-1 sm:mt-5 text-center">
        <h5
          class="text-[0.65rem] sm:text-lg text-gray-400 leading-8 sm:leading-10 font-semibold font-['Poppins'] w-full h-auto sm:mb-[1rem]"
        >
          YOUR GENEROSITY CAN CHANGE LIVES FOREVER
        </h5>
        <h1
          class="text-[1rem] sm:text-3xl leading-10 sm:leading-10 font-semibold font-['Poppins'] w-full h-auto mb-[1.25rem]"
        >
          Lend a Helping Hand to Those in Need
        </h1>

        <p
          class=" hidden sm:block text-xs sm:text-xl font-semibold leading-5 sm:leading-10 text-gray-900 leading-8 pl-5 pr-5 w-full h-auto m-auto block"
        >
          "Your kindness can provide shelter, education, and hope to children who
          need it most. Join us in making a lasting difference, one donation at a
          time"
        </p>
        <button
          class="text-md border solid green rounded-[5px] w-3/5 h-auto bg-green-700 text-white my-[0.25rem] md:my-[1rem] lg:my-[3rem] font-['Poppins']"
        >
          Donate Now
        </button>
      </figure>
    </div>
  </div>
  <div class="w-4/5 h-auto m-auto display-block py-[0.5rem]">
    <carousel :items-to-show="2" :autoplay="1000" :loop="true" :wrap-around="true" pause-autoplay-on-hover class="my-5">
      <slide v-for="image in data" :key="image.id">
        <img :src="image.img" alt="Image" class="w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem]"/>
      </slide>
    </carousel>
  </div>
</template>

<script setup> 






// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
// import {Pagination, Navigation} from "vue3-carousel";
import googleIcon from "@/images/googleIcon.svg"
import hyundaiIcon from "@/images/hyundaiIcon.svg"
import instagramIcon from '@/images/instagram.svg'
import spotifyIcon from '@/images/spotify.svg'
import cocaColaIcon from '@/images/coca-cola.svg'
import snapchat from '@/images/snapchat.svg'
import twitter from '@/images/twitter.svg'
import bmw from '@/images/bmw.svg'
import facebook from '@/images/facebook.svg'
import mcdonald from '@/images/mcdonald.svg'

const data = [
  {img: googleIcon},
  {img: hyundaiIcon},
  {img: instagramIcon},
  {img: spotifyIcon},
  {img:cocaColaIcon},
  {img: snapchat},
  {img: twitter},
  {img: bmw},
  {img: facebook},
  {img: mcdonald}
]
</script> 

<style scoped>
.hero_section_background{
  position: relative;
  height: auto;
}

.hero_section_background::before{
  content: '';
  position: 'absolute';
  top: '0';
  bottom: '0';
  right: '0';
  left: '0';

  
  background-image: url('@/images/hero_section_pic.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.34
}



</style>
