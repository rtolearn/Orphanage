 <template>
  <h1 class="text-4xl text-center m-3">Content</h1>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="m-5 h-125 w-125"
  >
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>
    <swiper-slide class="m-2.5">
      <img :src="imageContent" />
    </swiper-slide>

  </swiper>
</template>

<script setup>
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import the image
import imageContent from '../AboutUsImages.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

// Modules array for Swiper
const modules = [Navigation, Pagination, Scrollbar, A11y];
</script> 