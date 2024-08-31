<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from "@/pages/homePage/NavBar.vue"
import DisplayEquipment from "./DisplayEquipment.vue";
import Title from './Title.vue'
import CheckList from "./CheckList.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// Define a reactive variable to store the data
const data = ref([]);

// Fetch data when the component is mounted
onMounted(() => {
  axios
    .get("http://localhost:3000/equipment") // Replace with your JSON server endpoint
    .then((response) => {
      data.value = response.data; // Assign the fetched data to the reactive variable
      console.log(data.value);
    })
    .catch((error) => {
      console.error("There was an error fetching the data!", error);
    });
});
</script>


<template>
    <div class="max-w-[1440px] mx-auto max-h-auto">
    <NavBar />
    <Title />
    <CheckList :data="data" />
    <DisplayEquipment :data="data"/>
    </div>
    
</template>