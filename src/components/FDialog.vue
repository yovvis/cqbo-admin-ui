<template>
    <a-modal
      :open="props.open"
      :title="props.title"
      :width="props.width"
      @cancel="onClose"
      :destroyOnClose="true"
    >
      <template #footer>
        <a-button danger @click="onClose">取消</a-button>
        <a-button type="primary" key="submit" :loading="loading" @click="onConfirm">确认</a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  title?: string
  open?: boolean
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  open: false,
  width: 650,
  height: 250,
})
console.log(props)
const emit = defineEmits(['onClose', 'onConfirm'])
const loading = ref<boolean>(false)

// 关闭弹出
const onClose = () => {
  emit('onClose')
}

// 确认弹窗
const onConfirm = () => {
  emit('onConfirm')
}
</script>

<style scoped lang="scss"></style>
