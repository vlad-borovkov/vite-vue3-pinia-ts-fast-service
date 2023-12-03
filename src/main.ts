import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import './assets/styles/style.css';
import App from './App.vue';
import vClickOutside from "click-outside-vue3";



const app = createApp(App)
app
    .use(router)
    .use(createPinia())
    .use(vClickOutside)
    .mount('#app');
