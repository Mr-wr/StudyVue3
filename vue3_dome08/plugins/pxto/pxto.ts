import type { Options } from './type' // 导入Options类型
import type { Plugin } from 'postcss' // 导入postcss的Plugin类型

// 默认的选项设置
const defaultOptions = {
    viewPortWidth: 375, // 视口宽度
    mediaQuery: false, // 是否使用媒体查询
    unitToConvert:'px' // 要转换的单位
}

// 导出的函数，接收一个Options类型的参数，返回一个Plugin类型的对象
export const pxToViewport = (options: Options = defaultOptions): Plugin => {
    // 将默认选项和传入的选项合并
    const opt = Object.assign({}, defaultOptions, options)

    return {
        postcssPlugin: 'postcss-px-to-viewport', // 插件名
        //css节点都会经过这个钩子
        Declaration(node) { // 声明节点
            const value = node.value // 获取节点的值
            //匹配到px 转换成vw
            if (value.includes(opt.unitToConvert)) {
                const num = parseFloat(value) // 将值转换为浮点数
                const transformValue = (num / opt.viewPortWidth) * 100 // 计算转换后的值
                node.value = `${transformValue.toFixed(2)}vw` // 将节点的值设置为转换后的值
            }    
        },
    }
}
