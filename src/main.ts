import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Kongponents from '@kong/kongponents'

const app = createApp(App)

app.use(createPinia())
app.use(Kongponents)
app.use(router)

app.mount('#app')
