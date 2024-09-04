<template>
    <div>
      <Select
        v-model="selectedItem"
        :options="data"
        optionLabel="itemName"
        class="sticky w-4/5 h-auto flex justify-center items-center m-auto my-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
        placeholder="Here is the checklist for every item.."
        @change="scrollToItem"
      ></Select>
    </div>
  </template>
  
  <script setup>
  import {ref, defineProps} from "vue"
  // Define props to receive data from the parent component
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  // Define a reactive variable for the selected item
  const selectedItem = ref(null);
  // Scroll to the selected item
  const scrollToItem = () => {
    if (selectedItem.value) {
      const index = props.data.value.findIndex(item => item.id === selectedItem.value.id); // Use id to find the index
      if (index !== -1) {
        const element = document.getElementById(`item-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center"});
        }
      }
    }
  };
  </script>
  