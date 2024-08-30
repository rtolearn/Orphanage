<template>
	<NavBar />
	<SearchBar @update:searchTerm="handleSearch" ref="searchBarRef" />
	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 bg-gray-50 p-6"
	>
		<ItemCard
			v-for="item in filteredItems"
			:item="item"
			:key="item.id"
			@cart-updated="onCartUpdated"
		/>
	</div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import api from "@/services/api";
import NavBar from "@/pages/homePage/NavBar.vue";
import SearchBar from "./SearchBar.vue";
import ItemCard from "./ItemCard.vue";

export default {
	components: {
		NavBar,
		SearchBar,
		ItemCard,
	},
	setup() {
		const items = ref([]);
		const searchTerm = ref("");
		const searchBarRef = ref(null);

		const fetchItems = async () => {
			try {
				const response = await api.getMarketplaceItems();
				items.value = response.data;
			} catch (error) {
				console.error("Error fetching items:", error);
			}
		};

		const filteredItems = computed(() => {
			return items.value.filter((item) =>
				item.itemName.toLowerCase().includes(searchTerm.value.toLowerCase())
			);
		});

		const handleSearch = (term) => {
			searchTerm.value = term;
		};

		const onCartUpdated = () => {
			if (searchBarRef.value) {
				searchBarRef.value.fetchCartItems();
			}
		};

		onMounted(fetchItems);

		return {
			items,
			filteredItems,
			handleSearch,
			onCartUpdated,
			searchBarRef,
		};
	},
};
</script>

<style></style>
