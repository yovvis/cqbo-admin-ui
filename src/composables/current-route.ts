import router from '@/router'
import { useLayoutMenuStore } from '@/store/layout-menu.ts'

export function useCurrentRoute() {
  const currentRoute = router.currentRoute
  const layoutMenuStore = useLayoutMenuStore()
  const { menuDataMap } = storeToRefs(layoutMenuStore)
  const pathsKeys = menuDataMap.value?.keys()
  const currentPath = currentRoute.value.path
  // router.
  // 通过校验判断是否在menuItem中
  console.log('currentPath', currentPath, pathsKeys)
  return {
    currentRoute,
  }
}
