import type { ExtractPropTypes } from 'vue'
import { arrayType, booleanType, eventType, numberType, stringType } from '@v-c/utils'

export type CheckedType = boolean | string | number
export type MenuData = API.MenuVO[]

export type Key = string | number

export type LayoutType = 'side' | 'top'

export type ThemeType = 'light' | 'dark' | 'inverted'

export type ContentWidth = 'Fluid' | 'Fixed'

export interface MenuSelectEvent {
  item: any
  key: string
  selectedKeys: string[]
}

const proLayoutEvents = {
  'onUpdate:openKeys': eventType<(val: string[]) => void>(),
  'onUpdate:selectedKeys': eventType<(val: string[]) => void>(),
  onMenuSelect: eventType<(data: MenuSelectEvent) => void>(),
}

export const proLayoutProps = {
  layout: stringType<LayoutType>('mix'),
  logo: stringType(),
  title: stringType(),
  collapsedWidth: numberType(48),
  siderWidth: numberType(234),
  headerHeight: numberType<number>(48),
  menuData: arrayType<MenuData>(),
  fixedHeader: booleanType<boolean>(false),
  fixedSider: booleanType<boolean>(true),
  splitMenus: booleanType(),
  collapsed: booleanType<boolean>(false),
  leftCollapsed: booleanType<boolean>(false),
  theme: stringType<ThemeType>('light'),
  onCollapsed: eventType<(collapsed: boolean) => void>(),
  isMobile: booleanType(),
  contentWidth: stringType<ContentWidth>(),
  header: booleanType<boolean>(true),
  footer: booleanType<boolean>(true),
  menu: booleanType<boolean>(true),
  menuHeader: booleanType<boolean>(true),
  // 展开菜单
  openKeys: arrayType<string[]>(),
  // 选中菜单
  selectedKeys: arrayType<string[]>(),
  copyright: stringType(),
  ...proLayoutEvents,
}

export interface LayoutSetting {
  title?: string
  logo?: string
  theme: ThemeType
  collapsed: boolean
  drawerVisible: boolean
  colorPrimary?: string
  layout?: string
  contentWidth?: 'Fluid' | 'Fixed'
  fixedHeader?: boolean
  fixedSider?: boolean
  splitMenus?: boolean
  watermark?: boolean
  header?: boolean
  footer?: boolean
  menu?: boolean
  menuHeader?: boolean
  colorWeak?: boolean
  colorGray?: boolean
  multiTab?: boolean
  multiTabFixed?: boolean
  headerHeight?: number
  copyright?: string
  keepAlive?: boolean
  accordionMode?: boolean
  leftCollapsed?: boolean
  compactAlgorithm?: boolean
  animationName?: 'none' | 'slide-fadein-up' | 'slide-fadein-right' | 'zoom-fadein' | 'fadein'
}

export type ProLayoutProps = Partial<ExtractPropTypes<typeof proLayoutProps>>
