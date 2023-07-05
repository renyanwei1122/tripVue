import { defineStore } from 'pinia'
import hyRequest from "@/service/request/index.js"


const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houselist: [],
    currentpage: 1
  }),
  actions: {
    async fetchHotSuggest() {
      const res = await hyRequest.get({url: "/home/hotSuggests"})
      this.hotSuggests = res.data
    },
    async fetchCatagories() {
      const res = await hyRequest.get({url: "/home/categories"})
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await hyRequest.get({
        url: "/home/houselist",
        params: {
          page: this.currentpage
        }
      })
      this.houselist.push(...res.data)
      this.currentpage++
    }
  }
})

export default useHomeStore