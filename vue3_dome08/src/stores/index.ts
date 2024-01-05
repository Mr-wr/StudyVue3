// index.ts

// 使用 import.meta.glob 动态导入 modules 目录下的所有 ts 文件
const files: { [key: string]: () => Promise<any> } = import.meta.glob('./modules/*.ts')

// 创建一个空对象来存储所有的模块
const modules: { [key: string]: any } = {}
// 遍历 files 对象
for (const key in files) {
  // 使用 Promise.then 方法处理每个文件的导入结果
  await files[key]().then((res: { [key: string]: any }) => {
    // 遍历 res 对象，将每个模块添加到 modules 对象中
    Object.keys(res).forEach((item: string) => {
      modules[item] = res[item]
    })
  })
}
export default modules
