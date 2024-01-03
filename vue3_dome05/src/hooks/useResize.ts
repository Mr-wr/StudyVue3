import type { App } from 'vue'

/**
 * 使用 ResizeObserver API 监听元素的尺寸变化。
 *
 * @param {HTMLElement} el - 需要监听尺寸变化的 HTML 元素。
 * @param {Function} callback - 当元素尺寸变化时调用的回调函数。回调函数接收一个参数，表示元素的内容矩形（content rect）。
 */
function useResize(el: HTMLElement, callback: Function) {
  const resize = new ResizeObserver((entries) => {
    // 当元素尺寸变化时，调用回调函数，并传入元素的内容矩形
    callback(entries[0].contentRect)
  })
  // 开始观察元素尺寸变化
  resize.observe(el)
}

// 定义一个 install 函数，用于将 useResize 作为全局指令添加到 Vue 应用
const install = (app: App) => {
  // 在 Vue 应用上定义一个全局指令 'resize'
  app.directive('resize', {
    // 当指令绑定的元素被插入到 DOM 中时，会调用此钩子函数
    mounted(el, binding) {
      // 使用 useResize 函数开始监听元素尺寸变化
      useResize(el, binding.value)
    }
  })
}

// 在 useResize 函数上添加 install 属性
useResize.install = install

// 导出 useResize 函数
export default useResize
