<template>
	<div class="icon_container">
		<div class="menus_view">
			<div v-for="(item, i) in menus" :key="i" class="menu_item" :class="curIndex == i ? 'active' : ''" @click="handleClickMenu(item, i)">{{ item }}</div>
			<!-- 占位 -->
			<div class="show_view"></div>
		</div>
		<div class="content_view">
			<div class="content_item dfcen" v-for="(item, i) in 20" :key='i' @click="handleClickIcon(item)">
				<div class="icon_bg dfcen">
					<img src="@/assets/images/myShan/icons.png">
				</div>
				<span>淘宝</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menus: ['社交', '网上商城'],
				curIndex: 0, // 选中的菜单索引
			}
		},
		methods: {
			// 点击菜单
			handleClickMenu(item, i) {
				this.curIndex = i
			},
			// 点击选中图标
			handleClickIcon(item) {
				this.$router.back()
			}
		}
	}
</script>

<style lang="less" scoped>
	.icon_container {
		display: flex;
		height: 100vh;
		.menus_view {
			background-color: #F9FBFF;
			width: 95px;
			display: flex;
			flex-direction: column;
			.menu_item {
				line-height: 52px;
				padding-left: 15px;
				font-size: 14px;
				color: #84899D;
				border-right: 1px solid #E5E5E5;
			}
			.active {
				font-size: 16px;
				color: #333333;
				border-top: 1px solid #E5E5E5;
				border-bottom: 1px solid #E5E5E5;
				border-right: none;
				box-sizing: border-box;
				background-color: #FFFFFF;
			}
			.show_view {
				flex: 1;
				border-right: 1px solid #E5E5E5;
			}
		}
		.content_view {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			padding: 20px 5px;
			height: 100vh;
			overflow: scroll;
			box-sizing: border-box;
			.content_item {
				flex-direction: column;
				margin: 0 5px;
				.icon_bg {
					width: 80px;
					height: 80px;
					border-radius: 8px;
					background-color: #F9FBFF;
				}
				img {
					width: 58px;
					height: 58px;
				}
				span {
					line-height: 30px;
					color: #84899D;
					font-size: 14px;
				}
			}
		}
	}
</style>
