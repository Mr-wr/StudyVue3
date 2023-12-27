import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: []
    },
    {
      path: '/new:a',
      name: 'new',
      component: () => import('../views/New.vue'),
      children: [
        {
          name: 'detail',
          path: '/detail:a',
          component: () => import('../views/Detail.vue'),
          props: true
        }
      ],
      props: true
      // props(route) {
      //   console.log('🚀 ~ file: index.ts:18 ~ props ~ route:', route)

      //   return {
      //     detail: route.params.detail
      //   }
      // }
    },
    {
      path: '/',
      redirect: '/home'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
