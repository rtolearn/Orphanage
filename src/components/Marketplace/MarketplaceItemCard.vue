<template>
	<div class="bg-white rounded-3xl p-5 flex flex-col gap-2">
		<Toast position="bottom-left" group="bl" />
		<div class="rounded-2xl overflow-hidden">
			<img :src="item.item_image_url" alt="" />
		</div>
		<div class="flex flex-col gap-3">
			<h3 class="font-semibold">{{ item.item_name }}</h3>
			<div class="flex justify-between items-center">
				<p class="text-gray-400 text-sm">
					<span class="font-medium">Qty: </span>{{ item.quantity_available }}
				</p>
				<p class="font-bold text-xl">RM{{ item.unit_price }}</p>
			</div>
			<div class="flex justify-between items-center">
				<div class="flex bg-gray-50 rounded-full py-1 items-center">
					<button @click="decreaseQuantity" class="px-4">-</button>
					<div class="px-2 text-sm font-semibold">{{ quantity }}</div>
					<button @click="increaseQuantity" class="px-4">+</button>
				</div>
				<Button label="Add to cart" @click="addToCart" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useToast } from "primevue/usetoast";
import { addCartItem } from "@/services/marketplaceService";

const toast = useToast();
const emit = defineEmits(["cart-updated"]);

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});

const quantity = ref(1);

const increaseQuantity = () => {
	if (quantity.value === props.item.quantity_available) {
		toast.add({
			severity: "error",
			summary: "Maximum Quantity Reached",
			detail: "You have reached the maximum quantity available",
			life: 3000,
			group: "bl",
		});
	} else {
		quantity.value++;
	}
};

const decreaseQuantity = () => {
	if (quantity.value === 1) {
		toast.add({
			severity: "error",
			summary: "Minimum Quantity Reached",
			detail: "You have reached the minimum quantity available",
			life: 3000,
			group: "bl",
		});
	} else {
		quantity.value--;
	}
};

const addToCart = async () => {
	try {
		const response = await addCartItem(props.item.item_id, quantity.value);

		if (response && response.success) {
			toast.add({
				severity: "success",
				summary: "Item Added to Cart",
				detail: "The item has been added to cart",
				life: 3000,
				group: "bl",
			});
			emit("cart-updated");
		}
	} catch (error) {
		console.error("Error adding item to cart:", error);
		toast.add({
			severity: "error",
			summary: "Error Adding Item to Cart",
			detail:
				error.message || "An error occurred while adding the item to cart",
			life: 3000,
			group: "bl",
		});
		return;
	}
};
</script>
