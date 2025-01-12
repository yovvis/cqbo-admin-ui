<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useAppStore } from '@/store/app.ts'

const appStore = useAppStore()
const { theme } = storeToRefs(appStore)
</script>
<style scoped lang="scss"></style>
