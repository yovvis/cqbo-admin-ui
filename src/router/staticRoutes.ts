import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layouts/index.vue')
// 路由菜单
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/common/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/401',
    name: 'Error401',
    component: () => import('@/views/exception/401.vue'),
    meta: {
      title: '授权已过期',
    },
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      title: '找不到页面',
    },
    component: () => import('@/views/exception/error.vue'),
  },
]
export default staticRoutes
