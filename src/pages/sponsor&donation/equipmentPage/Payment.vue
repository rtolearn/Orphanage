<template>
  <div class="mt-10 w-4/5 h-auto m-auto p-10 border solid border-black">
    <form
      class="card flex justify-center flex-col gap-4"
      @submit.prevent="validateForm"
    >
      <h1 class="font-bold text-lg">Payment Details</h1>
      <!-- Email -->
      <div class="flex flex-col gap-1">
        <label for="email" class="text-xs">Email Address</label>
        <InputText
          id="email"
          type="email"
          required
          v-model="fundValues.email"
          placeholder="Enter your email"
          :invalid="!!formErrors.email && fundValues.showErrors"
          aria-describedby="email-error"
        />
        <small
          id="email-error"
          class="text-red-500"
          v-if="formErrors.email && fundValues.showErrors"
          >{{ formErrors.email }}</small
        >
      </div>

      <!-- Amount of fund -->
      <div class="flex flex-col gap-1">
        <label for="fund" class="text-xs">Fund</label>
        <InputText
          id="fund"
          type="number"
          required
          v-model="fundValues.fund"
          placeholder="Enter any amount of money"
          :invalid="!!formErrors.fund && fundValues.showErrors"
          aria-describedby="fund-error"
        />
        <small
          id="fund-error"
          class="text-red-500"
          v-if="formErrors.fund && fundValues.showErrors"
          >{{ formErrors.fund }}</small
        >
      </div>
      <!-- Credit card number -->
      <div class="flex flex-col gap-1">
        <label for="credit-card-num" class="text-xs">Credit Card Number</label>
        <InputMask
          id="credit-card-num"
          required
          v-model="fundValues.creditCardNum"
          mask="9999 9999 9999 9999"
          placeholder="xxxx xxxx xxxx xxxx"
          slotChar="xxxx xxxx xxxx xxxx"
          :invalid="!!formErrors.creditCardNum && fundValues.showErrors"
          aria-describedby="credit-card-num-error"
        />
        <small
          id="credit-card-num-error"
          class="text-red-500"
          v-if="formErrors.creditCardNum && fundValues.showErrors"
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
            v-model="fundValues.expiryDate"
            mask="99/99"
            placeholder="mm/yy"
            slotChar="mm/yy"
            :invalid="!!formErrors.expiryDate && fundValues.showErrors"
            aria-describedby="expiry-date-error"
          />
          <small
            id="expiry-date-error"
            class="text-red-500"
            v-if="formErrors.expiryDate && fundValues.showErrors"
            >{{ formErrors.expiryDate }}</small
          >
        </div>
        <!-- CVV -->
        <div class="flex flex-col gap-1">
          <label for="cvv" class="text-xs">CVV</label>
          <InputMask
            id="cvv"
            required
            v-model="fundValues.cvv"
            mask="999"
            placeholder="xxx"
            slotChar="xxx"
            :invalid="!!formErrors.cvv && fundValues.showErrors"
            aria-describedby="cvv-error"
          />
          <small
            id="cvv-error"
            class="text-red-500"
            v-if="formErrors.cvv && fundValues.showErrors"
            >{{ formErrors.cvv }}</small
          >
        </div>
      </div>
    </form>

    <div class="flex justify-between w-full items-center mt-10">
      <Button label="Back" @click="goBack"></Button>

      <Button
        type="submit"
        label="Confirm funding"
        @click="validateForm"
      ></Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import * as yup from "yup";

// Form state
const fundValues = ref({
  email: "",
  fund: 0,
  creditCardNum: "",
  expiryDate: "",
  cvv: "",
  showErrors: false,
});

// Form validation schema using yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  fund: yup
    .number()
    .required("Fund is required")
    .positive("Fund must be greater than 0")
    .min(1, "Fund must be at least 1"),
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
  fund: "",
  creditCardNum: "",
  expiryDate: "",
  cvv: "",
});

const validateForm = async () => {
  fundValues.value.showErrors = true;
  try {
    await schema.validate(fundValues.value, { abortEarly: false });
    //Submit the data if the inputs have no any errors at all
    dataSubmissionFunction();
    resetForm();
  } catch (err) {
    if (err.inner) {
      // Clear previous errors
      formErrors.value = {
        email: "",
        creditCardNum: "",
        expiryDate: "",
        cvv: "",
        fund: "",
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

import { supabase } from "@/clients/supabaseClient";
const router = useRouter();

// Function to go back to the previous page
const goBack = () => {
  router.back();
};
const route = useRoute();

const itemId = route.query.id;
const tableName = route.query.table_name;
console.log("Item id:" + itemId + "tableName: " + tableName);
//Get the user Id first
const userId = ref("");
const dataSubmissionFunction = async () => {
  try {
    const {
      data: { user },
      error: getIdError,
    } = await supabase.auth.getUser();
    if (getIdError) {
      throw getIdError;
    } else {
      userId.value = user.id;
    }
  } catch (error) {
    alert(error.message);
  }

  // Upload the data into the table named adoption_program
  try {
    const { error: insertFundDataError } = await supabase
      .from(`${tableName}`)
      .insert([
        {
          amount: fundValues.value.fund,
          sponsor_item_id: itemId,
          user_id: userId.value,
        },
      ])
      .select();

    if (insertFundDataError) {
      throw insertFundDataError;
    } else {
      console.log("Calling the updateEquipment function......")
      // After uploading the data into the sponsor_records, we just to update the current value in the sponsor_items as well
      updateEquipment();
      router.push({ path: "./sponsor&donation" });
    }
  } catch (error) {
    alert(error.message);
  }
};
//Function for updating the current_amount of the specific item
const updateEquipment = async () => {
    try {
        const { data, error: fetchError } = await supabase
            .from("sponsor_items")
            .select("current_amount")
            .eq("sponsor_item_id", itemId)
            .single();

        if (fetchError) {
            console.error("Fetch Error:", fetchError);
            throw fetchError;
        }

        console.log("Current Amount Fetched:", data.current_amount);
        console.log("Fund Value:", fundValues.value.fund);

        const fundValue = Number(fundValues.value.fund);
        const newAmount = data.current_amount + fundValue;
        console.log("New Amount to Update:", newAmount);

        const { error: updateEquipmentError } = await supabase
            .from("sponsor_items")
            .update({ current_amount: newAmount })
            .eq("sponsor_item_id", itemId);

        if (updateEquipmentError) {
            console.error("Update Error:", updateEquipmentError);
            throw updateEquipmentError;
        } else {
            console.log("Current Amount Updated Successfully");
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
};


//Function to reset the entire form
const resetForm = () => {
  fundValues.value.email = "";
  fundValues.value.creditCardNum = "";
  fundValues.value.expiryDate = "";
  fundValues.value.cvv = "";
  fundValues.value.showErrors = false;
  formErrors.value = {
    email: "",
    fund: "",
    creditCardNum: "",
    expiryDate: "",
    cvv: "",
  };
};
</script>
