<template>
  <!-- Create another input for the Searching Bar -->

  <div class="flex items-center justify-center m-5">
    <span
      class="pi pi-search color-black text-lg mr-2 border- border-solid border-black"
    >
    </span>
    <InputText v-model="value1" placeholder="Search" class="p-5" />
  </div>

  <!-- 
    This is ideal way to do it, but then I don't know how to center it.
    <IconField class="flex items-center justify-center m-5 ">
        <InputIcon class="pi pi-search slelf-center" />
        <InputText v-model="value1" placeholder="Search" />
    </IconField> 
    -->

  <!-- Display all the items in a loop -->
  <div>
    <ul class="flex flex-wrap justify-center items-start">
      <ol
        v-for="product in products"
        :key="product.id"
        class="w-auto h-auto m-10 p-2.5 border border-solid border-black"
      >
        <div class="relative h-[350px] sm:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            class="absolute inset-0 h-full w-full object-cover opacity-100 hover:opacity-0 rounded-lg"
          />

          <img
            :src="product.image"
            alt=""
            class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div class="relative bg-white pt-3">
          <h3 class="text-xl text-gray-700">
            {{ product.description }}
          </h3>
          <div class="flex justify-between items-center">
            <p class="mt-1.5 tracking-wide text-gray-900 text-2xl">
              RM {{ product.price }}
            </p>
            <p class="mt-1.5 tracking-wide text-gray-900">
              Qty: {{ product.quantity }}
            </p>
          </div>

          <!-- <button class="">
            Purchase
          </button> -->
          <div>
            <Button
              label="Purchase"
              @click="visible = true"
              class="w-full bg-yellow-300 rounded-lg mt-5 p-2"
            >
              Purchase
            </Button>

            <Dialog
              v-model:visible="visible"
              modal
              header="Details"
              :style="{ width: '25rem' }"
            >
              <span class="text-surface-500 dark:text-surface-400 block mb-8 text-2xl"
                >{{ product.name }}</span
              >
              <!-- <div class="flex items-center gap-4 mb-4">
                <h1 for="username" class="font-semibold w-24">Product:</h1>
                <p></p>
              </div> -->
              <div class="flex justify-start items-start gap-4 mb-4">
                <h1 for="Description" class="font-semibold w-24">Decription:</h1>
                <p>{{ product.description }}</p>
              </div>
              <div class="flex  justify-start items-start gap-4 mb-4">
                <h1 for="username" class="font-semibold w-24">Quantity:</h1>
                <p>{{ product.quantity }}</p>
              </div>
              <div class="flex items-center gap-4 mb-4">
                <h1 for="username" class="font-semibold w-24">Total:</h1>
                <p>{{ total }}</p>
              </div>

              <div class="flex items-center gap-4 mb-8">
                <label for="quantity" class="font-semibold w-24"
                  >Add To Cart</label
                >
                <InputNumber
                  v-model="quantityProduct"
                  inputId="integeronly"
                  fluid
                />
              </div>
              <div class="flex justify-end items-center gap-2">
                <Button
                  type="button"
                  label="Cancel"
                  severity="secondary"
                  @click="visible = false"
                ></Button>
                <Button
                  type="button"
                  label="Add to Cart"
                  @click="visible = false"
                ></Button>
              </div>
            </Dialog>
          </div>
        </div>
      </ol>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
// import IconField from 'primevue/iconfield';
// import InputIcon from 'primevue/inputicon';

const visible = ref(false);
const quantityProduct = ref(0);
const total = computed(() => {
  return quantityProduct.value * 2;
});
const products = ref([
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
]);
</script>
