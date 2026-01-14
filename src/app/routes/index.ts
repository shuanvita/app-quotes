import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/home'),
    },
    {
      name: 'favourites',
      path: '/favourites',
      component: () => import('@/pages/favourites'),
    },
  ],
  history: createWebHistory(),
})

export default router
