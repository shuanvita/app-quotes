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
    name: 'quotes',
    path: '/quotes',
    component: () => import('@/pages/quotes'),
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/not-found/ui/NotFoundPage.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
