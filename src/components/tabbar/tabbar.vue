<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item" 
        @click="$event => itemClick(index,item)" 
        :class="{active: currentIndex===index}">
      <img v-if="currentIndex != index" :src="getAssetURL(item.image)" alt="">
      <img v-else :src="getAssetURL(item.imageActive)" alt="">
      <span class="text">{{ item.text }}</span>
    </div>
    </template>
  </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabdata.js"
import { useRouter } from "vue-router"
import { getAssetURL } from "@/utils/load_url.js"
import { ref } from "vue"

const router = useRouter()
const currentIndex = ref(0)
const itemClick = (index,item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  width: 100%;
  background-color: #fff;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color:var(--primary-color);
    }
    img {
      width: 36px;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
   }
  }
  
  
}
</style>