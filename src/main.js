/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import Breadcrumb from "primevue/breadcrumb";
import Menubar from "primevue/menubar";
import Ripple from "primevue/ripple";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Carousel from "primevue/carousel";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";
import router from "@/router/index.js";
import SelectButton from "primevue/selectbutton";
import ToastService from "primevue/toastservice";
import { createPinia } from 'pinia';
// import Accordion from 'primevue/accordion';
// import AccordionPanel from 'primevue/accordionpanel';
// import AccordionHeader from 'primevue/accordionheader';
// import AccordionContent from 'primevue/accordioncontent';

import "./assets/main.css";
import "./assets/style.scss";

const app = createApp(App);
const pinia = createPinia();
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			cssLayer: {
				name: "primevue",
				order: "tailwind-base, primevue, tailwind-utilities",
			},
		},
	},
	ripple: true,
});
app.use(ToastService);
app.use(pinia);
app.component("Breadcrumb", Breadcrumb);
app.component("Menubar", Menubar);
app.directive("Ripple", Ripple);
app.component("InputText", InputText);
app.component("AvatarAcc", Avatar);
app.component("Carousel", Carousel);
app.component("Dialog", Dialog);
app.component("InputNumber", InputNumber);
app.component("SelectButton", SelectButton);
// app.component('Accrodion', Accordion)
// app.component('AccordionPanel', AccordionPanel)
// app.component('AccordionHeader', AccordionHeader)
// app.component('AccordionContent', AccordionContent)

app.use(router);
app.mount("#app");
