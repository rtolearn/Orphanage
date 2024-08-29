<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="flex justify-between items-center p-1 w-full h-80 p-5">
      <div class="w-2/5 h-full p-[1rem]">
        <h5
          class="text-xs text-gray-400 leading-[1.5rem] font-semibold font-['Poppins'] w-full h-auto"
        >
          YOUR GENEROSITY CAN CHANGE LIVES FOREVER
        </h5>
        <h1
          class="text-2xl leading-[1.5] font-semibold font-['Poppins'] w-full h-auto"
        >
          Lend a Helping Hand to Those in Need
        </h1>
        <h6 class="text-sm leading-[1.3125rem] md:my-[0.5rem] w-full h-auto">
          Your kindness can provide shelter, education, and hope to children who
          need it most. Join us in making a lasting difference, one donation at a
          time
        </h6>
        <button
          class="border solid green rounded-[5px] w-3/5 h-auto bg-green-700 text-white my-[0.25rem] md:my-[1rem] font-['Poppins'] text-lg"
        >
          Donate Now
        </button>
      </div>
      <div class=" w-3/5 h-full">
        <img 
        src="@/images/hero_section_pic.jpg" 
        alt="hero section picture is loading" 
        class="w-auto h-auto"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import "vue3-carousel/dist/carousel.css";
  </script>
  