<template>
  <div class="bg-emerald-200 w-full h-auto" id="content">
    <h1 class="font-sans font-black p-1 text-2xl text-center ">Content</h1>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="5"
      navigation
      
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="h-auto w-full flex justify-center items-center"
    >
    
      <swiper-slide v-for="item in items" :key="item.id" class="self-center">
        <img :src="item.image" class="w-3/5 h-auto m-5"/>
      </swiper-slide>
    </swiper>
    <!-- <div class="swiper-pagination custom-pagination"></div> -->
  </div>
</template>

<script setup>
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import the image
import imageContent from "../AboutUsImages.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const items = [
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
  {image: imageContent},
]
// const triggerFunction = () => {
//   console.log("Heello")
// }
// Event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

// Modules array for Swiper
const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>


<style scoped>
.custom-pagination .swiper-pagination-bullet {
  width: 10px;  /* Change the width as needed */
  height: 10px; /* Change the height as needed */
  background-color: #000; /* Change the color as needed */
}
.custom-pagination .swiper-pagination-bullet-active {
  background-color: #ff0000; /* Change the active bullet color as needed */
}
</style>