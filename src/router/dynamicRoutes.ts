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
        component: () => import('@/pages/dashboard/DashBoardView.vue'),
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
        component: () => import('@/pages/system/user/UserListView.vue'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: '/system/rolelist',
        name: 'rolelist',
        component: () => import('@/pages/system/role/RoleListView.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: '/system/menulist',
        name: 'menulist',
        component: () => import('@/pages/system/menu/MenuListView.vue'),
        meta: {
          title: '菜单管理',
        },
      },
      {
        path: '/system/demo',
        name: 'demo',
        component: () => import('@/pages/Demo.vue'),
        meta: {
          title: '测试组件',
        },
      },
    ],
  },
  {
    path: '/user/login',
    name: 'userlogin',
    component: () => import('@/pages/account/UserCenter.vue'),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/user/register',
    name: 'userregister',
    component: () => import('@/pages/account/UserSetting.vue'),
    meta: {
      hideInMenu: true,
    },
  },
]
export default dynamicRoutes
