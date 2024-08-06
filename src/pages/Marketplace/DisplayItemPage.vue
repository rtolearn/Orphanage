<template>
  <!-- Create another input for the Searching Bar -->
<!-- <NavigationBar /> -->
  <div class="flex items-center justify-between m-auto block p-10 w-4/5 h-auto">
    
    <div class=''>
      <router-link to="/">
        <span class="pi pi-home"></span>
      </router-link>
      
    </div>
    <!-- why the margin can only be 20 but not more than that -->
    <div class="flex items-center justify-between">
    <span class="absolute pi pi-search color-black  p-1">
    </span>
    <InputText v-model="searchQuery" placeholder="   Search..." class="w-[20rem]" size="1" />
      
    </div>
   
    <div>
      <router-link to="/purchase">
        <span class="pi pi-cart-minus"></span>
      </router-link>
      
    </div>
  </div>

  <!-- Display all the items in a loop -->
  <div class="w-full h-auto">
    <ul class="flex flex-wrap justify-center items-start">
      <ol
        v-for="product in filteredProducts"
        :key="product.id"
        class="w-2/5 h-auto m-2.5 p-1 border border-solid border-black"
      >
        <div class="relative ">
          <!-- <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            class="relative inset-0 h-full w-full object-cover opacity-100 hover:opacity-0 rounded-lg"
          /> -->
          <img
            :src="product.image"
            alt=""
            class="relative inset-0 h-full w-full object-cover opacity-100"
          />
        </div>

        <div class="relative bg-white p-2">
          <h3 class="text-xs sm:text-xl text-gray-900 text-ellipsis">
            {{ product.description }}
          </h3>
          <div class="flex justify-between items-center mt-5">
            <p class="m-1.25 text-gray-700 text-xs sm:text-xl">
              RM{{ product.price }}
            </p>
            <p class="m-1.25 text-gray-700 text-xs sm:text-xl">
              Qty:{{ product.quantity }}
            </p>
          </div>

          <div>
            <Button
              v-model="product.value"
              label="Purchase"
              @click="visible = true; saveItemPrice(product.price)"
              class="w-full h-auto bg-yellow-300 rounded-lg mt-2 text-xs sm:text-xl"
            >
              Purchase
            </Button>
            <!--Once the user click the purhcase button, there will be another small dialog for confirmation of details of item purchased-->
            <Dialog
              v-model:visible="visible"
              modal
              header="Details"
              class="w-4/5 h-auto"
              
            >
              <span
                class="text-surface-500 dark:text-surface-400 block mb-8 text-2xl"
                >{{ product.name }}</span
              >
              <div class="flex justify-start items-start gap-4 mb-4">
                <h1 for="Description" class="font-semibold w-24">
                  Decription:
                </h1>
                <p>{{ product.description }}</p>
              </div>
              <div class="flex justify-start items-start gap-4 mb-4">
                <h1 for="product_price" class="font-semibold w-24">Price Per Unit:</h1>
                <p>RM{{ product.price}}</p>
              </div>
              <div class="flex justify-start items-start gap-4 mb-4">
                <h1 for="product_quantity" class="font-semibold w-24">Quantity Available:</h1>
                <p>{{ product.quantity - quantityProduct}}</p>
              </div>
              <div class="flex items-center gap-4 mb-4">
                <h1 for="total_price" class="font-semibold w-24">Total Price:</h1>
                <p>RM{{ total }}</p>
              </div>

              <div class="flex items-center gap-4 mb-8">
                <label for="quantity" class="font-semibold w-24"
                  >Quantity to buy: </label
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
const searchQuery = ref('')
const currentItemPrice = ref(0);
const visible = ref(false);
const quantityProduct = ref(0);

const total = computed(() => {
  return quantityProduct.value * currentItemPrice.value;
});

const saveItemPrice = (itemPrice) => {
    currentItemPrice.value = itemPrice;
}
// Filter the item
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
// Product List
const products = ref([
  {
    id: "1000",
    name: "harith",
    description: "A stylish bamboo watch with a minimalist design.",
    image:
      "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 65.0,
    quantity: 24,
  },
  {
    id: "1000",
    name: "Bamboo Watch",
    description: "ellooooooo",
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
