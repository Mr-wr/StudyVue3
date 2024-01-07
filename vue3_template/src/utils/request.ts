import axios from 'axios'
import { useUser } from '@/stores/modules/user'
// import NProgress from "nprogress";
// import 'nprogress/nprogress.css'
export function request(config: any) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_PROXY_BASE_API,
    // 测试
    // baseURL: "http://bao.montaro.cn",
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      token: useUser().userInfo.token
    }
  })
  // 拦截器
  instance.interceptors.request.use(
    // 请求成功拦截
    (config) => {
      // NProgress.start();
      // console.log("请求成功拦截",config);
      // 如果不返回出去的话请求会报错
      // console.log(config);
      return config
    },
    // 请求失败拦截
    (err) => {
      console.log('请求失败拦截', err)
    }
  )
  instance.interceptors.response.use(
    (res) => {
      // console.log("相应成功拦截", res);

      // NProgress.done();
      return res.data
    },
    (err) => {
      console.log('相应失败拦截', err)
    }
  )
  return instance(config)
}
