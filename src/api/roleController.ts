// @ts-ignore
/* eslint-disable */
import request from '@/request.ts'

/** 新增角色 POST /rest/sys/role/add */
export async function add(body: API.RoleAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/rest/sys/role/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 删除角色数据 POST /rest/sys/role/delete */
export async function deleteUsingPost(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/rest/sys/role/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 批量删除角色 POST /rest/sys/role/deleteByIds */
export async function deleteByIds(body: number[], options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/rest/sys/role/deleteByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 分页获取角色列表 POST /rest/sys/role/listPage */
export async function listRolePage(body: API.RoleQueryRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponsePageRoleVO>('/rest/sys/role/listPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 保存角色菜单 POST /rest/sys/role/saveRoleMenu */
export async function saveRoleMenu(body: API.RoleMenuAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/rest/sys/role/saveRoleMenu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 角色下拉列表 GET /rest/sys/role/selectRoleList */
export async function selectRoleList(options?: { [key: string]: any }) {
  return request<API.BaseResponseListSelectItem>('/rest/sys/role/selectRoleList', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 更新角色 POST /rest/sys/role/update */
export async function update(body: API.RoleUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/rest/sys/role/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
