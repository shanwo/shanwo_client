<template>
  <div class="fans_container">
    <van-tabs v-model="active" swipeable sticky title-active-color="#333333" title-inactive-color="#9B9B9B">
      <van-tab title="闪粉(22)">
        <div class="fan_item dfsb">
          <img src="@/assets/images/home/logo.png">
          <span class="flex">刘德华</span>
        </div>
      </van-tab>
      <van-tab title="谁看了(110)">
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {Tab, Tabs} from 'vant';

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less">
.fans_container {
  .fan_item {
    margin: 0 16px;
    height: 76px;
    border-bottom: 1px solid #E5E5E5;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid #E5E5E5;
      box-sizing: border-box;
      margin-right: 14px;
    }
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