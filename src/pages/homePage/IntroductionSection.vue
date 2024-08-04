<template>
  <div class="relative isolate overflow-hidden bg-white py-6">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl m-0">
      <img
        class="mx-auto h-12"
        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
        alt=""
      />
      <figure class="mt-10">
        <blockquote
          class="text-center text-md sm:text-xl font-semibold leading-8 text-gray-900 leading-8 pl-5 pr-5"
        >
          <p>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </p>
        </blockquote>
      </figure>
    </div>
  </div>


  <div class="w-4/5 sm:3/5 m-auto display-block ">
    <carousel :items-to-show="2" :autoplay="1000" :loop="true" :wrap-around="true" pause-autoplay-on-hover class="m-5">
      <slide v-for="image in data" :key="image.id" >
        <img :src="image.img" alt="Image" class="w-4/5 sm:w-2/5 h-auto"/>
      </slide>

      <!-- <template #addons>
        <div class="">
           <navigation /> 
           <pagination /> 
        </div>
      </template> -->

    </carousel>
  </div>

</template>

<script setup> 






// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide} from "vue3-carousel";
// import {Pagination, Navigation} from "vue3-carousel";
const data = [
  {img: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"},
  {img:  "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"},
]
</script> 
