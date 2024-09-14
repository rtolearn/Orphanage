

<template>
    <div class="w-4/5 h-auto m-auto">
      <!-- Display all the items needed in a list -->
      <div
        class="w-full h-auto m-auto block my-[1.5rem] border solid border-gray-200 rounded-lg"
      >
        <div
          v-for="(item, index) in props.data"
          :key="item.id"
          :id="'item-' + index"
          class="w-fit h-auto m-auto block card flex justify-between items-center px-5 sm:px-10"
        >
          <div class="card-items flex justify-left items-center">
            <img :src="item.item_image" class="w-1/5 h-auto" />
            <div class="ml-2 w-4/5">
              <div class="flex justify-between items-end">
                <h1
                  class="text-sm font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                >
                  {{ item.item_name }}
                </h1>
              </div>
              <ProgressBar
                :value="(item.current_amount / item.max_amount) * 100"
                :max="item.max_amount"
              >
                <span class="text-[0.6rem] sm:text-[0.8rem]"
                  >{{ item.current_amount }}/{{ item.max_amount }}</span
                >
              </ProgressBar>
              <div
                class="block sm:flex sm:justify-between sm:items-center text-xs sm:text-lg md:text-base"
              >
                <h1
                  class="text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  <span class="pump-animation">RM{{ item.max_amount - item.current_amount }}.00 </span>
                  left
                </h1>
                <button
                  class="my-1 w-full sm:w-3/5 bg-green-200 sm:p-1 rounded-sm focus:text-white text-xs font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-md"
                >
                  Contribute
                </button>
              </div>
            </div>
          </div>
          <hr
            v-if="index < data.length - 1"
            class="border-t-2 border-gray-300 my-2 h-[2px] w-full"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProgressBar from "primevue/progressbar";
  import {defineProps} from 'vue'
  
  const props = defineProps({
    data: {
      type: Array,
      required:true,
    }
  })
  </script>
  <style scoped>
  @keyframes pump {
  0% {
    transform: scale(1);
    color: black; /* Initial color */
  }
  50% {
    transform: scale(1.01);
    color: red; /* Color when enlarged */
  }
  100% {
    transform: scale(1);
    color: black; /* Reset to initial color */
  }
}

.pump-animation {
  display: inline-block; /* Ensure the animation applies properly */
  animation: pump 0.6s ease-in-out infinite; /* Animation duration and loop */
}

</style>