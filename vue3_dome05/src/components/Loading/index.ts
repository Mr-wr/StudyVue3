/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-03 10:55:07
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-03 11:11:44
 * @FilePath: \vue3_dome05\src\components\Loading\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App, VNode } from 'vue'
import Loading from './Loading.vue'
import { createVNode, render } from 'vue'

export default {
  install(app: App) {
    const loadingVnode: VNode = createVNode(Loading)
    render(loadingVnode, document.body)
    console.log(loadingVnode.component)
    app.config.globalProperties.$loading = {
      show() {
        loadingVnode?.component?.exposed?.show()
      },
      hide() {
        loadingVnode?.component?.exposed?.hide()
      }
    }
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loading: {
      show: () => void
      hide: () => void
    }
  }
}
