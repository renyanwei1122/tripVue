<template>
  <div class="Comment">
    <detailSection headerText="热门评论" more-text="查看全部评论">
      <div class="top">
        <div class="left">
          <div class="left-grades">
            <div class="grades">{{ commentData.overall }}</div>
            <div class="line"></div>
          </div>
          <div class="left-title">
            <div class="title">{{ commentData.scoreTitle }}</div>
            <div class="comcount">{{ commentData.totalCount }}条评论</div>
            <van-rate :model-value="Number(commentData.overall)" color="#ff9854" size="12" readonly allow-half />
          </div>
          
        </div>
        <div class="right">
          <template v-for="(item,index) in commentData.subScores" :key="index">
            <div class="item">{{ item }}</div>
          </template>
        </div>
      </div>
      <div class="center">
        <template v-for="(item,index) in commentData.commentTagVo" :key="index">
          <span class="item">{{ item.text }}</span>
        </template>
      </div>
      <div class="comments">
        <div class="bg">
          <div class="user">
          <img :src="commentData.comment.userAvatars" alt="">
          <div class="text">
            <div class="name">{{ commentData.comment.userName }}</div>
            <div class="date">{{ commentData.comment.checkInDate }}</div>
          </div>
        </div>
          <div class="commentDetail">{{ commentData.comment.commentDetail }}</div>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
const props = defineProps({
  commentData: {
    type: Object,
    default: ({})
  }
})
</script>

<style lang="less" scoped>
.Comment {
  .top {
    display: flex;
    .left {
      display: flex;
      width: 160px;
      .left-grades {
        .grades {
        width: 66px;
        height: 58px;
        font-size: 50px;
        font-weight: 600;
        }

        .line {
          width: 70px;
          height: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px;
          bottom: 6px;
          z-index: 5;
        }
       
      }
      .left-title{
          height: 58px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          margin-top: 5px;
          box-sizing: border-box;
          .comcount {
            font-size: 12px;
            color: #666;
          }
          
        }
      
      
      
    }
    .right {
      display: flex;
      flex:1;
      flex-wrap: wrap;
      justify-content: flex-end;
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }

    }
  }
  .center {
      display: flex;
      height: 76px;
      flex-wrap: wrap;
      margin-top: 15px;

      .item {
        padding: 3px 5px;
        margin-right: 8px;
        margin-top: 5px;
        border-radius: 8px;
        font-size: 12px;
        background-color: #f5f5f5;
      }
  }
  .comments {
    height: 90px;
    background-color: #f7f9fb;
    padding: 15px;
    .bg {
      box-sizing: border-box;
      .user {
        display: flex;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;

          }
          .text{
            margin-left: 10px;
            .date {
              font-size: 12px;
              color: #999;
            }
          }
      }
      .commentDetail {
        font-size: 12px;
        margin-top: 20px;
      }
    }
    
  }
}
</style>