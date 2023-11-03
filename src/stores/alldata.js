import { defineStore } from 'pinia'
import {data} from './data'

export const useAllDataStore = defineStore({
  id: 'khalid',
  state: () => ({ 
    destinations:data.destinations,
   crew: data.crew,
    technology: data.technology,
    
  }),
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