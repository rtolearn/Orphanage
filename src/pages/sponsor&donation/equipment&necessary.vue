<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-fit h-auto m-auto">
        <div class="flex justify-left items-center text-center mt-10">
    <router-link to="/sponsor&donation">
      <span class="pi pi-home mx-3"></span>
    </router-link>
    <h1 class="">Thanks for your contribution</h1>
    
  </div>

  <!-- Display all the items needed in a list  -->
  <div
    class="w-fit h-auto m-auto block my-[1.5rem] border solid border-black rounded-lg"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="w-fit h-auto m-auto block card flex justify-center items-center m-5 p-5"
    >
      <div class="card-items flex justify-left items-center px-5">
        <img :src="item.img" class="w-[3rem] h-auto" />
        <div class="text-xs ml-2">
          <div class="flex justify-between items-end">
            <h1 class="text-xs">{{ item.name }}</h1>
            <h1 class="text-[8px]">{{ item.price }} per Qty</h1>
          </div>

          <div class="flex justify-between items-center text-[0.5rem] mt-1">
            <div class="flex justify-between items-center gap-1">
              <h6>Current:</h6>
              <h6>{{ item.currentQty }}</h6>
            </div>
            <div class="flex justify-between items-center gap-1">
              <h6>Needed:</h6>
              <h6>{{ item.neededQty }}</h6>
            </div>
          </div>
          <div class="flex justify-between items-center text-xs">
            <label for="inputQty" class="text-[0.4rem]">Quantity: </label>
            <input
              type="number"
              min="1"
              value="1"
              class="w-1/3 h-auto text-[0.4rem] bg-gray-500 text-center mx-3"
            />
            <button
              class="my-1 sm:w-3/5 bg-gray-400 p-1 rounded-sm focus:text-white"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  
</template>

<script setup>
const items = [
{
    name: "Wheelchair",
    price: "RM20.00",
    currentQty: 5,
    neededQty: 10,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Crutches",
    price: "RM15.00",
    currentQty: 3,
    neededQty: 8,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Medical Mask",
    price: "RM0.50",
    currentQty: 50,
    neededQty: 100,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Hand Sanitizer",
    price: "RM3.00",
    currentQty: 20,
    neededQty: 40,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Soap",
    price: "RM2.00",
    currentQty: 30,
    neededQty: 50,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Blankets",
    price: "RM25.00",
    currentQty: 15,
    neededQty: 30,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Towels",
    price: "RM10.00",
    currentQty: 20,
    neededQty: 40,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "School Bags",
    price: "RM50.00",
    currentQty: 10,
    neededQty: 25,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Stationery Sets",
    price: "RM5.00",
    currentQty: 50,
    neededQty: 100,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Diapers",
    price: "RM30.00",
    currentQty: 40,
    neededQty: 60,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Baby Formula",
    price: "RM60.00",
    currentQty: 20,
    neededQty: 40,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Clothing Sets",
    price: "RM40.00",
    currentQty: 10,
    neededQty: 30,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
  {
    name: "Shoes",
    price: "RM35.00",
    currentQty: 25,
    neededQty: 50,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
  },
];
</script>
