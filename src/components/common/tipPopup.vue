<template>
  <van-popup v-model="show" round>
    <div class="popup_container dfcen">
      <img class="close" src="@/assets/images/public/close.png" alt="" @click="show = false">
      <img class="del_tip" src="@/assets/images/public/del_tip.png" alt="">
      <div class="des">{{ tip }}</div>
      <div class="btns">
        <div class="cancel dfcen" @click="show = false" v-if="hasCancel">取消</div>
        <div class="okey dfcen" @click="handleClickOkey">{{ okeyTxt }}</div>
      </div>
    </div>
  </van-popup>
</template>
<script>
import {Popup} from 'vant';

export default {
  props: {
    tip: {
      type: String,
      default: '你确定要删除链接吗?'
    },
    hasCancel: {
      type: Boolean,
      default: true
    },
    okeyTxt: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    // 确定
    handleClickOkey() {
      this.$emit('handleClickOkey')
    },
  },
  components: {
    [Popup.name]: Popup
  }
}
</script>
<style lang="less" scoped>
.popup_container {
  width: 310px;
  height: 330px;
  position: relative;
  flex-direction: column;

  .close {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .del_tip {
    width: 88px;
    height: 88px;
    margin-bottom: 28px;
  }

  .des {
    color: #84899D;
    font-size: 16px;
    margin-bottom: 60px;
    text-align: center;
    padding: 0 18px;
  }

  .btns {
    display: flex;
    width: 100%;
    padding: 0 20px;
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