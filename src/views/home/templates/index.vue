

<template>
  <div class="templates">
    <van-tabs v-model="active" swipeable sticky title-active-color="#333333" title-inactive-color="#9B9B9B">
      <van-tab title="热门">
        <div class="list">
          <template-item v-for="(item, i) in 10" :key="i"></template-item>
        </div>
      </van-tab>
      <van-tab title="最近更新">
        <div class="list">
          <template-item v-for="(item, i) in 10" :key="i"></template-item>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import { Tab, Tabs } from 'vant';
  import templateItem from "@/components/home/templateItem.vue"
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      templateItem
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>
<style lang="less">
  .templates {
    .list {
      padding: 0 5px;
      display: flex;
      flex-wrap: wrap;
    }
    .van-tab {
      flex: none;
      padding: 0 15px;
      font-size: 16px;
    }
    .van-tab--active {
      font-size: 24px;
      line-height: 24px;
    }
    .van-tabs__line {
      width: 20px;
      height: 4px;
      background: #333333;
      bottom: 20px;
    }
    .van-tabs__wrap {
      height: 54px;
    }
  }
</style>