import { defineStore } from 'pinia'
import { theme as antdTheme } from 'ant-design-vue/es'
import globalSetting from '@/config/global-setting.ts'
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import { LayoutSetting } from '@/layouts/basic/typing.ts'

export const useAppStore = defineStore('app', () => {
  const layoutSetting = reactive<LayoutSetting>(globalSetting)
  // 加上 any就是解决编辑器无法序列化过长的类型
  const themeConfig = reactive<ThemeConfig | any>({
    algorithm: [antdTheme.defaultAlgorithm],
    token: {
      colorBgContainer: '#fff',
      colorPrimary: layoutSetting.colorPrimary,
    },
    components: {},
  })
  const toggleCollapsed = (collapsed: boolean) => {
    layoutSetting.collapsed = collapsed
  }
  return { layoutSetting, theme: themeConfig, toggleCollapsed }
})
