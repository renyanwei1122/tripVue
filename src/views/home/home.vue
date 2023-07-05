<template>
  <div class="home">
    <navbar/>
    <binner/>
    <searchbox/>
    <homeCategories/>
    <div class="search-bar" v-if="isShowSearch">
      <searchBarVue 
      :start-Date="'01.20'"
      :end-Date="'01.21'"/>
    </div>
    <homeContent />
  </div>
  
</template>

<script setup>
import { watch,ref, computed } from "vue"
import navbar from "@/views/home/cpns/navbar.vue"
import binner from "@/views/home/cpns/binner.vue"
import searchbox from "@/views/home/cpns/search-box.vue"
import useHomeStore from "@/store/modules/home.js"
import homeCategories from "@/views/home/cpns/home-categories.vue"
import homeContent from "@/views/home/cpns/home-content.vue"
import useScroll from "@/hooks/useScroll"
import searchBarVue from "@/components/search-bar/search-bar.vue"



const homeStore = useHomeStore()
homeStore.fetchHotSuggest()
homeStore.fetchCatagories()
homeStore.fetchHouseList()

const houselistClick = () => {
  homeStore.fetchHouseList()
}

const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom,(newValue) => {
  if(newValue) {
    homeStore.fetchHouseList().then(() => {
    isReachBottom.value = false
  })
  }
  
})

const isShowSearch = computed(() => {
  return scrollTop.value >= 360
})

</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  background-color: #fff;
  padding: 16px 16px 10px;
}
</style>