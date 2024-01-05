/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-05 12:14:48
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 20:02:01
 * @FilePath: \vue3_dome08\src\stores\modules\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { asyncRouterMap, constantRouterMap } from '@/router/index'
/**
 * @description: 路由的权限是否包括传过来的权限
 * @author: qi-you
 * @param {Array} roles
 * @param {Object} route
 * @return {Boolean}
 */
function hasPermission(roles: Array<string>, route: { meta: { role: Array<string> } }) {
  // 判断两个参数是或有两个属性
  if (route.meta && route.meta.role) {
    // 判断是否包含
    return roles.some((role) => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}
export const usePermission = defineStore('permission', {
  state: () => {
    return {
      someState: '你好 pinia',
      routers: constantRouterMap,
      // 添加的路由对象
      addRouters: [],
      test: 1
    }
  },
  actions: {
    // 重新设置路由
    revsrs(routers: Array<any>) {
      this.addRouters = routers as any
      this.routers = constantRouterMap.concat(routers)
    },
    /**
     * @description: 根据权限添加、过滤路由
     * @param {any} data 用户的权限
     * @return {*}
     */
    GenerateRoutes(data: any) {
      return new Promise<void>((resolve) => {
        const { roles } = data
        console.log('用户的权限', roles)
        const accessedRouters = asyncRouterMap.filter((v) => {
          // v 需要权限的路由对象
          // 如果传过来的权限是admin那么全部的路由都可以访问的
          if (roles.indexOf('admin') >= 0) return true
          // 路由的权限是否包括传过来的权限
          if (hasPermission(roles, v)) {
            // 判断是否含有子路由
            if (v.children && v.children.length > 0) {
              // 过滤出有权限的子路由重新赋值，过滤没有权限的路由
              v.children = v.children.filter((child) => {
                // 路由的权限是否包括传过来的权限
                if (hasPermission(roles, child)) {
                  return child
                }
                return false
              })
              // 赋值完了直接返回
              return v
            } else {
              // 判断是否含有子路由 如果没有直接返回
              return v
            }
          }
          // 路由的权限是否包括传过来的权限，否则就没有权限
          return false
        })
        // 完成后赋值路由
        console.log('过滤后的路由', accessedRouters)
        this.revsrs(accessedRouters)
        resolve()
      })
    },

    someAction() {
      console.log('someAction')
    }
  },
  getters: {},
  persist: {
    storage: sessionStorage
  }
})
