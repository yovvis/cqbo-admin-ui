import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
// 路由菜单
const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '控制台',
          icon: 'ri:dashboard-3-line',
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    redirect: '/system/userlist',
    component: Layout,
    meta: {
      title: '后台管理',
      icon: 'ri:settings-3-line',
    },
    children: [
      {
        path: '/system/userlist',
        name: 'userlist',
        component: () => import('@/views/system/user/UserList.vue'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: '/system/rolelist',
        name: 'rolelist',
        component: () => import('@/views/system/role/RoleList.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: '/system/menulist',
        name: 'menulist',
        component: () => import('@/views/system/menu/MenuList.vue'),
        meta: {
          title: '菜单管理',
        },
      },
      {
        path: '/system/demo',
        name: 'demo',
        component: () => import('@/views/Demo.vue'),
        meta: {
          title: '测试组件',
        },
      },
    ],
  },
  {
    path: '/user/login',
    name: 'userlogin',
    component: () => import('@/views/account/UserCenter.vue'),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/user/register',
    name: 'userregister',
    component: () => import('@/views/account/UserSetting.vue'),
    meta: {
      hideInMenu: true,
    },
  },
]
export default dynamicRoutes
