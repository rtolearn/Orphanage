<template>
  <!-- Input Field -->
  <div>
    <div
      v-for="(input, index) in inputField"
      :key="index"
      class="sm:flex items-center gap-4 mb-4"
    >
      <label :for="input.id" class="font-semibold w-1/2 block">{{
        input.title
      }}</label>
      <InputText
        v-model="updatedValue[input.id]"
        :id="input.id"
        class="w-full"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script setup>
import { supabase } from "@/clients/supabaseClient";
import { reactive, watch, onMounted } from "vue";
//Declare an object to store all the updated value
const updatedValue = reactive({
  first_name: "",
  last_name: "",
  contact_number: "",
  state: "",
  address: "",
});
//Object for input field
const inputField = [
  { title: "First Name", id: "first_name" },
  { title: "Last Name", id: "last_name" },
  { title: "Contact Number", id: "contact_number" },
  { title: "State", id: "state" },
  { title: "Address", id: "address" },
];

const emit = defineEmits(["valueFileInput"]);
// Watch for changes in the updatedValue object
watch(
  updatedValue,
  (newValue) => {
    console.log(newValue);
    emit("valueFileInput", newValue);
  },
  { deep: true }
);

// Display all the related user's information
onMounted(async () => {
  try {
    // Get the userId
    const { data: {user}, error: userIdError } = await supabase.auth.getUser();
    if (userIdError) {
      alert("User is not authenticated");
    }
    //Retrieve the data
    const { data, error } = await supabase
      .from("sign_up")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (error) {
      alert(error.message);
    } else {
      updatedValue.first_name = data.first_name;
      updatedValue.last_name = data.last_name;
      updatedValue.contact_number = data.contact_number;
      updatedValue.state = data.state;
      updatedValue.address = data.address;
    }
  } catch (error) {
    alert(error.message);
  }
});
</script>
