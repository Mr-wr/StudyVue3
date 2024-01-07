import { usePermission } from '@/stores/modules/permission'
import type { Router, RouteRecordRaw } from 'vue-router'

export function updateRouter(data: any, router: Router) {
  return new Promise<void>((resolve, reject) => {
    const storePermission = usePermission()
    storePermission.GenerateRoutes(data).then(() => {
      for (const item of storePermission.addRouters) {
        router.addRoute(item)
      }
      console.log(router.getRoutes())
      resolve()
    })
  })
}
