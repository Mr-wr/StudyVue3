/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-04 19:28:14
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 09:49:26
 * @FilePath: \vue3_dome08\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

// import { store } from '@/stores/counter'
export const asyncRouterMap = [
  {
    path: '/form',
    component: () => import('@/components/From.vue'),
    name: '权限测试',
    meta: { role: ['admin', 'super_editor'] }, // 页面需要的权限
    children: [
      {
        path: 'index',
        component: () => import('@/components/Test.vue'),
        name: '权限测试页',
        meta: { role: ['admin', 'super_editor'], title: 'Form', icon: 'form' } // 页面需要的权限
      }
    ]
  },
  // { path: '*', redirect: '/404', hidden: true }
]
const whiteList = ['/login']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: asyncRouterMap
})

router.beforeEach((to, from, next) => {
  // 判断是否有token
  // if (store.getters.token) {
  //   // 如果有token判断是否跳转的是登入
  //   if (to.path === '/login') {
  //     // 如果是登入直接登入到主页
  //     next({ path: '/' })
  //   } else {
  //     if (store.getters.roles.length === 0) {
  //       // 判断当前用户是否已拉取完user_info信息
  //       store
  //         .dispatch('user/getInfo')
  //         .then((res: any) => {
  //           console.log('log - .then - res', res)
  //           // 拉取info
  //           const roles = res.roles
  //           store.dispatch('permission/GenerateRoutes', { roles }).then(() => {
  //             // 生成可访问的路由表
  //             // router.addRoutes(store.getters['permission/addRouters']) // 动态添加可访问路由表
  //             next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,设置替换： true，这样导航就不会留下历史记录了
  //           })
  //         })
  //         .catch((err: any) => {
  //           console.log(err)
  //         })
  //     } else {
  //       next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next('/login') // 否则全部重定向到登录页
  //   }
  // }
})

export default router
