// src/router/index.js
// import { updatePreset } from '@primevue/themes';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path:'/',
        name: 'home',
        component: () => import("../pages/homePage/page.vue")
    }, 
    {
        path:'/sign-in',
        name: 'sign-in',
        component: () => import('../pages/signIn/signInPage.vue')
    },
    {
        path:'/sign-up',
        name: 'sign-up',
        component: () => import('../pages/signUp/signUpPage.vue')
    },
    {
        path:'/market',
        name:'market',
        component: () => import('../pages/Marketplace/DisplayItemPage.vue' )

    },
    {
        path:'/purchase',
        name:'purchase',
        component: () => import('../pages/Marketplace/PurchasePage.vue' )
    },
    {
        path: '/adoption',
        name: 'adoption',
        component: () => import('../pages/AdoptionProgram/page.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

