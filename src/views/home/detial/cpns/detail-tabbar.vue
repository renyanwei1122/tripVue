<template>
  <div class="tabbar">
    <template v-for="(item,index) in title" :key="index">
      <div class="control" :class="{active:currentIndex == index}" @click="itemClick(index)">
        <div class="item">{{ item }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: {
    type:Array,
    default: []
  },
})



const emit = defineEmits(['itemClick'])
let currentIndex = ref(0)
const itemClick = (index) => {
  currentIndex.value = index
  emit('itemClick', index)
}

defineExpose({
  currentIndex,
})

</script>

<style lang="less" scoped>
.tabbar {
  display: flex;
  height: 44px;
  text-align: center;
  background-color: #fff;
  
  .control {
    width: 10px;
    align-content: center;
    padding: 15px;
    flex-grow: 2;
    &.active {
      border-bottom: 2px solid #ff9854;
      color: #ff9854;
    }
    .item {
      text-align: center;
    }
  }
}
</style>