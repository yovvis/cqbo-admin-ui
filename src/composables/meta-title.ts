import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

export function useMetaTitle(route: RouteRecordRaw | RouteLocationNormalizedLoaded) {
  const { title, locale } = route.meta ?? {}
  if (title) {
    useTitle(title)
  }
}
