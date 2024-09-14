<template>
	<div class="bg-white rounded-3xl flex gap-4 p-2">
		<Toast position="bottom-left" group="bl" />
		<div class="rounded-2xl overflow-hidden w-[30%]">
			<img :src="cartItem.marketplace_items.item_image_url" alt="" />
		</div>
		<div class="flex flex-col grow justify-between py-2">
			<div class="flex justify-between">
				<h3 class="font-semibold">
					{{ cartItem.marketplace_items.item_name }}
				</h3>
				<Button
					icon="pi pi-trash"
					severity="danger"
					text
					rounded
					aria-label="Delete"
					@click="deleteItem"
				/>
			</div>
			<div class="flex justify-between">
				<div class="flex justify-between items-center">
					<p class="font-medium text-sm">
						RM{{ cartItem.marketplace_items.unit_price }}
					</p>
				</div>
				<div class="flex justify-between items-center">
					<div class="flex bg-gray-50 rounded-full py-1 items-center">
						<button @click="decreaseQuantity" class="px-4">-</button>
						<div class="px-2 text-sm font-semibold">
							{{ cartItem.quantity }}
						</div>
						<button @click="increaseQuantity" class="px-4">+</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useToast } from "primevue/usetoast";
import {
	updateCartItemQuantity,
	deleteCartItem,
} from "@/services/marketplaceService.js";

const emit = defineEmits(["quantity-changed", "item-deleted"]);
const toast = useToast();

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});

const cartItem = ref(props.item);

const increaseQuantity = async () => {
	if (
		cartItem.value.quantity ===
		cartItem.value.marketplace_items.quantity_available
	) {
		toast.add({
			severity: "error",
			summary: "Maximum Quantity Reached",
			detail: "You have reached the maximum quantity available",
			life: 3000,
			group: "bl",
		});
	} else {
		const updatedQuantity = cartItem.value.quantity + 1;
		cartItem.value = {
			...cartItem.value,
			quantity: updatedQuantity,
		};
		try {
			await updateCartItemQuantity(
				cartItem.value.cart_item_id,
				updatedQuantity
			);
		} catch (error) {
			console.error("Error updating cart item quantity:", error);
		}
		emit("quantity-changed", cartItem.value.cart_item_id, updatedQuantity);
	}
};

const decreaseQuantity = async () => {
	if (cartItem.value.quantity === 1) {
		toast.add({
			severity: "error",
			summary: "Minimum Quantity Reached",
			detail: "You have reached the minimum quantity available",
			life: 3000,
			group: "bl",
		});
	} else {
		const updatedQuantity = cartItem.value.quantity - 1;
		cartItem.value = {
			...cartItem.value,
			quantity: updatedQuantity,
		};
		try {
			await updateCartItemQuantity(
				cartItem.value.cart_item_id,
				updatedQuantity
			);
		} catch (error) {
			console.error("Error updating cart item quantity:", error);
		}
		emit("quantity-changed", cartItem.value.cart_item_id, updatedQuantity);
	}
};

const deleteItem = async () => {
	try {
		await deleteCartItem(cartItem.value.cart_item_id);
		toast.add({
			severity: "success",
			summary: "Item Removed",
			detail: "Item has been removed from your cart",
			life: 3000,
			group: "bl",
		});
		emit("item-deleted", cartItem.value.cart_item_id);
	} catch (error) {
		console.error("Error deleting cart item:", error);
	}
};
</script>
