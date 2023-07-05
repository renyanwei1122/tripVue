<template>
  <div class="house-item-v9">
    <div class="item">
        <div class="cover">
          <img :src="itemData.image.url" alt="">
        </div>
        <div class="con">
          <div class="summary">{{ itemData.summaryText }}</div>
          <div class="houseName">{{ itemData.houseName }}</div>
          <div class="bottom">
            <van-rate :model-value="Number(itemData.commentScore)" color="#fff" size="12" readonly allow-half />
            <span class="price">￥{{ itemData.finalPrice }}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.house-item-v9 {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  .item {
    position: relative;
    color: #fff;
    border-radius: 6px;
    

    .cover {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }
    .con {
      width: 95%;
      position: absolute;
      bottom: 0;
      left: 8px;

      .summary {
        font-size: 12px ;
        font-family: PingFangSC-Regular, Helvetica Neue, sans-serif;
      }
      .houseName {
        width: 150px;
        font-size: 14px;
        font-family: PingFangSC-Regular, Helvetica Neue, sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-right: 5px;
      }
    }
  }
}
</style>