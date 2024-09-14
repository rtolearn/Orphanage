<template>
	<Dialog
		modal
		header="Shopping Cart"
		class="bg-gray-50 lg:w-[30rem] w-[25rem]"
	>
		<div class="flex flex-col gap-4 overflow-auto">
			<CartItemCard
				v-for="item in props.cartItems"
				:item="item"
				:key="item.cart_item_id"
				@quantity-changed="onQuantityChanged"
				@item-deleted="onItemDeleted"
			/>
		</div>
		<template #footer>
			<div class="pt-4 flex justify-between w-full items-center">
				<div>
					Total: <span class="font-bold">RM{{ props.totalCost }}</span>
				</div>
				<Button
					type="button"
					label="Checkout"
					@click="handleCheckout"
					:disabled="cartItems.length === 0"
				></Button>
			</div>
		</template>
	</Dialog>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import CartItemCard from "./CartItemCard.vue";

const emit = defineEmits(["update:cartItems", "checkout"]);

const props = defineProps({
	cartItems: {
		type: Array,
		required: true,
	},
	totalCost: {
		type: Number,
		required: true,
	},
});

const onQuantityChanged = async (itemId, updatedQuantity) => {
	const updatedCartItems = [...props.cartItems];
	const itemIndex = updatedCartItems.findIndex(
		(item) => item.cart_item_id === itemId
	);
	if (itemIndex !== -1) {
		updatedCartItems[itemIndex].quantity = updatedQuantity;
		emit("update:cartItems", updatedCartItems);
	}
};

const onItemDeleted = async (itemId) => {
	const updatedCartItems = props.cartItems.filter(
		(item) => item.cart_item_id !== itemId
	);
	emit("update:cartItems", updatedCartItems);
};

const handleCheckout = async () => {
	emit("checkout");
};
</script>
