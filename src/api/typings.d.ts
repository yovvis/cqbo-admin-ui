declare namespace API {
  type BaseResponse = {
    code?: number
    data?: Record<string, any>
    message?: string
  }

  type BaseResponseBoolean = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseListMenuVO = {
    code?: number
    data?: MenuVO[]
    message?: string
  }

  type BaseResponseListSelectItem = {
    code?: number
    data?: SelectItem[]
    message?: string
  }

  type BaseResponseLoginUserVO = {
    code?: number
    data?: LoginUserVO
    message?: string
  }

  type BaseResponseLong = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponsePageMenu = {
    code?: number
    data?: PageMenu
    message?: string
  }

  type BaseResponsePageRoleVO = {
    code?: number
    data?: PageRoleVO
    message?: string
  }

  type BaseResponsePageUser = {
    code?: number
    data?: PageUser
    message?: string
  }

  type BaseResponsePageUserVO = {
    code?: number
    data?: PageUserVO
    message?: string
  }

  type BaseResponseUser = {
    code?: number
    data?: User
    message?: string
  }

  type BaseResponseUserVO = {
    code?: number
    data?: UserVO
    message?: string
  }

  type DeleteRequest = {
    /** id */
    id?: number
  }

  type getUserByIdParams = {
    id: number
  }

  type getUserVOByIdParams = {
    id: number
  }

  type LoginUserVO = {
    /** id */
    id?: number
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 会员编号 */
    vipNumber?: number
    /** 编辑时间 */
    editTime?: string
    /** 创建时间 */
    createTime?: string
    /** 更新时间 */
    updateTime?: string
  }

  type Menu = {
    id?: number
    /** 父ID */
    parentId?: number
    /** 菜单名称 */
    title?: string
    /** 权限字段 */
    code?: string
    /** 路由名称 */
    name?: string
    /** 路由path */
    path?: string
    /** 组件路径 */
    url?: string
    /** 国际化 */
    locale?: string
    /** 资源类型：0：目录 1：菜单 2：按钮 */
    type?: number
    /** 菜单可见：0-显示;1-隐藏 */
    visiable?: number
    /** 菜单图标 */
    icon?: string
    /** 上级菜单名称 */
    parentName?: string
    /** 排序 */
    orderNum?: number
    /** 创建时间 */
    createTime?: string
    /** 更新时间 */
    updateTime?: string
    children?: Menu[]
    value?: number
    label?: string
  }

  type MenuAddRequest = {
    /** 父ID */
    parentId?: number
    /** 菜单名称 */
    title?: string
    /** 权限字段 */
    code?: string
    /** 路由名称 */
    name?: string
    /** 路由path */
    path?: string
    /** 组件路径 */
    url?: string
    /** 资源类型：0：目录 1：菜单 2：按钮 */
    type?: number
    /** 菜单可见：0-显示;1-隐藏 */
    visiable?: number
    /** 图标 */
    icon?: string
    /** 父菜单名称 */
    parentName?: string
    /** 创建时间 */
    createTime?: string
    /** 更新时间 */
    updateTime?: string
    /** 子菜单 */
    children?: Menu[]
    /** 值 */
    value?: number
    /** 文本 */
    label?: string
  }

  type MenuQueryRequest = {
    /** 当前页号 */
    current?: number
    /** 页面大小 */
    pageSize?: number
    /** 排序字段 */
    sortField?: string
    /** 默认升序 ascend/descend */
    sortOrder?: string
    /** 菜单名称 */
    title?: string
    /** 权限字段 */
    code?: string
    /** 路由名称 */
    name?: string
    /** 路由path */
    path?: string
    /** 组件路径 */
    url?: string
    /** 资源类型：0：目录 1：菜单 2：按钮 */
    type?: number
    /** 菜单可见：0-显示;1-隐藏 */
    visiable?: number
    /** 图标 */
    icon?: string
    /** 父菜单名称 */
    parentName?: string
  }

  type MenuUpdateRequest = {
    /** id */
    id?: number
    /** 父ID */
    parentId?: number
    /** 菜单名称 */
    title?: string
    /** 权限字段 */
    code?: string
    /** 路由名称 */
    name?: string
    /** 路由path */
    path?: string
    /** 组件路径 */
    url?: string
    /** 资源类型：0：目录 1：菜单 2：按钮 */
    type?: number
    /** 菜单可见：0-显示;1-隐藏 */
    visiable?: number
    /** 图标 */
    icon?: string
    /** 父菜单名称 */
    parentName?: string
    /** 子菜单 */
    children?: Menu[]
    /** 值 */
    value?: number
    /** 文本 */
    label?: string
  }

  type MenuVO = {
    /** 资源视图（脱敏） */
    id?: number
    /** 父ID */
    parentId?: number
    /** 菜单名称 */
    title?: string
    /** 权限字段 */
    code?: string
    /** 路由名称 */
    name?: string
    /** 路由path */
    path?: string
    /** 组件路径 */
    url?: string
    /** 国际化 */
    locale?: string
    /** 资源类型：0：目录 1：菜单 2：按钮 */
    type?: number
    /** 菜单可见：0-显示;1-隐藏 */
    visiable?: number
    /** 图标 */
    icon?: string
    /** 父菜单名称 */
    parentName?: string
    /** 创建时间 */
    createTime?: string
    /** 更新时间 */
    updateTime?: string
    /** 子菜单 */
    children?: Menu[]
    /** 值 */
    value?: number
    /** 文本 */
    label?: string
  }

  type OrderItem = {
    column?: string
    asc?: boolean
  }

  type PageMenu = {
    records?: Menu[]
    total?: number
    size?: number
    current?: number
    orders?: OrderItem[]
    optimizeCountSql?: PageMenu
    searchCount?: PageMenu
    optimizeJoinOfCountSql?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  type PageRoleVO = {
    records?: RoleVO[]
    total?: number
    size?: number
    current?: number
    orders?: OrderItem[]
    optimizeCountSql?: PageRoleVO
    searchCount?: PageRoleVO
    optimizeJoinOfCountSql?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  type PageUser = {
    records?: User[]
    total?: number
    size?: number
    current?: number
    orders?: OrderItem[]
    optimizeCountSql?: PageUser
    searchCount?: PageUser
    optimizeJoinOfCountSql?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  type PageUserVO = {
    records?: UserVO[]
    total?: number
    size?: number
    current?: number
    orders?: OrderItem[]
    optimizeCountSql?: PageUserVO
    searchCount?: PageUserVO
    optimizeJoinOfCountSql?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  type RoleAddRequest = {
    /** 角色名称 */
    roleName?: string
    /** 扩展字段 */
    type?: string
    /** 角色状态 0：正常 1：禁用 */
    status?: number
    /** 备注 */
    remark?: string
  }

  type RoleMenuAddRequest = {
    /** 角色id */
    roleId?: number
    /** 菜单ids */
    list?: number[]
  }

  type RoleQueryRequest = {
    /** 当前页号 */
    current?: number
    /** 页面大小 */
    pageSize?: number
    /** 排序字段 */
    sortField?: string
    /** 默认升序 ascend/descend */
    sortOrder?: string
    /** id */
    id?: number
    /** 角色名称 */
    roleName?: string
    /** 角色状态 0：正常 1：禁用 */
    status?: number
    /** 备注 */
    remark?: string
  }

  type RoleUpdateRequest = {
    /** id */
    id?: number
    /** 角色名称 */
    roleName?: string
    /** 扩展字段 */
    type?: string
    /** 角色状态 0：正常 1：禁用 */
    status?: number
    /** 备注 */
    remark?: string
  }

  type RoleVO = {
    /** id */
    id?: number
    /** id */
    roleName?: string
    /** id */
    remark?: string
    /** 扩展字段 */
    type?: string
    /** id */
    createTime?: string
    /** id */
    updateTime?: string
  }

  type SelectItem = {
    /** 值 */
    value?: number
    /** 文本 */
    label?: string
    /** 是否检查 */
    check?: boolean
  }

  type User = {
    id?: number
    /** 账号 */
    userAccount?: string
    /** 密码 */
    userPassword?: string
    /** 微信开放平台id */
    unionId?: string
    /** 公众号openId */
    mpOpenId?: string
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色：user/admin/ban */
    userRole?: string
    /** 会员编号 */
    vipNumber?: number
    /** 会员兑换码 */
    vipCode?: string
    /** 会员过期时间 */
    vipExpireTime?: string
    /** 分享码 */
    shareCode?: string
    /** 邀请用户id */
    inviteUser?: number
    /** 编辑时间 */
    editTime?: string
    /** 创建时间 */
    createTime?: string
    /** 更新时间 */
    updateTime?: string
    isDelete?: number
  }

  type UserAddRequest = {
    /** 用户昵称 */
    userName?: string
    /** 账号 */
    userAccount?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户角色 */
    userRole?: string
  }

  type UserLoginRequest = {
    /** 账号 */
    userAccount?: string
    /** 密码 */
    userPassword?: string
  }

  type UserQueryRequest = {
    /** 当前页号 */
    current?: number
    /** 页面大小 */
    pageSize?: number
    /** 排序字段 */
    sortField?: string
    /** 默认升序 ascend/descend */
    sortOrder?: string
    /** id */
    id?: number
    /** 用户昵称 */
    userName?: string
    /** 用户账号 */
    userAccount?: string
    /** 简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
  }

  type UserRegisterRequest = {
    /** 账号 */
    userAccount?: string
    /** 首次输入密码 */
    userPassword?: string
    /** 二次输入密码 */
    checkPassword?: string
  }

  type UserUpdateMyRequest = {
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 简介 */
    userProfile?: string
  }

  type UserUpdateRequest = {
    /** id */
    id?: number
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
  }

  type UserVO = {
    /** id */
    id?: number
    /** 账号 */
    userAccount?: string
    /** 用户昵称 */
    userName?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 创建时间 */
    createTime?: string
  }
}
