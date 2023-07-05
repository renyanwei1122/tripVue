<template>
  <div class="home-categories">
    <template v-for="(item,index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home.js"
import { storeToRefs } from "pinia"

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home-categories {
  display: flex;
  height: 80px;
  overflow-x: auto;
  padding: 0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 70px;
    flex-shrink: 0;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>