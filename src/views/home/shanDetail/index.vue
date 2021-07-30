<template>
	<div class="detail_container">
		<tipPopup ref="follow" tip="关注“闪我”公众号，可以及时收到Ta的闪页动态更新通知哦！" :hasCancel="false" okeyTxt="去关注"
			@handleClickOkey="handleClickOkey"></tipPopup>
		<memberPopup ref="member"></memberPopup>
		<Header :backBg="true">
			<div class="actions_view dfcen">
				<div class="action_item dfcen" @click="$refs.follow.show = true">
					<img src="@/assets/images/home/top_shan.png">
					<span>闪我</span>
				</div>
				<div class="action_item dfcen">
					<img src="@/assets/images/home/top_save.png">
					<span>保存图</span>
				</div>
				<div class="action_item dfcen" @click="$refs.member.show = true">
					<img src="@/assets/images/home/top_gen.png">
					<span>跟闪</span>
				</div>
			</div>
		</Header>
		<!-- 闪页详情 -->
		<!-- 闪页北京 -->
		<div class="shan_bg" :style="{backgroundImage:'url(' + details.background + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}"></div>
		<!-- 闪页头部 -->
		<div class="position_a_view"
			:style="{ width: details.head_schema.width + 'px', height: details.head_schema.height + 'px', left: details.head_schema.coordinate_x + 'px', top: details.head_schema.coordinate_y + 'px'}">
			<!-- 头像 -->
			<img class="position_a_view" :src="details.head_data.avatar"
				:style="{ width: details.head_schema.avatar.width + 'px', height: details.head_schema.avatar.height + 'px', left: details.head_schema.avatar.coordinate_x + 'px', top: details.head_schema.avatar.coordinate_y + 'px', borderRadius: details.head_schema.avatar.radius + 'px'}">
			<!-- 昵称 -->
			<div class="position_a_view"
				:style="{ width: details.head_schema.nickname.width + 'px', height: details.head_schema.nickname.height + 'px', left: details.head_schema.nickname.coordinate_x + 'px', top: details.head_schema.nickname.coordinate_y + 'px', textAlign: details.head_schema.nickname.text_align, fontSize: details.head_schema.nickname.size + 'px', color: details.head_schema.nickname.color}">
				{{ details.head_data.nickname }}
			</div>
			<!-- 描述 -->
			<div class="position_a_view"
				:style="{ width: details.head_schema.signature.width + 'px', height: details.head_schema.signature.height + 'px', left: details.head_schema.signature.coordinate_x + 'px', top: details.head_schema.signature.coordinate_y + 'px', textAlign: details.head_schema.signature.text_align, fontSize: details.head_schema.signature.size + 'px', color: details.head_schema.signature.color}">
				{{ details.head_data.signature }}
			</div>
		</div>
		<!-- 闪页中间链接 -->
		<!-- 闪页底部按钮 -->
	</div>
</template>
<script>
	import Header from "@/components/common/header.vue"
	import tipPopup from "@/components/common/tipPopup.vue"
	import memberPopup from "@/components/common/memberPopup.vue"
	import cropper from "@/components/common/cropper";
	import {
		Popup
	} from 'vant';
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			tipPopup,
			memberPopup,
			Header
		},
		computed: {
			...mapState({
				details: (state) => state.shanDetail.details
			})
		},
		mounted() {
			console.log(this.details)
		},
		methods: {
			handleClickOkey() {
				console.log(1)
			}
		}

	}
</script>
<style lang="less" scoped>
	.detail_container {
		.actions_view {
			box-shadow: 0px 0px 8px #888888;
			width: 180px;
			height: 52px;
			border-radius: 30px;
			margin-right: -12px;
			background-color: #FFFFFF;
			.action_item {
				flex: 1;
				flex-direction: column;
				color: #84899D;
		
				img {
					width: 24px;
					height: 24px;
					margin-bottom: 2px;
				}
			}
		}
		.shan_bg {
			width: 100vw;
			height: 100vh;
			position: fixed;
			left: 0;
			top: 0;
		}
	}
</style>
