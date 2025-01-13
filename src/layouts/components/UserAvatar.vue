<script setup lang="ts">
import { LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/store/user.ts'
import { useMultiTab } from '@/store/multiTab.ts'
import { message } from 'ant-design-vue'
import { useLayoutMenuStore } from '@/store/layout-menu.ts'
import { logout } from '@/api/authController.ts'

const userStore = useUserStore()
const multiTabStore = useMultiTab()
const layoutMenuStore = useLayoutMenuStore()
const router = useRouter()
const { loginUser } = storeToRefs(userStore)

async function handleClick({ key }: any) {
  if (key === 'logout') {
    const res = await logout()
    if (res.data.code === 0) {
      userStore.setLoginUser({
        userName: '未登录',
      })
      message.success('退出登录成功')
      await router.push('/user/login').then(() => {
        multiTabStore.clear()
        layoutMenuStore.clear()
      })
    } else {
      message.error('退出登录失败，' + res.data.message)
    }
  }
}
</script>

<template>
  <a-dropdown>
    <span
      hover="bg-[var(--hover-color)]"
      flex
      items-center
      h-48px
      px-12px
      cursor-pointer
      class="transition-all-300"
    >
      <a-avatar :src="loginUser?.userAvatar" mr-8px size="small" />
      <span class="anticon">{{ loginUser?.userName }}</span>
    </span>
    <template #overlay>
      <a-menu @click="handleClick">
        <a-menu-item key="0">
          <template #icon>
            <UserOutlined />
          </template>
          <RouterLink to="/account/center"> 个人中心</RouterLink>
        </a-menu-item>
        <a-menu-item key="1">
          <template #icon>
            <ProfileOutlined />
          </template>
          <RouterLink to="/account/settings"> 个人设置</RouterLink>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="logout">
          <template #icon>
            <LogoutOutlined />
          </template>
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
