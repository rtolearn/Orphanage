<template>
	<Dialog
		v-model:visible="visible"
		modal
		header="Payment Details"
		class="lg:w-[30rem] w-[25rem]"
		:closable="false"
	>
		<form class="card flex justify-center flex-col gap-4">
			<!-- Email -->
			<div class="flex flex-col gap-1">
				<label for="email" class="text-xs">Email Address</label>
				<InputText
					id="email"
					type="email"
					required
					v-model="email"
					placeholder="Enter your email"
					:invalid="!isEmailValid && showErrors"
					aria-describedby="email-error"
				/>
				<small
					id="email-error"
					class="text-red-500"
					v-if="!isEmailValid && showErrors"
					>Please enter a valid email.</small
				>
			</div>
			<!-- Credit card number -->
			<div class="flex flex-col gap-1">
				<label for="credit-card-num" class="text-xs">Credit Card Number</label>
				<InputMask
					id="credit-card-num"
					required
					v-model="creditCardNum"
					mask="9999 9999 9999 9999"
					placeholder="xxxx xxxx xxxx xxxx"
					slotChar="xxxx xxxx xxxx xxxx"
					:invalid="!isCreditCardValid && showErrors"
					aria-describedby="credit-card-num-error"
				/>
				<small
					id="credit-card-num-error"
					class="text-red-500"
					v-if="!isCreditCardValid && showErrors"
					>Please enter a valid credit card number.</small
				>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<!-- Expiry date -->
				<div class="flex flex-col gap-1">
					<label for="expiry-date" class="text-xs">Expiry Date</label>
					<InputMask
						id="expiry-date"
						required
						v-model="expiryDate"
						mask="99/99"
						placeholder="mm/yy"
						slotChar="mm/yy"
						:invalid="!isExpiryDateValid && showErrors"
						aria-describedby="credit-card-num-error"
					/>
					<small
						id="credit-card-num-error"
						class="text-red-500"
						v-if="!isExpiryDateValid && showErrors"
						>Please enter a valid expiry date.</small
					>
				</div>
				<!-- CVV -->
				<div class="flex flex-col gap-1">
					<label for="ccvv" class="text-xs">CVV</label>
					<InputMask
						id="cvv"
						required
						v-model="cvv"
						mask="999"
						placeholder="xxx"
						slotChar="xxx"
						:invalid="!isCvvValid && showErrors"
						aria-describedby="cvv-error"
					/>
					<small
						id="cvv-error"
						class="text-red-500"
						v-if="!isCvvValid && showErrors"
						>Please enter a valid CVV.</small
					>
				</div>
			</div>
		</form>

		<template #footer>
			<div class="flex justify-between w-full items-center">
				<div>
					Total: <span class="font-bold">RM{{ totalCost }}</span>
				</div>
				<Button
					type="button"
					label="Make payment"
					@click="validateForm"
				></Button>
			</div>
		</template>
	</Dialog>
</template>

<script>
import { ref, computed } from "vue";

export default {
	props: {
		totalCost: {
			type: Number,
			required: true,
		},
	},
	setup(props, { emit }) {
		const visible = ref(true);
		const email = ref("");
		const creditCardNum = ref("");
		const expiryDate = ref("");
		const cvv = ref("");
		const showErrors = ref(false);

		const isEmailValid = computed(() => {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailPattern.test(email.value);
		});

		const isCreditCardValid = computed(() => {
			return creditCardNum.value.length === 19; // 16 digits + 3 spaces
		});

		const isExpiryDateValid = computed(() => {
			const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
			return expiryPattern.test(expiryDate.value);
		});

		const isCvvValid = computed(() => {
			return cvv.value.length === 3;
		});

		const validateForm = () => {
			showErrors.value = true;

			if (
				isEmailValid.value &&
				isCreditCardValid.value &&
				isExpiryDateValid.value &&
				isCvvValid.value
			) {
				emit("payment-success");
			}
		};

		return {
			visible,
			email,
			creditCardNum,
			expiryDate,
			cvv,
			showErrors,
			isEmailValid,
			isCreditCardValid,
			isExpiryDateValid,
			isCvvValid,
			validateForm,
		};
	},
};
</script>

<style></style>
