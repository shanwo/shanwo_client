<template>
	<div class="edit_container">
		<Header>
			<div class="save_btn dfcen">保存</div>
		</Header>
		<!-- 头像区域 -->
		<div class="edit_head">
			<img class="head_img" src="@/assets/images/myShan/empty_icon.png">
			<div class="head_bg dfcen">
				<img src="@/assets/images/my/Camera@2x.png" >
			</div>
		</div>
		<!-- 用户信息 -->
		<div class="content_view">
			<div class="info_view dfsb">
				<span>昵称</span>
				<input class="flex" type="text" placeholder="默认微信昵称" />
			</div>
			<div class="info_view dfsb">
				<span>手机号*</span>
				<input class="flex" type="text" placeholder="为保证账号安全,建议绑定手机" />
			</div>
			<div class="info_view dfsb">
				<span>微信号*</span>
				<input class="flex" type="text" placeholder="请输入" />
			</div>
			<div class="info_view dfsb">
				<span>位置</span>
				<input class="flex" type="text" placeholder="默认微信昵称" />
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/common/header.vue"
  export default {
    data() {
      return {
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="less" scoped>
	.edit_container {
		.save_btn {
		  background: linear-gradient(323deg, #00A89C 0%, #93D2CD 100%);
		  width: 68px;
		  height: 28px;
		  border-radius: 8px;
		  color: #fff;
		}
		.edit_head {
			width: 112px;
			height: 112px;
			border-radius: 50%;
			position: relative;
			margin: 0 auto 60px;
			.head_img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
			.head_bg {
				width: 37px;
				height: 37px;
				border-radius: 50%;
				position: absolute;
				right: 0;
				bottom: 0;
				background-color: #F0F0F0;
				img {
					width: 19px;
					height: 16px;
				}
			}
		}
		.content_view {
			padding: 0 24px;
			font-size: 16px;
			color: #333333;
			.info_view {
				border-bottom: 1px solid #E5E5E5;
				height: 56px;
				input {
					text-align: right;
				}
			}
		}
	}
</style>
