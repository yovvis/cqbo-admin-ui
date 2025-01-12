<template>
  <a-menu
    v-model:selectedKeys="currentKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    theme="light"
    :items="menuItems"
    @click="doMenuClick"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { filterRoutes, getMenuItems } from '@/store/menuStore.ts'
import routes from '@/router/routes.ts'
import { useRoute, useRouter } from 'vue-router'

// 菜单项
const menuItems = computed(() => {
  const visibleRoutes = filterRoutes(routes)
  return getMenuItems(visibleRoutes)
})
const router = useRouter()
const route = useRoute()
// 当前要高亮的菜单项
const currentKeys = ref<string[]>([])
const openKeys = ref<string[]>([])
// 监听路由变化，更新高亮菜单项
router.afterEach((to) => {
  currentKeys.value = [to.path]
})
const selectKeys = () => {
  currentKeys.value.push(route.path)
}
// 高亮二级菜单
const setMenuOpen = (result: any) => {
  for (let i = 0; i < result.length; i++) {
    if (result[i].children) {
      for (let j = 0; j < result[i].children.length; j++) {
        if (result[i].children[j].path === route.path) {
          openKeys.value = [result[i].path]
        }
      }
    }
  }
}
onMounted(() => {
  selectKeys()
  setMenuOpen(routes)
})

// 路由跳转事件
const doMenuClick = (e: object) => {
  const { key } = e as { key: string }
  router.push({
    path: key,
  })
}
</script>

<style scoped lang="scss"></style>
