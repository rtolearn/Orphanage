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
		<!-- Shopping cart -->
		<OverlayBadge
			@click="isCartVisible = true"
			size="small"
			:value="cartItems.length"
			class="cursor-pointer"
		>
			<i class="pi pi-shopping-cart" style="font-size: 1.5rem" />
		</OverlayBadge>
		<!-- Shopping cart modal -->
		<Dialog
			v-model:visible="isCartVisible"
			modal
			header="Shopping Cart"
			class="bg-gray-50 lg:w-[30rem] w-[25rem]"
		>
			<div class="flex flex-col gap-4 overflow-auto">
				<CartItem
					v-for="item in cartItems"
					:item="item"
					:key="item.cart_item_id"
					@quantity-changed="onQuantityChanged"
					@item-deleted="onItemDeleted"
				/>
			</div>
			<template #footer>
				<div class="pt-4 flex justify-between w-full items-center">
					<div>
						Total: <span class="font-bold">RM{{ totalCost }}</span>
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
		<!-- Payment modal -->
		<PaymentModal
			v-if="isPaymentVisible"
			:totalCost="totalCost"
			@payment-success="onPaymentSuccess"
		/>
	</div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import api from "@/services/api";
import CartItem from "./CartItem.vue";
import PaymentModal from "./PaymentModal.vue";
import { useToast } from "primevue/usetoast";
import { fetchCartItems } from "@/services/marketplaceService.js";

export default {
	components: { CartItem, PaymentModal },
	setup(props, { emit }) {
		const searchTerm = ref("");
		const isCartVisible = ref(false);
		const isPaymentVisible = ref(false);
		const cartItems = ref([]);
		const toast = useToast();

		const onSearch = () => {
			emit("update:searchTerm", searchTerm.value);
		};

		// Fetch cart items (includes marketplace_items details)
		const getCartItems = async () => {
			try {
				cartItems.value = await fetchCartItems();
				console.log("Cart items:", cartItems.value);
			} catch (error) {
				console.error("Error fetching cart items:", error);
			}
		};

		// Calculate total cost from cart items directly
		const totalCost = computed(() => {
			return cartItems.value
				.reduce(
					(total, item) =>
						total + item.marketplace_items.unit_price * item.quantity,
					0
				)
				.toFixed(2);
		});

		// Handle quantity changes for cart items
		const onQuantityChanged = async (updatedItem) => {
			const itemIndex = cartItems.value.findIndex(
				(item) => item.cart_item_id === updatedItem.cart_item_id
			);
			if (itemIndex !== -1) {
				cartItems.value[itemIndex].quantity = updatedItem.quantity;

				// Optionally, update the cart item in the database
				try {
					await api.updateCartItemQuantity(
						updatedItem.cart_item_id,
						updatedItem.quantity
					);
					toast.add({
						severity: "success",
						summary: "Quantity Updated",
						detail: "Item quantity has been updated",
						life: 3000,
						group: "bl",
					});
				} catch (error) {
					console.error("Error updating cart item:", error);
				}
			}
		};

		// Handle item deletion
		const onItemDeleted = async (deletedItem) => {
			const itemIndex = cartItems.value.findIndex(
				(item) => item.cart_item_id === deletedItem.cart_item_id
			);
			if (itemIndex !== -1) {
				// Remove from the local array
				cartItems.value.splice(itemIndex, 1);

				// Optionally, remove the item from the cart in the database
				try {
					await api.deleteCartItem(deletedItem.cart_item_id);
					toast.add({
						severity: "success",
						summary: "Item Removed",
						detail: "Item has been removed from your cart",
						life: 3000,
						group: "bl",
					});
				} catch (error) {
					console.error("Error deleting cart item:", error);
				}
			}
		};

		// Handle checkout process
		const handleCheckout = async () => {
			isCartVisible.value = false;
			isPaymentVisible.value = true;
		};

		const onPaymentSuccess = async () => {
			try {
				// Update marketplace_items stock after payment
				for (const item of cartItems.value) {
					await api.updateMarketplaceItem({
						item_id: item.item_id,
						quantity_available:
							item.marketplace_items.quantity_available - item.quantity,
					});
				}
				// Clear the cart
				await api.clearCart();
				getCartItems(); // Reload cart items

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

		// Fetch cart items when component mounts
		onMounted(getCartItems);

		return {
			searchTerm,
			onSearch,
			isCartVisible,
			cartItems,
			totalCost,
			onQuantityChanged,
			onItemDeleted,
			getCartItems,
			handleCheckout,
			isPaymentVisible,
			onPaymentSuccess,
		};
	},
};
</script>
