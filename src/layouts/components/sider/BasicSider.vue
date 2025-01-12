<template>
  <div id="basic-sider">
    <a-layout-sider theme="light" width="190" breakpoint="lg" collapsed-width="0">
      <MenuLogo></MenuLogo>
      <MenuBar></MenuBar>
    </a-layout-sider>
  </div>
</template>

<script setup lang="ts">
import MenuLogo from '@/layouts/components/menu/MenuLogo.vue'
import MenuBar from '@/layouts/components/menu/MenuBar.vue'
</script>

<style scoped lang="scss">
#basic-sider {
  background: $fui-color-white;
  border-right: 0.5px solid #eee;
  padding-top: 8px;

  :deep(.ant-layout-sider-zero-width-trigger) {
    //top: 100% !important;
    //inset-inline-end: -20px !important;
    background-color: $fui-color-mint !important;
  }

  .ant-layout-sider {
    background: none;
  }
}
</style>
