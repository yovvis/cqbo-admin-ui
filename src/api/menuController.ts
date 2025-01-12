// @ts-ignore
/* eslint-disable */
import request from '@/request.ts'

/** 添加资源 POST /rest/sys/menu/add */
export async function addMenu(body: API.MenuAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/rest/sys/menu/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 删除资源 POST /rest/sys/menu/delete */
export async function deleteMenu(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/rest/sys/menu/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 分页获取资源列表 POST /rest/sys/menu/listPage */
export async function listMenuPage(body: API.MenuQueryRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponsePageMenuVO>('/rest/sys/menu/listPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 修改资源 POST /rest/sys/menu/update */
export async function updateMenu(body: API.MenuUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponse>('/rest/sys/menu/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
