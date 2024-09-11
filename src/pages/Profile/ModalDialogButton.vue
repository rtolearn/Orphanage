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

const props = defineProps({
  updatedValue: {
    type: Object,
    required: true,
  },
});

//Decalre an emit
const emits = defineEmits(["visibility"]);
const visible = ref(false);

const store = useMessageStore();
const message = ref(store.statusLogIn);

//Function for handling cancel button
const handleCancel = () => {
  visible.value = false;
  console.log("cancal profile status: " + visible.value);
  emits("visibility", visible.value);
};

//Function for handling signing out
const handleSignOut = () => {
  store.clearStorage();
  store.setStatus(!message.value);
  visible.value = false; // Close the dialog
  emits("visibility", visible.value);
};
import { supabase } from "@/clients/supabaseClient";

const userId = ref(store.userId);
const imageUrl = ref("");

//Function for handling updation of data
const handleUpdate = async () => {
  visible.value = false;
  emits("visibility", visible.value);
  try {
    // Update user profile information in the database
    const { error } = await supabase
      .from("sign_up")
      .update({
        first_name: props.updatedValue.first_name,
        last_name: props.updatedValue.last_name,
        contact_number: props.updatedValue.contact_number,
        state: props.updatedValue.state,
        address: props.updatedValue.address,
        image_url: imageUrl, // Include image URL if it exists
      })
      .eq("user_id", userId.value);

    if (error) {
      throw error;
    }
    alert("Data updated");
  } catch (error) {
    alert(error.message);
  }
};
</script>
