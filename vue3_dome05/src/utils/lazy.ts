import type { App } from 'vue'
export default function lazy(app: App) {
  app.directive('lazy', {
    async mounted(el, binding) {
      const imgdef = await import('@/assets/logo.svg')
      // console.log(imgdef)
      el.src = imgdef.default
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        console.log(entry)
        if (entry.isIntersecting) {
        // if (entry.intersectionRatio > 0) {
          setTimeout(() => {
            el.src = binding.value
          }, 2000)
          observer.unobserve(el)
        }
      })
      observer.observe(el)
    }
  })
}
