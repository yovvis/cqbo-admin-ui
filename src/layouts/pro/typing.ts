import type { ExtractPropTypes } from 'vue'
import { arrayType, booleanType, eventType, numberType, stringType } from '@v-c/utils'

export type CheckedType = boolean | string | number
export type MenuData = MenuDataItem[]

export type Key = string | number

export interface MenuDataItem extends API.MenuVO {
  component?: string
  children?: MenuDataItem[]
  affix?: boolean
  parentKeys?: string[]
  hideInBreadcrumb?: boolean
  hideChildrenInMenu?: boolean
  keepAlive?: boolean
  matched?: MenuDataItem[]
  target?: '_blank' | '_self' | '_parent'
}

export type LayoutType = 'side' | 'top'

export type ThemeType = 'light' | 'dark'

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
  layout: stringType<LayoutType>('side'),
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

export type ProLayoutProps = Partial<ExtractPropTypes<typeof proLayoutProps>>
