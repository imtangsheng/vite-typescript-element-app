import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import router from './router/index.ts'
import i18n from "./lang/index.ts"
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.mount('#app')