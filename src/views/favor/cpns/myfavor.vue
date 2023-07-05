<template>
  <div class="myfavor">
    <van-tabs>
      <van-tab title="房屋">
        
        <template v-for="(item,index) in favorList" :key="index">
          <myfavorHouse :favorhouselist="item"/>
        </template>
      </van-tab>
      <van-tab title="房东">
        <div class="landlord">
          <div class="picture"><img src="@/assets/img/favor/empty_favorite.44731802.png" alt=""></div>
          <div class="contener">
            <div class="none">暂无收藏</div>
            <div class="click">点击<img src="@/assets/img/favor/favor.png" alt="">即可收藏对应的房东</div>
          </div>
          <div class="whatever">随便去逛逛</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import useFavorStore from "@/store/modules/favor";
import { storeToRefs } from 'pinia';
import myfavorHouse from './myfavor_house.vue'

const favorStore = useFavorStore()
const { favorList } = storeToRefs(favorStore)

</script>

<style lang="less" scoped>
.landlord {
  background-color: #f7f8fb;
  height: 100vh;
  box-sizing: border-box;
  .picture {
    margin: 0 auto;
    padding: 10px;
    width: 335px;
    height: 243px;
    img {
      width: 100%;
    }
  }
  .contener {
    margin: 0 auto;
    .none {
      margin: 0 auto;
      width: 72px;
      height: 27px;
      font-size: 18px;
    }
    .click {
      margin: 0 auto;
      margin-top: 10px;
      width: 174px;
      height: 18px;
      font-size: 14px;
      color: #666666;
    } 
    
    img {
      width: 12px;
      height: 12px;
    }
  }
  .whatever {
    position: relative;
    top: 35px;
    width: 156px;
    height: 40px;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    border-radius: 20px;
    background-color: var(--primary-color);
  }

}
</style>