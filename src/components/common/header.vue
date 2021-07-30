<template>
  <div class="head_container dfsb">
    <div class="back_view dfcen" :class="backBg ? 'back_shadow' : ''" @click="back">
      <img src="@/assets/images/public/back.png" alt="" />
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    backBg: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
};
</script>
<style lang="less" scoped>
.head_container {
  padding: 10px 24px 0 12px;
  height: 68px;
	box-sizing: border-box;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	width: 100%;
	box-sizing: border-box;
  .back_shadow {
    background: #fff;
    box-shadow: 0px 0px 8px #888888;
  }
  .back_view {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
