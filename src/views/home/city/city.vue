<template>
  <div class="city" >
    <div class="top">
      <van-search 
        v-model="value" 
        placeholder="城市/区域/位置" 
        shape="round"
        show-action
        @cancel="cityCancel"
      />
      <van-tabs v-model:active="activeTab" color="var(--primary-color)">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value,key,indexx) in allCities" :key="indexx">
        <van-index-bar v-show="activeTab === key" :index-list="currentGroup?.cities.map(item => item.group)">
          <van-index-anchor  index="热门" />
          <div class="list">
            <template v-for="(hotitem,indexh) in currentGroup?.hotCities" :key="indexh">
              <div class="list-item" @click="cityClick(hotitem)">{{ hotitem.cityName }}</div>
            </template>
          </div>
          <template v-for="(item,index) in currentGroup?.cities" :key="index">
            <van-index-anchor  :index="item.group" />
              <template v-for="(city,indexy) in item.cities" :key="indexy">
                <van-cell :title="city.cityName " @click="cityClick(city)"/>
              </template>  
          </template>
        </van-index-bar>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import  useCitiesStore  from "@/store/modules/city.js"
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { computed } from "@vue/reactivity"

const value = ref("")
const router = useRouter()
const cityCancel = () => {
  router.back()
}
const activeTab = ref()

const cityStore = useCitiesStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

const currentGroup = computed(() => {return allCities.value[activeTab.value]})



const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}


</script>

<style lang="less" scoped>
  .city {
    --van-tabs-line-height:50px;
    

    .content {
      height: calc(100vh - 94px);
      overflow-y: auto;
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        padding-right: 25px;
        .list-item {
          width: 70px;
          height: 28px;
          border-radius: 14px;
          font-size: 12px;
          color: #000;
          text-align: center;
          line-height: 28px;
          background-color: #fff4ec;
          margin: 6px 0;
        }
      }
    }
  }
</style>