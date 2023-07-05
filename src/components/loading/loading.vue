<template>
  <div class="loading" 
  @click="loadingClick"
  v-if="mainStore.isshowLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/store/modules/main";


const mainStore = useMainStore()
const loadingClick = () => {
  mainStore.isshowLoading = false
}
</script>

<style lang="less" scoped>
.loading {
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0,0,0,0.2);

  .bg {
    width: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("@/assets/img/home/loading-bg.png") 0 0 / 100% 100%;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 9px;
    }
  }
}
</style>