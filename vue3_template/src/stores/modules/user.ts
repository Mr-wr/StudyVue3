/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-04 19:28:14
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 20:35:36
 * @FilePath: \vue3_dome08\src\stores\counter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import user from '@/api/user'
import { md5 } from '@/utils/utils'
export const useUser = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        token: '',
        roles: [] as string[]
      }
    }
  },
  actions: {
    someAction() {
      console.log('someAction')
    },
    async getUserInfo(): Promise<any> {
      try {
        const res = await user.login({
          address: '0x238e54bb17796e01884a591460157768c5f95296',
          sign: md5('0x238e54bb17796e01884a591460157768c5f95296'),
          code: ''
        })
        this.userInfo.roles.push('admin')
        console.log(res)
        Object.assign(this.userInfo, res.data)
        return this.userInfo
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
