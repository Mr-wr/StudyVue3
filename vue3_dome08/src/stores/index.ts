/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-05 09:38:39
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 20:21:38
 * @FilePath: \vue3_dome08\src\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// index.ts
import { useUser } from './modules/user'
import { usePermission } from './modules/permission'
// import type { Pinia } from 'pinia'
// const modules: { [key: string]: Function } = {}
// function importall() {
//   // 使用 import.meta.glob 动态导入 modules 目录下的所有 ts 文件
//   const files: { [key: string]: () => Promise<any> } = import.meta.glob('./modules/*.ts', {
//     eager: true
//   })

//   // 创建一个空对象来存储所有的模块
//   // 遍历 files 对象
//   for (const key in files) {
//     // 使用 Promise.then 方法处理每个文件的导入结果
//     // await files[key]().then((res: { [key: string]: any }) => {
//     // 遍历 res 对象，将每个模块添加到 modules 对象中
//     Object.keys(files[key]).forEach((item: string) => {
//       modules[item] = files[key][item]
//     })
//     // })
//   }
// }

// 自动挂载所有ts
// const fun = async () => {
//   const arr = import.meta.glob('./modules/*.ts', { eager: true })
//   console.log(Object.entries(arr))
//   for (const [key, val] of Object.entries(arr)) {
//     const aval = val as Record<string, any>
//     Object.keys(aval).forEach((item: any) => {
//       // console.log(aval[item])
//       modules[item] = aval[item]
//     })
//   }
// }

// fun()
export default {
  useUser,
  usePermission
}
