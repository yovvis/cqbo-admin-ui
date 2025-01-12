import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { Icon } from '@iconify/vue'

export const useMenuStore = defineStore('menuStore', () => {})

/**
 * 生成菜单项
 * @param routes
 */
export const getMenuItems: any = (routes: Array<RouteRecordRaw>) => {
  return routes.map((route) => {
    // 处理菜单项基本信息
    return {
      key: route.path,
      label: route.meta?.label || '',
      title: route.meta?.label || '',
      // 动态图标处理
      icon: route.meta?.icon ? h(Icon, { icon: route.meta?.icon as string, width: '1.3em' }) : null,
      children: route.children ? getMenuItems(route.children) : null,
    }
  })
}
/**
 * 过滤路由
 * @param routes
 */
export const filterRoutes = (routes: Array<RouteRecordRaw>) => {
  return routes.filter((item) => {
    if (item.meta?.hide) {
      return false
    }
    // 递归过滤 children
    if (item?.children) {
      item.children = filterRoutes(item.children)
    }
    return true
  })
}
