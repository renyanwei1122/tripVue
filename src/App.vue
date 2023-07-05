<template>
  <div class="app">
    <router-view/>
    <tabbar v-if="!route.meta.hideTabbar"/>
    <loading/>
  </div>
</template>

<script setup>
import tabbar from "@/components/tabbar/tabbar.vue"
import { useRoute } from 'vue-router'
import loading from "./components/loading/loading.vue";

const route = useRoute()

</script>

<style scoped>

</style>
