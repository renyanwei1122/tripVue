<template>
  <div class="detail" ref="detailRef">
    <detailTabbar 
    ref="detailTabRef"
    class="tab" 
    :title="['描述','设施','房东','评论','须知','地图']"
    v-if="showTabcontrol"
    @itemClick="tabClick" />
    <van-nav-bar
    title="房屋详情"
    left-text="旅途"
    left-arrow
    @click-left="onClickLeft"
    />
    <div class="swipe" v-if="detailInfos.mainPart" v-memo="[detailInfos.mainPart]">
        <detailSwipe :ref="getSectionRef" :house-pice="detailInfos.mainPart.topModule.housePicture.housePics"/>
        <detailInfoscpn :ref="getSectionRef" :top-infos="detailInfos.mainPart.topModule"/>
        <detailFacility :ref="getSectionRef" :houseFacility="detailInfos.mainPart.dynamicModule.facilityModule.houseFacility"/>
        <detailLandlord :ref="getSectionRef" :landlord="detailInfos.mainPart.dynamicModule.landlordModule" />
        <detailComment :ref="getSectionRef" :comment-data="detailInfos.mainPart.dynamicModule.commentModule"/>
        <detailNotice :ref="getSectionRef" :orderRules="detailInfos.mainPart.dynamicModule.rulesModule.orderRules" />
        <detailMap :ref="getSectionRef" :position="detailInfos.mainPart.dynamicModule.positionModule" />
        <detailIntro :priceIntro="detailInfos.mainPart.introductionModule" />
    </div>
    <div class="footer">
        <img src="@/assets/img/detail/icon_ensure.png" alt="">
        <div class="text">弘源旅途，永无止境！</div>
    </div>
  </div>
</template>

<script setup>
import useDetailStore from '@/store/modules/detail';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
import detailSwipe from './cpns/detail_01-swipe.vue';
import detailInfoscpn from './cpns/detail_02-infos.vue';
import detailFacility from './cpns/detail_03-facility.vue';
import detailComment from './cpns/detail_04-comment.vue';
import detailLandlord from './cpns/detail_05-landlord.vue';
import detailNotice from './cpns/detail_06-notice.vue'
import detailMap from './cpns/detail_07-map.vue'
import detailIntro from './cpns/detail_08-intro.vue'
import detailTabbar from './cpns/detail-tabbar.vue'
import useScroll from '@/hooks/useScroll';
import { computed,onMounted,ref,watch } from 'vue';


const route = useRoute()
const router = useRouter()

const detailTabRef = ref(null)
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)

const showTabcontrol = computed(() => {
  return scrollTop.value > 300
})

const sectionEls = []
const getSectionRef = (value) => {
  // console.log(value.$el) 
  //calue.$el可以绑定到组件的根元素
  if(!value) return 
  sectionEls.push(value.$el)
}

const tabClick = (index) => {
  let instance = sectionEls[index+1].offsetTop
  if(instance !== 0) {
    instance = instance - 44
  }
 detailRef.value.scrollTo({
  top:instance,
  behavior: 'smooth'
 })
}


watch(scrollTop, (newValue) => {
  const els = Object.values(sectionEls)
  const values = els.map(el => el.offsetTop)
  let index = values.length - 1
  for(let i = 0; i < values.length; i++) {
    if(values[i] > newValue + 25) {
      index = i - 1
      break
    }
  }
  if(detailTabRef.value) {
    detailTabRef.value.currentIndex = index
  }
  
})
  

const onClickLeft = () => {
  router.back()
}
const houseId = route.params.id
const detailStore = useDetailStore()
detailStore.fetchDetailInfoData(houseId)
const { detailInfos } = storeToRefs(detailStore)

</script>

<style lang="less" scoped>
.detail {
  position: relative;
  height: 100vh;

  overflow-y: auto;
}
  .tab {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>