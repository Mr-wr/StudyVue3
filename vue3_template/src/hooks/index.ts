
import test from './modules/test1'
import test2 from './modules/test2'
// 导出 modules 对象，这样其他文件就可以导入和使用这些模块了
export default {
  ...test,
  ...test2
}
