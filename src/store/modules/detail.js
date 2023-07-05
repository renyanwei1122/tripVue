import { getDetailInfos } from "@/service/modules/detail.js"
import { defineStore } from "pinia"

const useDetailStore = defineStore("detail",{
  state: () => ({
    detailInfos: {}
  }),

  actions: {
    async fetchDetailInfoData(houseId) {
      const res = await getDetailInfos(houseId)
      this.detailInfos = res.data
    }
  }
})

export default useDetailStore