<template>
  <van-popup v-model="show" round>
    <div class="popup_container dfcen">
      <img class="close" src="@/assets/images/public/close.png" alt="" @click="show = false">
      <img class="del_tip" src="@/assets/images/public/tip_2.png" alt="">
      <div class="des">抱歉~ <br>您当前为非会员，暂时不能使用此模板</div>
			<div class="tip_view dfsb">
				<div class="tip_item dfcen">
					<img src="@/assets/images/home/match2@2x.png">
					<span>所有模版</span>
				</div>
				<div class="tip_item dfcen">
					<img src="@/assets/images/home/match2@2x.png">
					<span>站外链接</span>
				</div>
				<div class="tip_item dfcen">
					<img src="@/assets/images/home/match2@2x.png">
					<span>不限数量</span>
				</div>
			</div>
      <div class="btns dfcen">￥ 9.9 元立享会员</div>
    </div>
  </van-popup>
</template>
<script>
import { Popup } from 'vant';
export default {
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
  position: relative;
  flex-direction: column;
	padding: 32px 0;
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
		text-align: center;
		padding: 0 18px;
  }
	.tip_view {
		width: 270px;
		margin: 28px 0;
		.tip_item {
			color: #FFC850;
			font-size: 14px;
			img {
				width: 22px;
				height: 22px;
				margin-right: 3px;
			}
		}
	}
  .btns {
    width: 270px;
		height: 50px;
		border: 1px solid #D78D2A;
		border-radius: 10px;
		background: linear-gradient(90deg, #FDDA51 0%, #FCA741 100%);
		font-size: 18px;
		font-weight: bold;
		color: #FFFFFF;
  }
}
</style>