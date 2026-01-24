import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/home'),
  },
  {
    name: 'favorites',
    path: '/favorites',
    component: () => import('@/pages/favorites'),
  },
  {
    name: 'authors',
    path: '/authors',
    component: () => import('@/pages/authors'),
  },
  {
    name: 'quotes',
    path: '/quotes',
    component: () => import('@/pages/quotes'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
