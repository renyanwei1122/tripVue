<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt=""/>
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="data-range">
      <div class="start" @click="showCalender=true">
        <span>入住</span>
        <span class="data"> {{ startDate }}</span>
      </div>
      <div class="stay">共{{ dateCount }}晚</div>
      <div class="end" @click="showCalender=true">
        <span>离店</span>
        <span class="data">{{ endDate }}</span>
      </div>
      <van-calendar v-model:show="showCalender" type="range" @confirm="onConfirm" />
    </div>
    
    <div class="bottom-gray-line">
      <div class="infn">
        <div class="price">价格不限</div>
        <div class="people">人数不限</div>
      </div>
      <div class="keyword">关键字/位置/民宿名</div>
    </div>

    <!-- 热门城市 -->
    <div class="sectionhot">
     <template v-for="(item,index) in hotSuggests" :key="index">
      <div class="item">{{ item.tagText.text }}</div>
     </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="searchbox">
      <div class="item">
        <button class="btn" @click="searchClick">开始搜索</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCitiesStore from "@/store/modules/city"
import useHomeStore from "@/store/modules/home.js"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { formatMonthDay,dateDiff }  from "@/utils/format_data.js"
import { ref } from "vue"
import useMainStore from "@/store/modules/main"

const cityStore = useCitiesStore()
const { currentCity } = storeToRefs(cityStore)

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

  const router = useRouter()
  const cityClick = () => {
    router.push("/city")
  }

  
  const dateCount = ref(1)
  
  

  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)

  const showCalender = ref(false)
  const onConfirm = (data) => {
    startDate.value = formatMonthDay(data[0])
    endDate.value = formatMonthDay(data[1])
    dateCount.value = dateDiff(data[0],data[1])

    showCalender.value = false
  }


  const searchClick = () => {
    router.push({
      path: "/search",
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    })
  }
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }
  .position {
    display: flex;
    width: 70px;
    align-items: center;
   
    img {
      margin-left: 4px;
      width: 18px;
      height: 18px;
    }
    span {
      position: relative;
      top: 2px;
      font-size: 12px;
      color: #666;
      
    }
  }
}

.data-range {
  display: flex;
  width: 100%;
  height: 45px;
  font-size: 12px;
  color: #999;
  span {
    display: block;
  }
  .start {
    width: 100px;
    text-align: center;
    margin-top: 5px;
    
  }
  .stay {
    width: 160px;
    text-align: center;
    line-height: 45px;
  }
  .end {
    width: 100px;
    text-align: center;
    margin-top: 5px;
  }
  .data {
    font-size: 15px;
    color: #333;
  }

}

.bottom-gray-line {
  padding-left: 25px;
  font-size: 14px;
  color: #999;
  .infn {
    display: flex;
    height: 44px;
    line-height: 44px;
    
    .price {
      flex-grow: 2;
      height: 44px;
      
      border-right: 1px solid #f2f2f2;
    }
    .people {
      flex-grow: 1;
      height: 44px;
    }

  }
  .keyword {
    height: 45px;
    line-height: 45px;
  }
}

.sectionhot{
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  .item {
   padding: 4px 8px;
   border-radius: 14px;
   margin: 4px;
   font-size: 12px;
   background-color: #f1f3f5;
  

  }
}

.searchbox {
  .item {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    .btn {
      width: 342px;
      height: 38px;
      max-height: 50px;
      font-weight: 500;
      line-height: 35px;
      font-size: 18px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      border: none;
      background-image: var(--theme-linear);
    }
    
  }
}
</style>