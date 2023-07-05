import  { defineStore } from "pinia";
import { formatMonthDay,dateDiff }  from "@/utils/format_data.js"
import { ref } from "vue"

const nowdate = new Date()
const startDate = ref(formatMonthDay(nowdate))
const endDate = ref(formatMonthDay(nowdate.setDate(new Date().getDate() + 1)))

const useMainStore = defineStore("main",{
  state: () => ({
    
      token: "",
  
      startDate:startDate,
      endDate:endDate,

      isshowLoading:false
    
  })
})

export default useMainStore
















































