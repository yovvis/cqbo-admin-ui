<template>
  <div class="fui-toolbar">
    <a-flex justify="space-between">
      <h3>菜单管理</h3>
      <a-space>
        <a-button
          type="primary"
          :icon="h(Icon, { icon: 'ri:add-line', width: '1.3em' })"
          @click="add"
          >新增
        </a-button>
        <a-button danger :icon="h(Icon, { icon: 'ri:delete-bin-6-line', width: '1.3em' })">
          删除选中
        </a-button>
      </a-space>
    </a-flex>
  </div>
  <template v-if="true">
    <div class="fui-form">
      <a-form class="" layout="inline" :model="searchParams" @finish="doSearch">
        <a-form-item label="路由名称">
          <a-input v-model:value="searchParams.name" placeholder="输入路由名称" allow-clear />
        </a-form-item>
        <a-form-item label="路由路径">
          <a-input v-model:value="searchParams.path" placeholder="输入路由路径" allow-clear />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button
              type="primary"
              html-type="submit"
              :icon="h(Icon, { icon: 'ri:search-line', width: '1.3em' })"
              @click="doSearch"
              >搜索
            </a-button>
            <a-button
              class="btn-reset"
              html-type="reset"
              :icon="h(Icon, { icon: 'ri:reset-right-fill', width: '1.3em' })"
              @click="doClear"
              >重置
            </a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </div>
  </template>
  <div class="fui-content">
    <a-table
      row-key="id"
      size="middle"
      :data-source="dataList"
      :columns="columns"
      :pagination="pagination"
      @change="doTableChange"
      bordered
      :scroll="{ y: 'calc(100vh - 420px)' }"
      :row-selection="rowSelection"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'type'">
          <a-tag :color="menuColors[record?.type]">{{ menuLabels[record?.type] }}</a-tag>
        </template>
        <template v-if="column.dataIndex === 'createTime'">
          {{ dayjs(record.createTime).format('YYYY-MM-DD') }}
        </template>
        <template v-if="column.dataIndex === 'updateTime'">
          {{ dayjs(record.updateTime).format('YYYY-MM-DD') }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button
            class="btn-edit-rol"
            type="text"
            size="small"
            :icon="h(Icon, { icon: 'ri:edit-2-line', width: '1.3em' })"
          ></a-button>
          <a-button
            type="text"
            danger
            size="small"
            :icon="h(Icon, { icon: 'ri:delete-bin-6-line', width: '1.3em' })"
          ></a-button>
        </template>
      </template>
    </a-table>
  </div>
  <FDialog :open="showAdd" @onClose="addColseCallBack" @onConfirm="addConfirmCallBack"></FDialog>
</template>

<script setup lang="ts">
import { deleteMenu, listPermissionPage } from '@/api/menuController.ts'
import { message, Table } from 'ant-design-vue'
import dayjs from 'dayjs'
import { computed, h, ref, unref } from 'vue'
import { TableRowSelection } from 'ant-design-vue/es/table/interface'
import { Icon } from '@iconify/vue'
// region 非改动部分
// 定  义 columns
const columns: any = [
  {
    title: '序号',
    align: 'center',
    width: 60,
    customRender: ({ index }: { index: number }) => {
      return `${(Number(searchParams.current) - 1) * Number(searchParams.pageSize) + index + 1}`
    },
  },
  {
    dataIndex: 'title',
    align: 'center',
    title: '菜单名称',
    width: 150,
  },
  {
    dataIndex: 'type',
    align: 'center',
    title: '资源类型',
    width: 120,
  },
  {
    dataIndex: 'name',
    align: 'center',
    title: '路由名称',
    width: 150,
  },
  {
    dataIndex: 'path',
    align: 'center',
    title: '路由路径',
    width: 180,
  },
  {
    dataIndex: 'url',
    align: 'center',
    title: '组件路径',
  },
  {
    dataIndex: 'parentName',
    align: 'center',
    title: '父菜单名称',
    width: 120,
  },
  {
    dataIndex: 'createTime',
    align: 'center',
    title: '创建时间',
    width: 120,
  },
  {
    dataIndex: 'updateTime',
    align: 'center',
    title: '更新时间',
    width: 120,
  },
  {
    title: '操作',
    align: 'center',
    key: 'action',
    width: 120,
  },
]
// 数  据 list
const dataList = ref<any>([])
// 总  数 count
const total = ref(0)
// 搜  索 searchParam
const searchParams = reactive<API.MenuQueryRequest>({
  current: 1,
  pageSize: 10,
  sortField: 'createTime',
  sortOrder: 'ascend',
})
// 搜  索 search
const doSearch = () => {
  searchParams.current = 1
  fetchData()
}
// 清  理 clear
const doClear = () => {
  const retainFields = new Set(['current', 'pageSize', 'sortField', 'sortOrder'])
  // 取消所有对象的值
  Object.keys(searchParams).forEach((key) => {
    if (!retainFields.has(key)) {
      searchParams[key as keyof API.MenuQueryRequest] = undefined // 设置为空字符串、null、或者其他你需要的默认值
    }
  })
  doSearch()
}
// 分  页 page
const pagination = computed(() => {
  return {
    current: searchParams.current,
    pageSize: searchParams.pageSize,
    total: total.value,
    showSizeChanger: true,
    showTotal: (total: number) => `共 ${total} 条`,
  }
})
// 下一页 nextPage
const doTableChange = (page: any) => {
  searchParams.current = page.current
  searchParams.pageSize = page.pageSize
  fetchData()
}
// 加  载 mounted
onMounted(() => {
  fetchData()
})
// 斑  马 zebra
// const zebra = (_record, index) => {
//   return index % 2 === 1 ? 'table-striped' : null
// }
// 选  择 select
const selectedRowKeys = ref<API.MenuVO['id'][]>([])
const onSelectChange = (changableRowKeys: number[]) => {
  console.log('已选择的列', changableRowKeys)
  selectedRowKeys.value = changableRowKeys
}
const rowSelection = computed(() => {
  return {
    selectedRowKeys: unref(selectedRowKeys),
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
  }
}) as TableRowSelection<any>
// endregion

// region 业务操作
const menuColors = reactive<any>({
  [0]: 'green',
  [1]: 'blue',
  [2]: 'orange',
})
const menuLabels = reactive<any>({
  [0]: '目录',
  [1]: '菜单',
  [2]: '按钮',
})
// 初始化数据
const fetchData = async () => {
  const res = await listPermissionPage({
    ...searchParams,
  })
  if (res.data.code === 0 && res.data.data) {
    dataList.value = res.data.data.records ?? []
    total.value = Number(res.data.data.total) ?? 0
  } else {
    message.error('获取数据失败，' + res.data.message)
  }
}
// 新增
const showAdd = ref(false)
const add = () => {
  showAdd.value = true
}
const addColseCallBack = () => {
  showAdd.value = false
}
const addConfirmCallBack = () => {}

// 删除一条数据
const doDelete = async (id: number | undefined) => {
  if (!id) {
    return
  }
  const res = await deleteMenu({ id })
  if (res.data.code === 0) {
    message.success('删除成功')
    // 刷新数据
    fetchData()
  } else {
    message.error('删除失败')
  }
}

// endregion
</script>

<style scoped lang="scss">
//:deep(.ant-table-wrapper .ant-table-header) {
//  position: sticky;
//  top: 0;
//  z-index: 3;
//}

//:deep(.ant-table-wrapper .ant-table-sticky-scroll) {
//  position: sticky;
//  bottom: 0;
//  z-index: 3;
//}
</style>
