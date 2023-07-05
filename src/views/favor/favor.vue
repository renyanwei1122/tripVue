<template>
  <div class="favor">
    <tabBar />
  </div>
</template>

<script setup>
import tabBar from './cpns/tabbar.vue'
import useFavorStore from '@/store/modules/favor.js'
import { storeToRefs } from 'pinia';


const favorStore = useFavorStore()
favorStore.fetchFavorListData()





</script>

<style lang="less" scoped>

</style>