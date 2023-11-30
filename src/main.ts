import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import Repositories from "./plugins/repositories";


const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
//app.use(Repositories);

app.mount('#app');
