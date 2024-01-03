/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-03 21:01:57
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-03 21:48:59
 * @FilePath: \vue3_dome07\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
