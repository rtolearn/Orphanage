<template>
  <NavBar />
  <SearchBar
    :cartItems="cartItems"
    @update:searchTerm="handleSearch"
    @payment-success="fetchItems"
    @update:cartItems="updateCartItems"
    ref="searchBarRef"
  />
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 bg-gray-50 p-6"
  >
    <MarketplaceItemCard
      v-for="item in filteredItems"
      :item="item"
      :key="item.item_id"
      @cart-updated="onCartUpdated"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import {
  fetchMarketplaceItems,
  fetchCartItems,
} from "@/services/marketplaceService.js";
import NavBar from "../HomePage/NavBar.vue";

import SearchBar from "@/components/Marketplace/SearchBar.vue";
import MarketplaceItemCard from "@/components/Marketplace/MarketplaceItemCard.vue";

const items = ref([]);
const cartItems = ref([]);
const searchTerm = ref("");

const filteredItems = computed(() =>
  items.value.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const fetchItems = async () => {
  try {
    items.value = await fetchMarketplaceItems();
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

const handleSearch = (term) => {
  searchTerm.value = term;
};

const getCartItems = async () => {
  try {
    cartItems.value = await fetchCartItems();
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

const updateCartItems = (updatedItems) => {
  cartItems.value = updatedItems;
};

const onCartUpdated = async () => {
  await getCartItems();
};

onMounted(() => {
  fetchItems();
  getCartItems();
});
</script>
