import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Menubar from 'primevue/menubar';
import './assets/main.css'
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button);
app.component("Breadcrumb", Breadcrumb);
app.component("Menubar", Menubar);
app.mount('#app');