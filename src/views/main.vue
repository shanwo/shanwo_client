<template>
  <div class="main_container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabs></tabs>
  </div>
</template>

<script>
import tabs from "@/components/tabs.vue"
export default {
  components: {
    tabs
  }
}
</script>
<style lang='less' scoped>
  .main_container {
    .main_content {
      position: fixed;
      right: 0;
      bottom: 50px;
      width: 100%;
      height: 50px;
      background: #ccc;
      display: flex;
      .home {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>