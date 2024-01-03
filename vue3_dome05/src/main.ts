import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// utils hooks
import useResize from './hooks/useResize'
// import vRole from './utils/zhidingyiziling.ts'
import lazy from './utils/lazy'
import Loading from './components/Loading'
const app = createApp(App)
// utils hooks
app.use(lazy)
app.use(useResize)
app.use(Loading)
// ===============
// 自定义全局变量
// ===============
// app.config.globalProperties.$env = import.meta.env
//
/**
 * 声明一个模块 "@vue/runtime-core"，并在其中扩展 ComponentCustomProperties 接口，
 * 添加一个 $env 属性，类型为 any。如果没有声明会报错
 */
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $env: string
  }
}
app.use(createPinia())
app.use(router)

app.mount('#app')
