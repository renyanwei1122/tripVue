import { onMounted,onUnmounted,ref } from "vue"
import throttle from "@/utils/throttle.js"

export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false)
  const scrollHeight = ref(0) 
  const scrollTop = ref(0)
  const clientHeight = ref(0)


  
  const scrollListenerHandler =throttle(() => {

    if(el === window) {
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
      clientHeight.value = document.documentElement.clientHeight
    } else {
      scrollHeight.value = el.scrollHeight
      scrollTop.value = el.scrollTop
      clientHeight.value = el.clientHeight
    }
    
    if(clientHeight.value + scrollTop.value >= scrollHeight.value-50) {
      
      isReachBottom.value = true
    }
  },1000) 

  onMounted(() => {
    if(elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll",scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener("scroll",scrollListenerHandler)
  })
  return { isReachBottom, scrollHeight, scrollTop, clientHeight}
}