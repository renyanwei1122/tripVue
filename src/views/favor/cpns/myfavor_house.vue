<template>
  <div class="oneblock">
            <div class="bgc">
              <img :src="favorhouselist.pictureList[0]" alt="">
              <div class="bgc-right">
                <div class="avator">
                  <img :src="favorhouselist.landlordHeadStyle.head" alt="">
                </div>
                <div class="heart"><img src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png" alt=""></div>
                <div class="msg"><img src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png" alt=""></div>
                <span>169</span>
              </div>
              <div class="bgc-bottom">
                <span class="bgc-bottom-count">4.6分</span>
                <span class="bgc-bottom-recmen">推荐</span>
              </div>
            </div>
            <div class="bottIntro">
              <div class="info">
                <div class="adds">{{ favorhouselist.address }}</div>
                <div class="houseIntr">{{ favorhouselist.unitSummeries[0].text }}·{{ favorhouselist.unitSummeries[1].text }}</div>
              </div>
              <div class="houseTitle">{{ favorhouselist.unitName }}</div>
              <div class="loggvip">
                <template v-for="(item,index) in favorhouselist.houseTags" :key="index">
                  <span class="tags">{{ item.text }}</span>
                </template>
              </div>
              <div class="price">
                <div class="new">￥196</div>
                <div class="old">￥358</div>
                <span class="counprice">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-yangshengqi"></use>
                  </svg>
                  <span>5.5折已享2项优惠</span>
                </span>
              </div>

            </div>
          </div>
</template>

<script setup>
import "@/hooks/iconfont.js"
const props = defineProps({
  favorhouselist: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="less" scoped>
.bgc {
  position: relative;
  margin: 0 0 7px;
  padding: 0px 20px 0 20px;
  color: #fff;
  
  
  img {
    width: 100%;
    border-radius: 6px;
    vertical-align: top;
  }

  .bgc-right {
    position: absolute;
    right: 30px;
    top: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    vertical-align: top;
    width: 40px;
    height: 141px;
    box-sizing: border-box;

    .avator {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .heart {
      padding: 5px 0;
      width: 30px;
      height: 30px;
    }
    .msg {
      padding: 5px 0;
      width: 30px;
      height: 30px;
    }
  }
  .bgc-bottom {
    position: absolute;
    bottom: 25px;
    left: 30px;
    width: 68px;
    height: 17px;
    line-height: 17px;
    background-color: hsla(0, 0%, 100%, 0.9);
    border-radius: 10px;
    .bgc-bottom-count {
      box-sizing: border-box;
      margin-left: 5px;
      padding: 2px;
      color: #333;
      font-size: 12px;
      font-weight: bolder;
    }

    .bgc-bottom-recmen {
      font-size: 10px;
      color: #666;
      padding-left: 5px;
      border-left: 1px solid #666;
    }
  }
}

.bottIntro {
  padding: 0px 20px;
  .info {
    display: flex;
    .adds{
      height: 16px;
      padding: 0 4px;
      font-size: 12px;
      text-align: center;
      line-height: 16px;
      font-family: PingFangSC-Regular, Helvetica Neue, sans-serif;
      color: rgb(255,255,255);
      border-radius: 2px;
      background: rgb(63, 73, 84);
    }
    .houseIntr {
      padding-left: 10px;
      font-size: 12px;
      color: #666;
    }
  }
  .houseTitle {
    font-size: 18px;
    color: #000;
    margin: 8px 0 0;
  }
  .loggvip {
    .tags {
      font-size: 12px;
      color: #ff6666;
      margin-right: 6px;
      background: rgba(255, 102, 102, 0.1);
      padding: 0 4px;
    }
  }
  .price {
    display: flex;
    margin: 3px 0 7px;
    align-items: center;
    .new {
      font-size: 20px;
      color: #ff9645;
      padding-right: 10px;
      padding-left: 1px;
    }
    .old {
      font-size: 12px;
      color: #999;
      text-decoration: line-through;
      padding-right: 5px;
      font-weight: 500;
    }
    
    .counprice {
      color: rgb(255, 255, 255);
      background: rgb(251, 74, 74);
      font-size: 12px;
      border-radius: 8px;
      padding: 0 4px;
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        padding-right: 5px;
      }
    }
  
  }
}

</style>