const routerModules = import.meta.glob([
  '@/pages/**/*.vue',
  '!@/pages/**/*copy.vue',
  '!@/pages/**/component',
  '!@/pages/**/components',
  '!@/pages/**/composables',
  '!@/pages/**/hooks',
  '!@/pages/**/locales',
  '!@/pages/**/modules',
  '!@/pages/**/plugins',
  '!@/pages/**/tests',
  '!@/pages/**/test',
  '!@/pages/common',
])
export const basicRouteMap = {
  // 一般用于存在子集的页面
  RouteView: () => import('@/layouts/components/routeView.vue'),
  // 空页面
  ComponentError: () => import('@/pages/exception/componentError.vue'),
}

function checkEager(module: any) {
  if (typeof module === 'object' && 'default' in module) return module.default

  return module
}

export function getRouterModule(path?: string): any {
  if (!path) return basicRouteMap.ComponentError
  // 判断是否在basicRouteMap中存在
  if (path in basicRouteMap) return (basicRouteMap as any)[path]

  // 判断开头是不是/
  if (path.startsWith('/')) path = path.slice(1)
  // 组装数据格式
  const fullPath = `/src/pages/${path}.vue`
  const fullPathIndex = `/src/pages/${path}/index.vue`
  if (fullPathIndex in routerModules) return checkEager(routerModules[fullPathIndex])

  // 返回插件信息
  return checkEager(routerModules[fullPath])
}

export default routerModules
