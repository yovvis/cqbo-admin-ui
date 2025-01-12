export interface LayoutSetting {
  title?: string
  logo?: string
  theme: 'light' | 'dark' | 'inverted'
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
