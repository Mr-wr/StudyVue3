/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-04 19:28:14
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 20:35:36
 * @FilePath: \vue3_dome08\src\stores\counter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
export const useUser = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        token: '',
        roles: []
      }
    }
  },
  actions: {
    someAction() {
      console.log('someAction')
    },
    getUserInfo(): Promise<any> {
      try {
        return new Promise((resolve) => {
          setTimeout(() => {
            const userInfo = {
              roles: ['admin'],
              name: 'admin',
              avatar: 'https://avatars.githubusercontent.com/u/1434687824?s=60&v=4',
              introduction: '我是超级管理员',
              token: 'adfadfasdf'
            }
            Object.assign(this.userInfo, userInfo)
            resolve(userInfo)
          }, 3000)
        })
      } catch (error) {
        return Promise.reject(error)
        // console.log('🚀 ~ file: user.ts:33 ~ getUserInfo ~ error:', error)
      }
    }
  },
  getters: {},
  persist: {
    storage: sessionStorage
  }
})
