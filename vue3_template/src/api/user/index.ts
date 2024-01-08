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

import request from '@/utils/request'
import type { addressData } from './type'
interface Res {
  code: number
  data: UserInfo
  msg: string
  ts: number
}

interface UserInfo {
  info: Info
  token: string
}
interface Info {
  user_id: number
  status: number
  address: string
  invite_code: string
  name: string
  avatar: string
  chain: number
  pay_pwd: string
  amount: string
  amount_u: string
  total_income: string
  total_income_u: string
  total_income_ref: string
  total_income_nft: string
  total_withdraw: string
  ref_user_id: number
  ref_user_ids: string
  ref_user_address: string
  ref_user_direct: number
  ref_user_total: number
  ref_direct_buy: number
  ref_total_income: string
  has_buy: number
  first_buy_at: number
  create_at: number
  update_at: number
}

//登录接口
export const login = (data: addressData) => request.post<any, Res>('/api1/User/login', data)
// class User {
// 注册
export function signin(users: any) {
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
export function getUsersList() {
  return request({
    url: '/api/users/userList',
    method: 'get'
  })
}
// 删除用户
export function signout() {
  return request({
    url: '/api/users/signout',
    method: 'get'
  })
}
// }

// export default new User()
