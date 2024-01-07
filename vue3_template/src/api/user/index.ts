// //统一管理咱们项目用户相关的接口
// import request from '@/utils/request'
// import type {
//   loginFormData,
//   loginResponseData,
//   userInfoReponseData,
// } from './type'
//// 项目用户相关的请求地址
// enum API {
//   LOGIN_URL = '/admin/acl/index/login',
//   USERINFO_URL = '/admin/acl/index/info',
//   LOGOUT_URL = '/admin/acl/index/logout',
// }

// //登录接口
// export const reqLogin = (data: loginFormData) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data)
// //获取用户信息
// export const reqUserInfo = () =>
//   request.get<any, userInfoReponseData>(API.USERINFO_URL)
// //退出登录
// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

import { request } from '@/utils/request'
import type { addressData } from './type'

class User {
  // 登录
  login(data: addressData) {
    return request({
      url: '/api1/User/login',
      method: 'post',
      data
    })
  }
  // 注册
  signin(users: any) {
    const { username, password } = users
    return request({
      url: '/api/users/signin',
      method: 'post',
      data: {
        username,
        password
      }
    })
  }
  // 获取用户列表
  getUsersList() {
    return request({
      url: '/api/users/userList',
      method: 'get'
    })
  }
  // 删除用户
  signout() {
    return request({
      url: '/api/users/signout',
      method: 'get'
    })
  }
}

export default new User()
