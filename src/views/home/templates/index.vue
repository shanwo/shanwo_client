<template>
  <div class="templates" v-if="this.templates">
    <van-tabs v-model="active" swipeable sticky title-active-color="#333333" title-inactive-color="#9B9B9B"
              @change="getTemplates">
      <van-tab v-for="(item, index) in templates.sort" :title="item.name" :key="item.id">
        <div class="list">
          <template-item v-for="(itemTemplate, indexTemplate) in item.list" :key="indexTemplate"
                         :templateInfo="itemTemplate"></template-item>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {Tab, Tabs} from 'vant';
import templateItem from "@/components/home/templateItem.vue"

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    templateItem
  },
  data() {
    return {
      active: 0,
      templates: null
    }
  },
  mounted() {
    this.getTemplates()
  },
  methods: {
    // 获取模板列表
    getTemplates() {
      let sort_id = this.templates ? this.templates.sort[this.active].id : ''
      this.$myAjax(`${this.$api.getTemplateList}?sort_id=${sort_id}`, "GET", {}, (res) => {
        if (this.active == 0) {
          this.templates = res
        }
        if (!this.templates.list) {
          this.templates.sort[this.active].list = res.lists
        }
      });
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