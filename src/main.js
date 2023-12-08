import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Popper from "vue3-popper";
import 'bootstrap'
import * as echarts from "echarts"


const app = createApp(App)

const pinia = createPinia()

app.component("Popper", Popper);

app.use(router)
app.use(pinia)
app.mount('#app')