<template>
  <div class="hero_section_background">
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
  <div class="w-4/5 m-auto display-block py-[0.5rem]">
    <carousel :items-to-show="2" :autoplay="1000" :loop="true" :wrap-around="true" pause-autoplay-on-hover class="m-5">
      <slide v-for="image in data" :key="image.id">
        <img :src="image.img" alt="Image" class="w-4/5 sm:w-2/5 h-auto"/>
      </slide>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide} from "vue3-carousel";
// import {Pagination, Navigation} from "vue3-carousel";
const data = [
  {img: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"},
  {img:  "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"},
]</script>
<style scoped>
.hero_section_background {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto; /* Adjust height as needed */
}

.hero_section_background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/images/hero_section_pic.jpg");
  background-size: cover; /* Ensure the background covers the entire element */
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2; /* Adjust opacity here */
  z-index: 1;
}

</style>
