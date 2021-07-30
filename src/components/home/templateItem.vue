<template>
  <div>
  	<div class="template_item" @click="previewTemplate">
  	  <img src="@/assets/images/home/default.png" class="default_img" alt="">
  	  <!-- 会员 -->
  	  <div class="vip_view dfcen">
  	    <span>会员</span>
  	    <img src="@/assets/images/home/tip.png" alt="">
  	  </div>
  	</div>
  	<van-popup v-model="show" round>
  	  <div class="popup_container dfcen">
  	    <img :src="templateUrl">
  	  </div>
  	</van-popup>
		
		<div v-if="show" class="head_container dfsb">
		  <div class="back_view dfcen" @click="show=false">
		    <img src="@/assets/images/public/back.png" alt="" />
		  </div>
		  <div class="use_view dfcen" @click="$router.push('/editShan')">使用模板</div>
		</div>
		
  </div>
</template>
<script type="text/javascript">
	import { Popup } from 'vant';
	export default {
		data() {
			return {
				show: false,
				templateUrl: 'https://desk-calenda.oss-cn-beijing.aliyuncs.com/static-h5/%E5%90%AF%E5%8A%A8%E9%A1%B5%202@2x%20(2)%20(1).png'
			}
		},
		components: {
		  [Popup.name]: Popup
		},
		methods: {
			previewTemplate() {
				console.log(123)
				this.show = true
			}
		}
	}
</script>
<style lang="less" scoped>
.template_item {
  margin: 8px 4px;
  width: 174px;
  height: 312px;
  background: #ccc;
  position: relative;
  .default_img {
    width: 100%;
    height: 32px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .vip_view {
    width: 37px;
    height: 17px;
    background: linear-gradient(270deg, #FD373E 0%, #FE6857 100%);
    color: #fff;
    font-size: 12px;
    position: absolute;
    left: -4px;
    top: -2px;
    img {
      width: 4px;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: -5px;
    }
  }
}
.popup_container {
	width: 300px;
	height: 498px;
	background: url('../../assets/images/home/OnePlus8Pro@2x%20(1).png');
	background-size: 100%;
	img {
		width: 285px;
		height: 477px;
		border-radius: 20px;
	}
}
.head_container {
	width: 100%;
  padding: 10px 24px 0 12px;
  height: 68px;
	position: absolute;
	left: 0;
	top: 0;
	box-sizing: border-box;
	z-index: 99999999;
  .back_view {
    width: 52px;
    height: 52px;
    border-radius: 50%;
		background: #fff;
		box-shadow: 0px 0px 8px #888888;
    img {
      width: 24px;
      height: 24px;
    }
  }
	.use_view {
		width: 88px;
		height: 44px;
		color: #1FB1A6;
		background-color: #FFFFFF;
		border-radius: 22px;
		font-size: 14px;
	}
}
.van-popup {
	background-color: rgba(0, 0, 0, 0);
}
</style>