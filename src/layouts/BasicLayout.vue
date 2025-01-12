<template>
  <div id="basic-layout">
    <a-layout style="height: 100vh">
      <BasicSider class="global-sider"></BasicSider>
      <a-layout>
        <BasicHeader></BasicHeader>
        <a-layout-content :style="{ margin: '16px 12px 0' }">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          UI ©2025 Created by
          <a-button type="link" href="https://tenyon.cn" target="_blank">TENYON</a-button>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import BasicSider from '@/layouts/components/sider/BasicSider.vue'
import BasicHeader from '@/layouts/components/header/BasicHeader.vue'
</script>
<style scoped lang="scss">
#basic-layout {
  overflow-y: hidden;
  :deep(.ant-layout-content) {
    padding: 10px;
    height: 100%;
    background: $fui-color-white;
  }
}
</style>
