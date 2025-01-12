import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
// 路由菜单
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/dashboard',
    meta: {
      hide: true,
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/DashBoardView.vue'),
        meta: {
          label: '控制台',
          icon: 'ri:dashboard-3-line',
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    redirect: '/system/userlist',
    component: BasicLayout,
    meta: {
      label: '后台管理',
      icon: 'ri:settings-3-line',
    },
    children: [
      {
        path: '/system/userlist',
        name: 'userlist',
        component: () => import('@/views/system/user/UserListView.vue'),
        meta: {
          label: '用户管理',
        },
      },
      {
        path: '/system/rolelist',
        name: 'rolelist',
        component: () => import('@/views/system/role/RoleListView.vue'),
        meta: {
          label: '角色管理',
        },
      },
      {
        path: '/system/menulist',
        name: 'menulist',
        component: () => import('@/views/system/menu/MenuListView.vue'),
        meta: {
          label: '菜单管理',
        },
      },
      {
        path: '/system/demo',
        name: 'demo',
        component: () => import('@/views/Demo.vue'),
        meta: {
          label: '测试组件',
        },
      },
    ],
  },
  {
    path: '/user/login',
    name: 'userlogin',
    component: () => import('@/views/account/UserLoginView.vue'),
    meta: {
      hide: true,
    },
  },
  {
    path: '/user/register',
    name: 'userregister',
    component: () => import('@/views/account/UserRegisterView.vue'),
    meta: {
      hide: true,
    },
  },
]
export default routes
