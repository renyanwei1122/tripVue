import { defineStore } from "pinia";
import { getFavorData } from "@/service/modules/favor";

const useFavorStore = defineStore("favor", {
  state: () => ({
    favorList: []
    
  }),

  actions: {
    async fetchFavorListData() {
      const res = await getFavorData()
      this.favorList = res.data.data.items
    }
  }
})

export default useFavorStore