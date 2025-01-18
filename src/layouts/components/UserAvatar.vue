<template>
  <div></div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user.ts'
import { message } from 'ant-design-vue'
import { logout } from '@/api/authController.ts'

const userStore = useUserStore()
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
      await router.push('/user/login')
    } else {
      message.error('退出登录失败，' + res.data.message)
    }
  }
}
</script>
