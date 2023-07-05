<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in housePice" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <template v-for="(value,key,index) in swipeGroup" :key="index">
            <span class="item" 
            :class="{ active: housePice[active]?.enumPictureCategory == key}">
            <span class="text">{{ getName(value[0].title) }}</span>
            <span class="count" v-if="housePice[active]?.enumPictureCategory == key">
              {{ swipeGroup[key].indexOf(housePice[active])+1 }}/{{ value.length }}</span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
    
  </div>
</template>

<script setup>
const props = defineProps({
  housePice: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}
for(let item of props.housePice) {
  let itemvalue = swipeGroup[item.enumPictureCategory]
  if(!itemvalue) {
    itemvalue = []
    swipeGroup[item.enumPictureCategory] = itemvalue
  }
  swipeGroup[item.enumPictureCategory].push(item)
}

const getName = (name) => {
return name.replace("：","").replace("【","").replace("】","")
}
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    img {
      width: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    .item {
      margin: 0 3px;

      &.active {
        padding: 0 3px;
        color: #333;
        border-radius: 5px;
        background-color: #fff;
      }
    }
  }
}
</style>