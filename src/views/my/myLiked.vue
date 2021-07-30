<template>
	<div class="like_container">
		<div class="like_item dfcen" v-for="(item, i) in 3" :key='i'>
			<div class="head_view">
				<img src="@/assets/images/home/check.png" class="head_img">
				<img src="@/assets/images/home/check.png" class="head_tip">
			</div>
			<div class="name_des flex">
				<div class="name">刘德华111</div>
				<div class="des text_line1">中国男演员中国男演员中国男演员111</div>
			</div>
			<div class="btn_view dfcen">
				<img src="@/assets/images/home/shandian.png" >
				<span>已闪</span>
			</div>
		</div>
		<div class="count_view">共3位</div>
		<Back></Back>
	</div>
</template>

<script>
	import Back from "@/components/common/back.vue"
	export default {
		components: {
			Back
		}
	}
</script>

<style lang="less" scoped>
	.like_container {
		padding: 8px 16px;
		.like_item {
			height: 80px;
			border-bottom: 1px solid #E5E5E5;
			.head_view {
				width: 48px;
				height: 48px;
				position: relative;
				.head_img {
					width: 48px;
					height: 48px;
					border-radius: 50%;
					border: 2px solid #E5E5E5;
					box-sizing: border-box;
				}
				.head_tip {
					position: absolute;
					width: 18px;
					height: 18px;
					right: 0;
					bottom: 0;
				}
			}
		}
		.name_des {
			margin: 0 12px 0 14px;
			.name {
				color: #262628;
				font-size: 15px;
			}
			.des {
				color: #84899D;
				width: 200px;
			}
		}
		.btn_view {
			width: 64px;
			height: 24px;
			background: linear-gradient(323deg, #00A89C 0%, #93D2CD 100%);
			border-radius: 12px;
			color: #FFFFFF;
			img {
				width: 9px;
				height: 12px;
				margin-right: 4px;
			}
		}
		.count_view {
			color: #C6C6C6;
			line-height: 44px;
			text-align: center;
		}
	}
</style>
