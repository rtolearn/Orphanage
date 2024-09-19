<template>
  <Card
    class="m-auto block hover:scale-105 hover:shadow-2xl shadow-2xl w-full md:w-[40%] h-auto"
  >
    <template #header>
      <img alt="user header" :src="props.services.img" class="w-full h-auto" />
    </template>
    <template #title>
      <h1
        class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        {{ props.services.title }}
      </h1></template
    >
    <template #subtitle>
      <div class="text-[1.1rem]">
        <!-- Loop through all the module -->
        <div v-for="(item, index) in props.services.module" :key="index">
          <router-link :to="{path: item.subModuleLinkage, query: {type: item.subModuleName.toLowerCase()}}">
            <div
              class="flex justify-left items-center border solid black hover:bg-gray-300 my-1 hover:scale-105"
            >
              <img
                :src="item.subModuleIcon"
                class="w-[1.5rem] md:w-[2rem] h-auto m-3"
              />
              <h1
                class="text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl"
              >
                {{ item.subModuleName }}
              </h1>
            </div>
          </router-link>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";
// import { onMounted} from "vue";
const props = defineProps({
  services: {
    type: Object,
    required: true,
  },
});

</script>
