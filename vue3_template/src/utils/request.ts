import axios from 'axios'
import { useUser } from '@/stores/modules/user'
// import NProgress from "nprogress";
// import 'nprogress/nprogress.css'
// export function request(config: any) {
//   const instance = axios.create({
//     baseURL: import.meta.env.VITE_PROXY_BASE_API,
//     // 测试
//     // baseURL: "http://bao.montaro.cn",
//     timeout: 5000,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       token: useUser().userInfo.token
//     }
//   })
//   // 拦截器
//   instance.interceptors.request.use(
//     // 请求成功拦截
//     (config) => {
//       // NProgress.start();
//       // console.log("请求成功拦截",config);
//       // 如果不返回出去的话请求会报错
//       // console.log(config);
//       return config
//     },
//     // 请求失败拦截
//     (err) => {
//       console.log('请求失败拦截', err)
//     }
//   )
//   instance.interceptors.response.use(
//     (res) => {
//       // console.log("相应成功拦截", res);

//       // NProgress.done();
//       return res.data
//     },
//     (err) => {
//       console.log('相应失败拦截', err)
//     }
//   )
//   return instance(config)
// }

//进行axios二次封装:使用请求与响应拦截器
//引入用户相关的仓库
// import useUserStore from '@/store/modules/user'
//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
const request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_PROXY_BASE_API, //基础路径上会携带/api
  timeout: 5000 //超时的时间的设置
})
//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
  const userStore = useUser()
  if (userStore.userInfo.token) {
    config.headers.token = userStore.userInfo.token
  }
  //config配置对象,headers属性请求头,经常给服务器端携带公共参数
  //返回配置对象
  return config
})

//第三步:响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data
  },
  (error) => {
    //失败回调:处理http网络错误的
    //定义一个变量:存储网络错误信息
    let message = ''
    //http状态码
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    console.log(message)
    //提示错误信息
    // ElMessage({
    //   type: 'error',
    //   message,
    // })
    return Promise.reject(error)
  }
)
//对外暴露
export default request
