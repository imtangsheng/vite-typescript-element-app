import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import router from './router/index.ts'
import i18n from "./lang/index.ts"
import { createPinia } from 'pinia'

import 'virtual:svg-icons-register'

const pinia = createPinia()

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')