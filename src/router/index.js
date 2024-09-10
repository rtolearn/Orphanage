// src/router/index.js
// import { updatePreset } from '@primevue/themes';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name: 'home',
        component: () => import("../pages/HomePage/page.vue")
    }, 
    {
        path:'/sign-in',
        name: 'sign-in',
        component: () => import('../pages/SignIn/page.vue')
     
    },
    {
        path:'/sign-up',
        name: 'sign-up',
        component: () => import('../pages/SignUp/page.vue')
 
    },
    {
        path:'/marketplace',
        name:'market',
        component: () => import('@/pages/MarketPlace/MarketplacePage.vue' )
     
    },
    {
        path:'/purchase',
        name:'purchase',
        component: () => import('@/pages/MarketPlace/PurchasePage.vue' )
    
    },
    {
        path: '/adoption',
        name: 'adoption',
        component: () => import('@/pages/AdoptionProgram/page.vue')
    },
    {
        path:'/adoptionProgression',
        name: 'adoptionProgression',
        component: () => import('@/pages/AdoptionProgram/ApplicationProgression.vue')
    },
    {
        path:'/sponsor&donation',
        name: 'sponsor&donation',
        component: () => import('@/pages/Sponsor&Donation/page.vue')       
    },
    {
        path:'/necessary',
        name: 'useItem',
        component: () => import('@/pages/Sponsor&Donation/NecessaryPage/page.vue')
    },
    
    {
        path:'/equipment',
        name: 'equipment',
        component: () => import('@/pages/Sponsor&Donation/EquipmentPage/page.vue')
    },
    {
        path: '/scholarship',
        name: 'scholarship',
        component: () => import('@/pages/Sponsor&Donation/ScholarshipPage/Scholarship.vue')
    },
    {
        path:'/profile',
        name: 'profile',
        component: () => import('@/pages/Profile/page.vue')
    }
    
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
