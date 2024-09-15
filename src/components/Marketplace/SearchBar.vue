<template>
	<div
		class="sticky top-[62px] h-[62px] px-8 bg-white z-50 border-t-[1px] border-gray-200 flex items-center gap-4"
	>
		<Toast position="bottom-left" group="bl" />
		<!-- Search bar -->
		<IconField class="w-full">
			<InputIcon class="pi pi-search" />
			<InputText
				class="w-full"
				v-model="searchTerm"
				placeholder="Search"
				@input="onSearch"
			/>
		</IconField>
		<!-- Shopping cart icon -->
		<OverlayBadge
			@click="isCartVisible = true"
			size="small"
			:value="props.cartItems.length"
			class="cursor-pointer"
		>
			<i class="pi pi-shopping-cart" style="font-size: 1.5rem" />
		</OverlayBadge>
		<!-- Shopping cart modal -->
		<CartModal
			v-model:visible="isCartVisible"
			:cartItems="props.cartItems"
			:totalCost="totalCost"
			@update:cartItems="updateCartItems"
			@checkout="handleCheckout"
		/>
		<!-- Payment modal -->
		<PaymentModal
			v-model:visible="isPaymentVisible"
			:totalCost="totalCost"
			@payment-success="onPaymentSuccess"
		/>
	</div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps } from "vue";
import { useToast } from "primevue/usetoast";
import {
	updateMarketplaceItemQuantity,
	deleteCartItem,
} from "@/services/marketplaceService.js";
import PaymentModal from "./PaymentModal.vue";

const emit = defineEmits(["update:cartItems", "update:searchTerm"]);
const toast = useToast();

const props = defineProps({
	cartItems: {
		type: Array,
		required: true,
	},
});

const searchTerm = ref("");
const isCartVisible = ref(false);
const isPaymentVisible = ref(false);

const totalCost = computed(() => {
	return props.cartItems
		.reduce(
			(total, item) =>
				total + item.marketplace_items.unit_price * item.quantity,
			0
		)
		.toFixed(2);
});

const onSearch = () => {
	emit("update:searchTerm", searchTerm.value);
};

const handleCheckout = async () => {
	isCartVisible.value = false;
	isPaymentVisible.value = true;
};

const updateCartItems = (updatedItems) => {
	emit("update:cartItems", updatedItems);
};

const onPaymentSuccess = async () => {
	try {
		// Update marketplace_items stock after payment
		for (const item of props.cartItems) {
			const updatedQuantity =
				item.marketplace_items.quantity_available - item.quantity;
			await updateMarketplaceItemQuantity(
				item.marketplace_items.item_id,
				updatedQuantity
			);
			await deleteCartItem(item.cart_item_id);
		}

		emit("update:cartItems", []);

		isPaymentVisible.value = false;
		toast.add({
			severity: "success",
			summary: "Payment Successful",
			detail: "Your payment has been processed successfully",
			life: 3000,
			group: "bl",
		});
		emit("payment-success");
	} catch (error) {
		console.error("Error clearing cart:", error);
	}
};
</script>
