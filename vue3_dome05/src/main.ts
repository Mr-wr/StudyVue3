import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// utils hooks
import useResize from './hooks/useResize'
// import vRole from './utils/zhidingyiziling.ts'
import lazy from './utils/lazy'
const app = createApp(App)
app.use(lazy)
app.use(useResize)
app.use(createPinia())
app.use(router)

app.mount('#app')
