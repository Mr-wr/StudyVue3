import type { App } from 'vue'
// 导出一个默认函数，接收一个 Vue 应用实例
export default function lazy(app: App) {
  // 在应用实例上定义一个全局指令 'lazy'
  app.directive('lazy', {
    // 当指令绑定的元素被插入到 DOM 中时，会调用此钩子函数
    async mounted(el, binding) {
      // 动态导入默认图片
      const imgdef = await import('@/assets/logo.svg')

      // 将元素的 src 属性设置为默认图片的路径
      el.src = imgdef.default

      // 创建一个新的 IntersectionObserver 实例来观察元素是否进入视口
      const observer = new IntersectionObserver((entries) => {
        // 获取观察的元素的交叉信息
        const entry = entries[0]

        // 如果元素进入了视口
        if (entry.isIntersecting) {
          // 延迟 2 秒后，将元素的 src 属性设置为绑定值，即真实的图片路径
          setTimeout(() => {
            el.src = binding.value
          }, 2000)
          // 停止观察元素
          observer.unobserve(el)
        }
      })
      // 开始观察元素
      observer.observe(el)
    }
  })
}
