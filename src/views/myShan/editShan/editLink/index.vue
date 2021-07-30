<template>
  <div class="link_cointainer">
    <Header :backBg="true">
      <div class="save_btn dfcen">保存</div>
    </Header>
    <div class="link_item" v-for="(item, i) in list" :key="i" @click="editLink(item)">
      <div class="edit_sort" @click="editSort(i)">{{ item }}</div>
    </div>
    <div class="add_btn dfcen" @click="editLink">+ 添加链接</div>
  </div>
</template>
<script>
import Header from "@/components/common/header.vue"
  export default {
    data() {
      return {
        name: '',
        des: '',
        list: [1,2,3,4,5,6]
      }
    },
    components: {
      Header
    },
    methods: {
      // 修改链接位置
      editSort(i) {
        let x = i, y = i + 1
        this.list.splice(x - 1, 1, ...this.list.splice(y - 1, 1, this.list[x - 1]))
      },
      // 修改链接内容
      editLink(item) {
        let url = item ? `/editDetail?id=${item}` : `/editDetail`
        this.$router.push(url)
      }
    }
  }
</script>
<style lang="less" scoped>
.link_cointainer {
  min-height: 100vh;
  background: linear-gradient(135deg, #38EF7D 0%, #11998E 100%);
  .save_btn {
    width: 68px;
    height: 28px;
    border-radius: 8px;
    color: #1FB1A6;
    background: #fff;
    font-size: 14px;
  }
  .link_item {
    width: 328px;
    height: 60px;
    background: #ccc;
    margin: 0 auto 16px;
  }
  .add_btn {
    width: 328px;
    height: 60px;
    border: 1px dashed #fff;
    border-radius: 30px;
    margin: 0 auto;
    color: #fff;
    font-size: 16px;
  }
}
</style>