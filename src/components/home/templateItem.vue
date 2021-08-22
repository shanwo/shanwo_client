<template>
  <div>
  	<div class="template_item" @click="previewTemplate">
			<!-- 默认区域 -->
  	  <!-- <img src="@/assets/images/home/default.png" class="default_img" alt=""> -->
			<!-- 模板图片 -->
			<img :src="templateInfo.preview" class="template_img">
  	  <!-- 会员 -->
  	  <div class="vip_view dfcen" v-if="templateInfo.type == 2">
  	    <span>会员</span>
  	    <img src="@/assets/images/home/tip.png" alt="">
  	  </div>
  	</div>
  	<van-popup v-model="show" round>
  	  <div class="popup_container dfcen">
  	    <img :src="templateInfo.preview">
  	  </div>
  	</van-popup>
		
		<div v-if="show" class="head_container dfsb">
		  <div class="back_view dfcen" @click="show=false">
		    <img src="@/assets/images/public/back.png" alt="" />
		  </div>
		  <div class="use_view dfcen" @click="toEditTemplate">使用模板</div>
		</div>
		
  </div>
</template>
<script type="text/javascript">
	import { Popup } from 'vant';
	export default {
		props: {
			templateInfo: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				show: false,
			}
		},
		components: {
		  [Popup.name]: Popup
		},
		methods: {
			previewTemplate() {
				this.show = !this.show
			},
			toEditTemplate() {
				this.previewTemplate()
				setTimeout(() => {
					this.$router.push(`/editShan?id=${this.templateInfo.id}`)
				})
			}
		}
	}
</script>
<style lang="less" scoped>
.template_item {
  margin: 8px 4px;
  width: 174px;
  height: 312px;
  position: relative;
	.template_img {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
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