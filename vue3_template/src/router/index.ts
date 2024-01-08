import { createRouter, createWebHistory } from 'vue-router'
import fileModule from '@/stores'
import { updateRouter } from '@/hooks/modules/updateRouter'
// const storePermission = usePermission()
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    role?: Array<string>
  }
}
// export const constantRouterMap: Array<{
//   path?: string
//   component?: () => Promise<any>
//   name?: string
//   meta?: { role: string[] }
//   children?: any[]
// }>
const constantRouterMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    title: '首页',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    title: '登入',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    title: '错误',
    component: () => import('@/components/Error.vue')
  }
]
// import { store } from '@/stores/counter'
const asyncRouterMap = [
  {
    path: '/form',
    component: () => import('@/components/From.vue'),
    name: '权限测试',
    title: '权限测试super_editor',
    meta: { role: ['super_editor'] }, // 页面需要的权限
    children: [
      {
        path: 'index',
        component: () => import('@/components/Test.vue'),
        title: '权限测试页super_editor',
        name: '权限测试页',
        meta: { role: ['super_editor'], title: 'Form', icon: 'form' }, // 页面需要的权限
        children: [
          {
            path: 'index2',
            component: () => import('@/components/Test.vue'),
            title: '权限测试页super_editor2',
            name: '权限测试页2',
            meta: { role: ['super_editor'], title: 'Form2', icon: 'form2' } // 页面需要的权限
          }
        ]
      }
    ]
  },
  {
    path: '/super_editor',
    component: () => import('@/components/Super_editor.vue'),
    name: '权限测试2',
    title: '权限测试admin',
    meta: { role: ['admin'] } // 页面需要的权限
  }
  // { path: '*', redirect: '/404', hidden: true }
]
const whiteList = ['/login', '/home']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  const { useUser } = fileModule
  const storuseUser = useUser()
  // 判断是否有token
  if (storuseUser.userInfo.token) {
    // 如果有token判断是否跳转的是登入
    if (to.path === '/login') {
      // 如果是登入直接登入到主页
      // next({ path: '/home' })
      next()
    } else {
      if (storuseUser.userInfo.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        storuseUser
          .getUserInfo()
          ?.then((res: any) => {
            // console.log('log - .then - res', res)
            // 拉取info
            const roles = res.roles
            updateRouter({ roles }, router).then(() => {
              next({ ...to, replace: true })
              // console.log(router.getRoutes())
            })
          })
          .catch((err: any) => {
            console.log(err)
          })
      } else {
        next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      console.log('🚀 ~ // 在免登录白名单，直接进入')
      // next({ ...to, replace: true })
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

export { router, asyncRouterMap, constantRouterMap }
