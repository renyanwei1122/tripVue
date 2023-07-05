<template>
  <div class="tabbar">
    <div class="trip">
      <div class="left" @click="tripBack">&lt; 旅途</div>
      <div class="inner">
        <template v-for="(item,index) in ['我的收藏','浏览历史']" :key="index">
          <div class="favor" @click="innerClick(index)" :class="{active:currentIndex===index}">{{ item }}</div>
        </template>
      </div>
      <div class="right">
        <div class="conten"></div>
      </div>
    </div>
  </div>
    <myFavor v-if="currentIndex===0"/>
    <myHistory v-else-if="currentIndex===1"/>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import myFavor from './myfavor.vue'
import myHistory from './myhistory.vue'


const currentIndex = ref(0)
const innerClick = (index) => {
  currentIndex.value = index
}

const tripBack = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.tabbar {
  .trip {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 46px;
    width: 100%;
    .left {
      width: 56px;
      height: 46px;
      text-align: left;
      line-height: 46px;
      font-size: 14px;
      color: var(--primary-color);
      font-weight: 600;
    }
    .inner {
      display: flex;
      align-content: center;
      width: 146px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid var(--primary-color);
      .favor {
        width: 73px;
        height: 30px;
        color: var(--primary-color);
        background-color: #fff;
        &.active {
          color: #fff;
          background-color: var(--primary-color);
        }
      }
    }
    .right {
      width: 56px;
      height: 46px;
      text-align: right;
      line-height: 46px;
      .conten {
        display: inline-block;
        width: 20px;
        height: 15px;
        background-image: url(@/assets/img/home/icon-right-menu.png);
        background-size: 20px 15px;
      }
      
    }
  }
}

</style>