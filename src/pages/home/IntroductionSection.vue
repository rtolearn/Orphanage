<template>
  <div
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <img
        class="mx-auto h-12"
        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
        alt=""
      />
      <figure class="mt-10">
        <blockquote
          class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
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
  <div class="w-1/2 m-auto display-block">
    <carousel :items-to-show="2">
      <slide v-for="(imgSrc, index) in img" :key="index" class="w-full">
        <img :src="imgSrc" alt="Image" style="width: 80%; height: auto" />
      </slide>

      <template #addons>
        <div class="p-20">
          <navigation />
          <pagination />
        </div>

      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      img: [
        "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
        "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
        "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
        "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
        "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
      ],
    };
  },
};
</script>
