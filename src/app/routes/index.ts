import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
