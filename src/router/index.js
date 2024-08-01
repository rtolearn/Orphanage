// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutUs from '@/pages/homePage/AboutUs.vue';
import VisionMission from '@/pages/homePage/VisionAndMission.vue';
import Content from '@/pages/homePage/contentOrphanage.vue';
import Developer from '@/pages/homePage/DeveloperIntroduction.vue';
import SponsorAndDonation from '@/pages/homePage/SponsorAndDonation.vue';
import AdoptionProgram from '@/pages/homePage/AdoptionProgram.vue';
import MarketPlace from '@/pages/homePage/MarketPlace.vue';

const routes = [
    {
        path:'/About Us',
        name: 'About Us',
        component: AboutUs
    },
    {
        path:'/Vision & Mission',
        name: 'VisionMission',
        component: VisionMission
    },
    {
        path:'/Content',
        name: 'Content',
        component: Content
    },
    {
        path:'/Sponsor & Donation',
        name: 'SponsorAndDonation',
        component: SponsorAndDonation
    },
    {
        path:'/Market',
        name: 'MarketPlace',
        component: MarketPlace
    },
    {
        path:'/Adoption Program',
        name: 'AdoptionProgram',
        component: AdoptionProgram
    },
    {
        path:'/',
        name: 'Developer',
        component: Developer
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes

})
export default router;

