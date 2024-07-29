import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Menubar from 'primevue/menubar';
import Ripple from 'primevue/ripple';   
import InputText from 'primevue/inputtext';  
import Avatar from 'primevue/avatar';
import './assets/main.css'
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('ButtonUsed', Button);
app.component("BreadcrumbUsed", Breadcrumb);
app.component("MenubarUsed", Menubar);
app.directive('RippleEffect', Ripple);
app.component('InputText', InputText);
app.component('AvatarAcc', Avatar);
app.mount('#app');