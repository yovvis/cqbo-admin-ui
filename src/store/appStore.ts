import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const theme = 'light'
  return { theme }
})
