<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from "@/pages/HomePage/NavBar.vue";

import Title from "./Title.vue";
import CheckList from "./CheckList.vue";

import { ref, onMounted } from "vue";
import { supabase } from "@/clients/supabaseClient";
import DisplayNecessary from "./DisplayNecessary.vue";

const dataEquipment = ref([]);

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("sponsor_items")
      .select("*")
      .eq("type", "necessary");

    if (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
    console.log("Data retrieved from the equipment table:", data);

    // Check if data is empty
    if (data && data.length === 0) {
      alert("No equipment found.");
    } else {
      // Process the data as needed
      data.forEach((item) => {
        dataEquipment.value.push({
          id: item.sponsor_item_id,
          item_image: item.item_image,
          item_name: item.item_name,
          current_amount: item.current_amount,
          max_amount: item.max_amount,
        });
      });

      // Sort the data based on the gap (max_amount - current_amount) in descending order
      dataEquipment.value.sort((a, b) => {
        const gapA = a.max_amount - a.current_amount;
        const gapB = b.max_amount - b.current_amount;
        return gapB - gapA; // Sort in descending order
      });
    }
  } catch (error) {
    alert(error.message);
  }
});
</script>

<template>
  <div class="max-w-[1440px] mx-auto max-h-auto">
    <NavBar />
    <div class="sticky top-[4.8%] bg-white z-10 opacity-1">
      <Title />
      <CheckList :data="dataEquipment" />
    </div>
    <div class="z-1">
      <DisplayNecessary :data="dataEquipment" />
    </div>
  </div>
</template>
