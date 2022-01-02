<template>
  <div class="home_container">
    <van-tabs v-model="active" swipeable sticky title-active-color="#333333" title-inactive-color="#9B9B9B">
      <van-tab title="热门">
        <van-list
            v-model="hotLoading"
            :finished="hotFinished"
            finished-text="没有更多了"
            @load="getHotList"
            offset="50"
        >
          <card :list="hotList"></card>
        </van-list>
      </van-tab>
      <van-tab title="最近更新">
        <van-list
            v-model="recentLoading"
            :finished="recentFinished"
            finished-text="没有更多了"
            @load="getRecentList"
            offset="50"
        >
          <card :list="recentList"></card>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {Tab, Tabs, List} from 'vant';
import card from "@/components/home/card.vue"
import axios from "axios";

export default {
  components: {
    card,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List
  },
  data() {
    return {
      active: 0,
      // 热门
      hotPage: 1,
      hotList: [],
      hotLoading: false,
      hotFinished: false,
      // 最近更新
      recentPage: 1,
      recentList: [],
      recentLoading: false,
      recentFinished: false,
    }
  },
  methods: {
    // 获取热门列表
    getHotList() {
      if (this.hotFinished) {
        return
      }
      this.$myAjax(`${this.$api.getHot}?page=${this.hotPage}`, 'GET', {}, res => {
        if (res.lists.length == 0) {
          this.hotFinished = true
          return
        }
        this.hotLoading = false
        this.hotList = [...this.hotList, ...res.lists]
        this.hotPage += 1
      })
    },
    // 获取最近更新列表
    getRecentList() {
      if (this.recentFinished) {
        return
      }
      this.$myAjax(`${this.$api.getRecent}?page=${this.recentPage}`, 'GET', {}, res => {
        if (res.lists.length == 0) {
          this.recentFinished = true
          return
        }
        this.recentLoading = false
        this.recentList = [...this.recentList, ...res.lists]
        this.recentPage += 1
      })
    }
  }
}
</script>
<style lang="less">
.home_container {
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