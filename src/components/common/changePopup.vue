<template>
  <van-popup v-model="show" round>
    <div class="popup_container dfcen">
      <div class="title">底部图标类型</div>
      <div class="active_view dfsb" :class="curIndex == 0 ? '' : 'active'" @click="curIndex = 0">
        <span>文字跳转</span>
        <van-icon name="success" v-if="curIndex == 0"/>
      </div>
      <div class="active_view dfsb" :class="curIndex == 1 ? '' : 'active'" @click="curIndex = 1">
        <span>链接跳转</span>
        <van-icon name="success" v-if="curIndex == 1"/>
      </div>
      <div class="btns">
        <div class="cancel dfcen" @click="show = false">取消</div>
        <div class="okey dfcen" @click="handleClickOkey">确定</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
import {Popup, Icon} from 'vant';

export default {
  data() {
    return {
      show: false,
      curIndex: 0
    }
  },
  methods: {
    // 确定
    handleClickOkey() {
      this.$emit('handleClickOkey')
    },
  },
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon
  }
}
</script>
<style lang="less" scoped>
.popup_container {
  width: 310px;
  position: relative;
  flex-direction: column;
  padding: 20px;

  .title {
    width: 100%;
    margin-bottom: 28px;
    font-size: 22px;
    color: #000000;
  }

  .active_view {
    width: 270px;
    height: 50px;
    border-radius: 10px;
    background-color: #29B4AA;
    box-sizing: border-box;
    color: #FFFFFF;
    font-size: 16px;
    padding: 0 16px;
    margin-bottom: 12px;
  }

  .active {
    background-color: #FFFFFF;
    color: #DCDCDC;
    border: 2px solid #DCDCDC;
  }

  .btns {
    display: flex;
    width: 100%;
    padding: 20px 20px 0;
    box-sizing: border-box;

    .cancel, .okey {
      // width: 138px;
      flex: 1;
      height: 60px;
      color: #29B4AA;
      font-size: 18px;
    }

    .okey {
      background: linear-gradient(323deg, #00A89C 0%, #93D2CD 100%);
      border-radius: 30px;
      color: #fff;
    }
  }
}
</style>