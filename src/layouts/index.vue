<template>
  <BasicLayout></BasicLayout>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app.ts'
import BasicLayout from '@/layouts/basic-layout/index.vue'

defineOptions({
  name: 'ProLayout',
})
const appStore = useAppStore()
</script>
<style scoped lang="scss"></style>
