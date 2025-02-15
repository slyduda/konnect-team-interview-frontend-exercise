import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Kongponents from '@kong/kongponents'
import '../node_modules/@kong/kongponents/dist/style.css'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(Kongponents)
app.use(router)

app.mount('#app')
