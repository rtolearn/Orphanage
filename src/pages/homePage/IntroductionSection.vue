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
  <!-- <div class="w-4/5 m-auto display-block ">
    <carousel :items-to-show="2">
      <slide v-for="image in data" :key="image.id" >
        <img :src="image.img" alt="Image" class="w-4/5 h-auto"/>
      </slide>

      <template #addons>
        <div class="p-20">
          <navigation />
          <pagination />
        </div>

      </template>
    </carousel>
  </div> -->
<!-- <div class="slider-container self-center">
    <div ref="container" class="keen-slider">
      <div v-for="(item, index) in items" :key="index" class="keen-slider__slide">
        <img :src="item.img" alt="logo" />
      </div>
    </div>
  </div>  -->

  <!-- <div ref="container" class="keen-slider">
    <div class="keen-slider__slide ">1</div>
    <div class="keen-slider__slide ">2</div>
    <div class="keen-slider__slide ">3</div>
    <div class="keen-slider__slide ">4</div>
    <div class="keen-slider__slide ">5</div>
    <div class="keen-slider__slide ">6</div>
    <div class="keen-slider__slide ">7</div>
    <div class="keen-slider__slide ">8</div>
    <div class="keen-slider__slide ">9</div>
    <div class="keen-slider__slide ">10</div>
    <div class="keen-slider__slide ">11</div>
    <div class="keen-slider__slide ">12</div>
    <div class="keen-slider__slide ">13</div>
  </div>-->
</template>

<!-- <script setup> 
import { ref, onMounted } from 'vue'
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'


const container = ref(null)
const animation = { duration: 5000, easing: t => t }

onMounted(() => {
  const [slider] = useKeenSlider(container, {
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      if (s.track.details) {
        s.moveToIdx(5, true, animation)
      }
    },
    updated(s) {
      if (s.track.details) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      }
    },
    animationEnded(s) {
      if (s.track.details) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      }
    }
  })
})
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const data = [
  {img: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"},
  {img: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"},
  {img:  "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"},
]
</script> -->
<script>
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default {
  data() {
    return {
      items: [
        { img: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" },
        { img: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" },
        { img: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" },
        { img: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" },
        { img: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" }
      ]
    };
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.container, {
      loop: true,
      renderMode: "dafault",
      drag: false,
      duration: 9000000,
      easing: t => t,
      created: (s) => {
        s.moveToIdx(1, true);
      },
      updated: (s) => {
        s.moveToIdx(s.track.details.abs + 1, true);
      },
      animationEnded: (s) => {
        s.moveToIdx(s.track.details.abs + 1, true);
      }
    });
  },
  // beforeUnmount() {
  //   if (this.slider) {
  //     this.slider.destroy();
  //   }
  // }
};
</script>

