// src/router/index.js
// import { updatePreset } from '@primevue/themes';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage/page.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/pages/SignIn/index.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/pages/SignUp/index.vue"),
  },
  {
    path: "/marketplace",
    name: "market",
    component: () => import("@/pages/Marketplace/index.vue"),
  },
  {
    path: "/adoption",
    name: "adoption",
    component: () => import("@/pages/AdoptionProgram/index.vue"),
  },
  {
    path: "/sponsor&donation",
    name: "sponsor&donation",
    component: () => import("@/pages/Sponsor&Donation/index.vue"),
  },
  {
    path: "/equipment&necessary",
    name: "equipment&necessary",
    component: () =>
      import("@/components/Sponsor&Donation/Equipment&NecessaryPage/page.vue"),
  },
  {
    path: "/scholarship",
    name: "scholarship",
    component: () =>
      import("@/components/Sponsor&Donation/ScholarshipPage/Scholarship.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/pages/Profile/index.vue"),
  },
  {
    path: "/paymentSponsor",
    name: "paymentSponsor",
    component: () => import("@/components/Sponsor&Donation/Payment.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
