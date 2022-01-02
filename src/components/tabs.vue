<template>
  <div :class="['tab_container', 'dfsb', scrollTop > 20 ? 'hide_tab_view' : 'show_tab_view']">,
    <router-link to="/" class="item_view dfcen" @click="toNext(0)">
      <img class="left_img" src="@/assets/images/home/home.png" mode=""></img>
    </router-link>
    <router-link to="/myShan" class="item_view dfcen" @click="toNext(1)">
      <img class="center_img" src="@/assets/images/home/logo.png" mode=""></img>
    </router-link>
    <router-link to="/my" class="item_view dfcen" @click="toNext(2)">
      <img class="right_img" src="@/assets/images/home/my.png" mode=""></img>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  methods: {
    handleScroll() {
      setTimeout(() => {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      }, 100);
    },
  },
  created() {

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
.tab_container {
  width: 298px;
  height: 99.33px;
  position: fixed;
  bottom: 15px;
  right: 50%;
  transform: translate(50%, 0);
  background: url("../assets/images/home/tab.png");
  background-size: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  z-index: 99;

  .item_view {
    flex: 1;

    .left_img {
      width: 18px;
      height: 24px;
    }

    .center_img {
      width: 78px;
      height: 38px;
    }

    .right_img {
      width: 20px;
      height: 24px;
    }
  }
}

.hide_tab_view {
  bottom: -99px;
  transition-duration: .3s
}

.show_tab_view {
  bottom: 15px;;
  transition-duration: .3s
}
</style>
