/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-04 19:28:14
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-06 11:48:32
 * @FilePath: \vue3_dome08\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'
// 插件
import mitt from 'mitt'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 自动导入全局组件
import { registerComponents } from '@/components/index'
const app = createApp(App)
// 自动导入全局组件
registerComponents(app)
//  ===============插件====================
const Mit = mitt()
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// ====================================================
app.use(pinia)
app.use(router)

app.mount('#app')
