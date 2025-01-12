<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <a-row :wrap="false">
      <a-col flex="280px">
        <a-space class="left-search">
          <a-input
            v-model:value.lazy="searchItem"
            autofocus
            placeholder="搜索文档"
            :style="{ width: '220px' }"
          >
            <template #prefix>
              <Icon icon="ri:search-line"></Icon>
            </template>
          </a-input>
        </a-space>
      </a-col>
      <a-col flex="auto">
        <a-space class="middle-icon" :size="10">
          <a-button
            type="link"
            href="https://github.com/yovvis/cqbo"
            style="color: #000"
            target="_blank"
          >
            <Icon icon="ri:github-fill" width="2.0em"></Icon>
          </a-button>
          <FScreen></FScreen>
        </a-space>
      </a-col>
      <a-col flex="78px">
        <div v-if="userStore.loginUser.id">
          <a-dropdown placement="bottom">
            <a-avatar
              :src="userStore.loginUser?.userAvatar ?? notLoginUser"
              size="large"
            ></a-avatar>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="doDropItemClick('profile')">
                  <span>用户中心 </span>
                </a-menu-item>
                <a-menu-item @click="doDropItemClick('logout')">
                  <span>退出登录 </span></a-menu-item
                >
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div v-else>
          <a-button type="primary" href="/user/login">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script setup lang="ts">
import notLoginUser from '@/assets/notLogin.png'
import { useUserStore } from '@/store/userStore.ts'
import { logout } from '@/api/authController.ts'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const userStore = useUserStore()
// todo 获取登录
userStore.fetchLoginUser()
const router = useRouter()
const doDropItemClick = async (key: string) => {
  if (key === 'logout') {
    const res = await logout()
    if (res.data.code === 0) {
      userStore.setLoginUser({
        userName: '未登录',
      })
      message.success('退出登录成功')
      await router.push('/user/login')
    } else {
      message.error('退出登录失败，' + res.data.message)
    }
  }
  if (key === 'profile') {
    router.push('/user/profile')
  }
}
const searchItem = ref('')
</script>

<style scoped lang="scss">
.left-search {
  margin-left: 12px;
}

.middle-icon {
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;

  :deep(.ant-space-item) {
    svg {
      vertical-align: middle;
    }
  }
}
</style>
