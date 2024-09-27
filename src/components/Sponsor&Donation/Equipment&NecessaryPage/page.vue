<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from "@/pages/HomePagetesting/NavBar.vue";
import DisplayItem from "./DisplayItem.vue";
import Title from "./Title.vue";
import CheckList from "./CheckList.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { displayItem } from "../../../services/sponsor&donation";
const route = useRoute();
const typeOfItem = route.query.type;
const dataItem = ref([]);

onMounted(() => {
  console.log("type of item passed fromm parent" + typeOfItem);
  displayItem(dataItem, typeOfItem);
});
</script>

<template>
  <div class="max-w-[1440px] mx-auto max-h-auto">
    <NavBar />
    <div class="sticky top-[4.8%] bg-white z-10 opacity-1">
      <Title />
      <CheckList :data="dataItem" />
    </div>
    <div class="z-1">
      <DisplayItem :data="dataItem" />
    </div>
  </div>
</template>
