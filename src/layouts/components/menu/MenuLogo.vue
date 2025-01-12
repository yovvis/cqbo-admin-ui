<template>
  <router-link to="/">
    <div class="title-bar">
      <img class="logo" src="@/assets/vue.svg" alt="logo" />
      <span class="title">亿智狐管理系统</span>
    </div>
  </router-link>
</template>
<script setup lang="ts">


</script>

<style scoped lang="scss">
.title-bar {
  display: flex;
  align-items: center;

  .title {
    color: $black-color;
    font-size: 16px;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 12px;
  }
}
</style>
