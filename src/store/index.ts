import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', {
  state: () => ({
    auth: false
  })
})
