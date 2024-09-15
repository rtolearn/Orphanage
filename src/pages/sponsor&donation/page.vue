<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HomePage from '@/pages/Sponsor&Donation/HomePage.vue'
import NavBar from "@/pages/HomePage/NavBar.vue"
import Payment from './Payment.vue';
</script> 

<template>
    <div id="sponsor&donation" class="max-w-[1440px] min-h-screen mx-auto">
        <NavBar />
        <HomePage />
        <Payment />
    </div>
    
</template>
