<template>
	<div class="bg-white rounded-3xl flex gap-4 p-2">
		<Toast />
		<div class="rounded-2xl overflow-hidden w-[30%]">
			<img :src="cartItem.itemImage" alt="" />
		</div>
		<div class="flex flex-col grow justify-between py-2">
			<div class="flex justify-between">
				<h3 class="font-semibold">{{ cartItem.itemName }}</h3>
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
					<p class="font-medium text-sm">RM{{ cartItem.itemUnitPrice }}</p>
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

<script>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import api from "@/services/api";

export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	setup(props, { emit }) {
		const cartItem = ref(props.item);

		const toast = useToast();

		const increaseQuantity = async () => {
			if (cartItem.value.quantity === cartItem.value.quantityAvailable) {
				toast.add({
					severity: "error",
					summary: "Maximum Quantity Reached",
					detail: "You have reached the maximum quantity available",
					life: 3000,
				});
			} else {
				const updatedQuantity = cartItem.value.quantity + 1;
				const updatedCartItem = {
					id: cartItem.value.id,
					quantity: updatedQuantity,
				};
				cartItem.value = {
					...cartItem.value,
					quantity: updatedQuantity,
				};
				await api.updateCartItem(updatedCartItem);
				emit("quantity-changed", updatedCartItem);
			}
		};

		const decreaseQuantity = async () => {
			if (cartItem.value.quantity === 1) {
				toast.add({
					severity: "error",
					summary: "Minimum Quantity Reached",
					detail: "You have reached the minimum quantity available",
					life: 3000,
				});
			} else {
				const updatedQuantity = cartItem.value.quantity - 1;
				const updatedCartItem = {
					...cartItem.value,
					quantity: updatedQuantity,
				};
				cartItem.value = updatedCartItem;
				await api.updateCartItem(updatedCartItem);
				emit("quantity-changed", updatedCartItem);
			}
		};

		const deleteItem = async () => {
			await api.deleteCartItem(cartItem.value.id);
			emit("item-deleted", cartItem.value);
		};

		return {
			increaseQuantity,
			decreaseQuantity,
			cartItem,
			deleteItem,
		};
	},
};
</script>
