<template>
	<Dialog modal header="Payment Details" class="lg:w-[30rem] w-[25rem]">
		<form
			class="card flex justify-center flex-col gap-4"
			@submit.prevent="validateForm"
		>
			<!-- Email -->
			<div class="flex flex-col gap-1">
				<label for="email" class="text-xs">Email Address</label>
				<InputText
					id="email"
					type="email"
					required
					v-model="email"
					placeholder="Enter your email"
					:invalid="!!formErrors.email && showErrors"
					aria-describedby="email-error"
				/>
				<small
					id="email-error"
					class="text-red-500"
					v-if="formErrors.email && showErrors"
					>{{ formErrors.email }}</small
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
					:invalid="!!formErrors.creditCardNum && showErrors"
					aria-describedby="credit-card-num-error"
				/>
				<small
					id="credit-card-num-error"
					class="text-red-500"
					v-if="formErrors.creditCardNum && showErrors"
					>{{ formErrors.creditCardNum }}</small
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
						:invalid="!!formErrors.expiryDate && showErrors"
						aria-describedby="expiry-date-error"
					/>
					<small
						id="expiry-date-error"
						class="text-red-500"
						v-if="formErrors.expiryDate && showErrors"
						>{{ formErrors.expiryDate }}</small
					>
				</div>
				<!-- CVV -->
				<div class="flex flex-col gap-1">
					<label for="cvv" class="text-xs">CVV</label>
					<InputMask
						id="cvv"
						required
						v-model="cvv"
						mask="999"
						placeholder="xxx"
						slotChar="xxx"
						:invalid="!!formErrors.cvv && showErrors"
						aria-describedby="cvv-error"
					/>
					<small
						id="cvv-error"
						class="text-red-500"
						v-if="formErrors.cvv && showErrors"
						>{{ formErrors.cvv }}</small
					>
				</div>
			</div>
		</form>

		<template #footer>
			<div class="flex justify-between w-full items-center">
				<div>
					Total: <span class="font-bold">RM{{ props.totalCost }}</span>
				</div>
				<Button
					type="submit"
					label="Make payment"
					@click="validateForm"
				></Button>
			</div>
		</template>
	</Dialog>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import * as yup from "yup";

const emit = defineEmits(["payment-success"]);

const props = defineProps({
	totalCost: {
		type: Number,
		required: true,
	},
});

// Form state
const email = ref("");
const creditCardNum = ref("");
const expiryDate = ref("");
const cvv = ref("");
const showErrors = ref(false);

// Form validation schema using yup
const schema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	creditCardNum: yup
		.string()
		.matches(
			/^(\d{4} \d{4} \d{4} \d{4})$/,
			"Please enter a valid credit card number"
		)
		.required("Credit card number is required"),
	expiryDate: yup
		.string()
		.matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Please enter a valid expiry date")
		.required("Expiry date is required"),
	cvv: yup
		.string()
		.matches(/^\d{3}$/, "Please enter a valid CVV")
		.required("CVV is required"),
});

const formErrors = ref({
	email: "",
	creditCardNum: "",
	expiryDate: "",
	cvv: "",
});

const validateForm = async () => {
	showErrors.value = true;

	const formData = {
		email: email.value,
		creditCardNum: creditCardNum.value,
		expiryDate: expiryDate.value,
		cvv: cvv.value,
	};

	try {
		await schema.validate(formData, { abortEarly: false });
		emit("payment-success");
		resetForm();
	} catch (err) {
		if (err.inner) {
			// Clear previous errors
			formErrors.value = {
				email: "",
				creditCardNum: "",
				expiryDate: "",
				cvv: "",
			};

			// Set new errors
			err.inner.forEach((error) => {
				if (error.path in formErrors.value) {
					formErrors.value[error.path] = error.message;
				}
			});
		}
	}
};

const resetForm = () => {
	email.value = "";
	creditCardNum.value = "";
	expiryDate.value = "";
	cvv.value = "";
	formErrors.value = {
		email: "",
		creditCardNum: "",
		expiryDate: "",
		cvv: "",
	};
	showErrors.value = false;
};
</script>
