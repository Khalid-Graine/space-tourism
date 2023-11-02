import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from './data'

export const useAllDataStore = defineStore('alldata', {
  state: () => (data),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
      
    },
    test() {
      console.log(this.count)
    }
  },
})