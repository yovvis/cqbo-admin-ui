<script setup lang="ts">
import { useAppStore } from '@/store/app.ts'
import { useCompConsumer } from '@/composables/comp-consumer.ts'
import { useMultiTab } from '@/store/multiTab.ts'

defineOptions({
  name: 'CustomRouteView',
})

const appStore = useAppStore()
const { layoutSetting } = storeToRefs(appStore)
const multiTabStore = useMultiTab()
const { cacheList } = storeToRefs(multiTabStore)
const { getComp } = useCompConsumer()
</script>

<template>
  <RouterView>
    <template #default="{ Component, route }">
      <Transition appear :name="layoutSetting.animationName" mode="out-in">
        <KeepAlive v-if="layoutSetting.keepAlive" :include="[...cacheList]">
          <component :is="getComp(Component)" :key="route.fullPath" />
        </KeepAlive>
        <component :is="Component" v-else :key="route.fullPath" />
      </Transition>
    </template>
  </RouterView>
</template>
