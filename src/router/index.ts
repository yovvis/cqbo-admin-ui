import { createRouter, createWebHistory } from 'vue-router'
import staticRoutes from '@/router/staticRoutes.ts'
import dynamicRoutes from '@/router/dynamic-routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...staticRoutes, ...dynamicRoutes],
})
export default router
