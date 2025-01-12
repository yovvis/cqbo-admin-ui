import { defineStore } from 'pinia'
import { theme as antdTheme } from 'ant-design-vue/es'
import { LayoutSetting } from '../../types/layout.ts'
import globalSetting from '@/config/global-setting.ts'
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

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
  return { layoutSetting, theme: themeConfig }
})
