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
import {updateData} from "../../services/profilesectionService"

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

const handleUpdate =() =>{
  updateData(validationSchema, props.updatedValue, props.imageURL, visible,emits)
}

</script>

<style scoped>
/* Add any required styles here */
</style>
