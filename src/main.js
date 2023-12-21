import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVueNext from 'bootstrap-vue-next'
// main.js/ts
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "bootstrap"
const app = createApp(App)

app.use(router)

app.use(BootstrapVueNext)
app.mount('#app')


app.config.globalProperties.author = 'sangbinlee9'
app.config.globalProperties.date = '2023.12.19'
console.log('app.config========',app.config);