// src/router/index.js
// import { updatePreset } from '@primevue/themes';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../pages/homePage/page.vue"),
	},
	{
		path: "/sign-in",
		name: "sign-in",
		component: () => import("../pages/signIn/page.vue"),
	},
	{
		path: "/sign-up",
		name: "sign-up",
		component: () => import("../pages/signUp/page.vue"),
	},
	{
		path: "/market",
		name: "market",
		component: () => import("@/pages/Marketplace/DisplayItemPage.vue"),
	},
	{
		path: "/marketplace",
		name: "marketplace",
		component: () => import("@/pages/Marketplace/MarketplacePage.vue"),
	},
	{
		path: "/purchase",
		name: "purchase",
		component: () => import("@/pages/Marketplace/PurchasePage.vue"),
	},
	{
		path: "/adoption",
		name: "adoption",
		component: () => import("@/pages/AdoptionProgram/page.vue"),
	},
	{
		path: "/adoptionProgression",
		name: "adoptionProgression",
		component: () =>
			import("@/pages/AdoptionProgram/applicationProgression.vue"),
	},
	{
		path: "/sponsor&donation",
		name: "sponsor&donation",
		component: () => import("@/pages/sponsor&donation/page.vue"),
	},
	{
		path: "/necessary",
		name: "useItem",
		component: () => import("@/pages/sponsor&donation/necessary.vue"),
	},

	{
		path: "/equipment",
		name: "equipment",
		component: () => import("@/pages/sponsor&donation/equipment.vue"),
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
