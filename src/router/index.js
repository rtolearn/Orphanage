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
        component: () => import('../pages/signIn/page.vue')
    },
    {
        path:'/sign-up',
        name: 'sign-up',
        component: () => import('../pages/signUp/signUpPage.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

