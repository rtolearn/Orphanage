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
			:value="detailedCartItems.length"
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
					v-for="item in detailedCartItems"
					:item="item"
					:key="item.id"
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
						:disabled="detailedCartItems.length === 0"
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

export default {
	components: { CartItem, PaymentModal },
	setup(props, { emit }) {
		const searchTerm = ref("");
		const isCartVisible = ref(false);
		const isPaymentVisible = ref(false);
		const cartItems = ref([]);
		const detailedCartItems = ref([]);
		const toast = useToast();

		const onSearch = () => {
			emit("update:searchTerm", searchTerm.value);
		};

		const fetchCartItems = async () => {
			try {
				const items = await api.getCartItems();
				cartItems.value = items;

				const detailedItems = await Promise.all(
					cartItems.value.map(async (cartItem) => {
						const response = await api.getMarketplaceItem(cartItem.id);
						return {
							...response.data,
							quantity: cartItem.quantity,
						};
					})
				);

				detailedCartItems.value = detailedItems;
			} catch (error) {
				console.error("Error fetching cart items:", error);
			}
		};

		const totalCost = computed(() => {
			return detailedCartItems.value
				.reduce((total, item) => total + item.itemUnitPrice * item.quantity, 0)
				.toFixed(2);
		});

		const onQuantityChanged = (updatedItem) => {
			const itemIndex = detailedCartItems.value.findIndex(
				(item) => item.id === updatedItem.id
			);

			if (itemIndex !== -1) {
				detailedCartItems.value[itemIndex].quantity = updatedItem.quantity;
			}
		};

		const onItemDeleted = (deletedItem) => {
			const itemIndex = detailedCartItems.value.findIndex(
				(item) => item.id === deletedItem.id
			);

			if (itemIndex !== -1) {
				detailedCartItems.value.splice(itemIndex, 1);
			}
		};

		const handleCheckout = () => {
			isCartVisible.value = false;
			isPaymentVisible.value = true;
		};

		const onPaymentSuccess = async () => {
			try {
				for (const item of detailedCartItems.value) {
					const { quantity, ...updatedItem } = {
						...item,
						quantityAvailable: item.quantityAvailable - item.quantity,
					};
					await api.updateMarketplaceItem(updatedItem);
				}
				await api.clearCart();
				fetchCartItems();
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

		onMounted(fetchCartItems);

		return {
			searchTerm,
			onSearch,
			isCartVisible,
			detailedCartItems,
			totalCost,
			onQuantityChanged,
			onItemDeleted,
			fetchCartItems,
			handleCheckout,
			isPaymentVisible,
			onPaymentSuccess,
		};
	},
};
</script>

<style></style>
