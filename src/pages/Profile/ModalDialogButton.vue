<template>
  <div class="flex justify-between gap-2">
    <Button
      type="button"
      label="Sign Out"
      severity="danger"
      @click="handleSignOut"
    ></Button>
    <div class="flex gap-3">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="handleCancel"
      ></Button>
      <Button
        type="button"
        label="Update"
        severity="primary"
        @click="handleUpdate"
      ></Button>
    </div>
  </div>
</template>

<script setup>
import { useMessageStore } from "@/store/messageStore";
import { ref } from "vue";
import * as yup from "yup";
import { supabase } from "@/clients/supabaseClient";

// Define your validation schema
const validationSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  contact_number: yup
    .string()
    .required("Contact number is required")
    .matches(/^\d{11}$/, "Contact number must be 11 digits"),
  state: yup.string().required("State is required"),
  address: yup.string().required("Address is required"),
});

// Define props
const props = defineProps({
  updatedValue: {
    type: Object,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

// Declare emits
const emits = defineEmits(["visibility"]);
const visible = ref(false);

const store = useMessageStore();
const message = ref(store.statusLogIn);
const userId = ref(store.userId);

// Function for handling cancel button
const handleCancel = () => {
  visible.value = false;
  emits("visibility", visible.value);
};

// Function for handling signing out
const handleSignOut = () => {
  store.clearStorage();
  store.setStatus(!message.value);
  visible.value = false; // Close the dialog
  emits("visibility", visible.value);
};

// Function for handling the update of data
const handleUpdate = async () => {
  try {
    // Validate the updatedValue
    await validationSchema.validate(props.updatedValue, { abortEarly: false });
console.log("imge Url pass into the button component: " + props.imageURL)
    // Update user's data
    const { error } = await supabase
      .from("users")
      .update({
        first_name: props.updatedValue.first_name,
        last_name: props.updatedValue.last_name,
        contact_number: props.updatedValue.contact_number,
        state: props.updatedValue.state,
        address: props.updatedValue.address,
        image_url: props.imageURL, // Include image URL if it exists
      })
      .eq("user_id", userId.value);

    if (error) {
      throw error;
    }
    alert("Data updated");

    // Close the modal dialog
    visible.value = false;
    emits("visibility", visible.value);
  } catch (err) {
    // Handle validation errors
    if (err.errors) {
      alert(err.errors.join(", ")); // Show all validation errors
    } else {
      alert("Error updating data: " + err.message);
    }
  }
};
</script>

<style scoped>
/* Add any required styles here */
</style>
