import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLoginUser } from '@/api/authController.ts'
import { getMenuList } from '@/api/menuController.ts'
import { generateFlatRoutes, generateRoutes, generateTreeRoutes } from '@/router/generate-route.ts'
import { MenuData } from '@/layouts/basic-layout/typing.ts'
import { DYNAMIC_LOAD_WAY, DynamicLoadEnum } from '@/utils/constant.ts'
import { rootRoute } from '@/router/constant.ts'

export const useUserStore = defineStore('user', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '游客123',
  })

  /**
   * 远程获取登录用户信息
   */
  async function fetchLoginUser() {
    await getLoginUser().then((res) => {
      if (res.data.code === 0 && res.data.data) {
        loginUser.value = res.data.data
      } else {
        loginUser.value = { userRole: '0' }
      }
    })
  }

  /**
   * 单独设置用户信息
   *
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  const menuData = shallowRef<MenuData>([])
  const routerData = shallowRef()

  const generateDynamicRoutes = async () => {
    const dynamicLoadWay =
      DYNAMIC_LOAD_WAY === DynamicLoadEnum.BACKEND ? getMenuRoutes : generateRoutes
    const { menuData: treeMenuData, routeData } = await dynamicLoadWay()

    menuData.value = treeMenuData

    routerData.value = {
      ...rootRoute,
      children: generateFlatRoutes(routeData),
    }
    return routerData.value
  }
  const getMenuRoutes = async () => {
    let data: MenuData | undefined = []
    await getMenuList().then((res) => {
      if (res.data.code === 0 && res.data.data) {
        data = res.data.data
      }
    })
    return generateTreeRoutes(data)
  }

  return {
    loginUser,
    fetchLoginUser,
    setLoginUser,
    menuData,
    routerData,
    generateDynamicRoutes,
  }
})
