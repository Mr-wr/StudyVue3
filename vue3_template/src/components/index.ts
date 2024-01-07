/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-06 11:35:20
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-06 11:56:13
 * @FilePath: \vue3_dome08\src\components\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App, Component } from 'vue'
const components: Record<string, Component> = import.meta.glob('/src/components/**/*.vue')

export function registerComponents(app: App) {
  for (const key in components) {
    const component = components[key]
    // 截取组件名
    const name = key.split('/').pop()?.split('.')[0]
    // console.log(name)
    app.component(name as string, component)
  }
}
