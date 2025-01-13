<template>
  <BasicLayout
    :collapsed="layoutSetting.collapsed"
    :theme="layoutSetting.theme"
    :menu-data="userStore.menuData"
    v-bind="layoutProps"
    :selected-keys="selectedKeys"
    :open-keys="layoutSetting.layout === 'top' ? [] : openKeys"
    :copyright="layoutSetting.copyright"
    :is-mobile="isMobile"
    :logo="layoutSetting.logo"
    :title="layoutSetting.title"
    :accordion-mode="layoutSetting.accordionMode"
    :left-collapsed="layoutSetting.leftCollapsed"
    :header-height="layoutSetting.headerHeight"
    @update:open-keys="layoutMenu.handleOpenKeys"
    @update:selected-keys="layoutMenu.handleSelectedKeys"
    @update:collapsed="appStore.toggleCollapsed"
  >
    <template #headerActions>
      <UserAvatar />
      <template v-if="!isMobile"></template>
    </template>
    <template #contentPrefix>
      <MultiTab v-if="layoutSetting.multiTab" />
    </template>
    <template #renderFooterLinks />
    <a-watermark
      class="h-full w-full flex flex-col flex-1"
      :content="layoutSetting.watermark ? (layoutSetting.title ?? 'CQBO ') : ' '"
    >
      <RouteView />
    </a-watermark>
  </BasicLayout>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app.ts'
import { useLayoutMenuStore } from '@/store/layout-menu.ts'
import { useUserStore } from '@/store/user.ts'
import { pick } from '@v-c/utils'
import BasicLayout from '@/layouts/basic/index.vue'
import RouteView from './components/RouteView.vue'
import UserAvatar from '@/layouts/components/UserAvatar.vue'
import MultiTab from '@/layouts/components/MultiTab.vue'

defineOptions({
  name: 'ProLayout',
})
const appStore = useAppStore()
const userStore = useUserStore()
const layoutMenu = useLayoutMenuStore()
const { layoutSetting } = storeToRefs(appStore)
const { selectedKeys, openKeys } = storeToRefs(layoutMenu)
const { isMobile } = { isMobile: false }
const layoutProps = computed(() =>
  pick(appStore.layoutSetting, [
    'fixedHeader',
    'fixedSider',
    'splitMenus',
    'menuHeader',
    'header',
    'menu',
    'layout',
    'footer',
    'contentWidth',
    'compactAlgorithm',
  ]),
)
</script>
<style scoped lang="scss"></style>
