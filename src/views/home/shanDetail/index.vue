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
		<!-- 闪页背景 -->
		<div class="shan_bg" :style="{backgroundImage:'url(' + details.background + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}"></div>
		<!-- 闪页头部 -->
		<div class="position_a_view"
			:style="{ width: details.head_schema.width, height: details.head_schema.height, left: details.head_schema.coordinate_x, top: details.head_schema.coordinate_y}">
			<!-- 头像 -->
			<img class="position_a_view" :src="details.head_data.avatar"
				:style="{ width: details.head_schema.avatar.width, height: details.head_schema.avatar.height, left: details.head_schema.avatar.coordinate_x, top: details.head_schema.avatar.coordinate_y, borderRadius: details.head_schema.avatar.radius}" @click="$router.push(`/editUserInfo`)">
			<!-- 昵称 -->
			<div class="position_a_view"
				:style="{ width: details.head_schema.nickname.width, height: details.head_schema.nickname.height, left: details.head_schema.nickname.coordinate_x, top: details.head_schema.nickname.coordinate_y, textAlign: details.head_schema.nickname.text_align, fontSize: details.head_schema.nickname.size, color: details.head_schema.nickname.color}" @click="$router.push(`/editUserInfo`)">
				{{ details.head_data.nickname }}
			</div>
			<!-- 描述 -->
			<div class="position_a_view"
				:style="{ width: details.head_schema.signature.width, height: details.head_schema.signature.height, left: details.head_schema.signature.coordinate_x, top: details.head_schema.signature.coordinate_y, textAlign: details.head_schema.signature.text_align, fontSize: details.head_schema.signature.size, color: details.head_schema.signature.color}" @click="$router.push(`/editUserInfo`)">
				{{ details.head_data.signature }}
			</div>
		</div>
		<!-- 闪页中间链接 -->
    <!-- TODO: 确实图标的宽高xy -->
    <div class="position_a_view"
      :style="{ width: details.center_schema.width, height: details.center_schema.height, left: details.center_schema.coordinate_x, top: details.center_schema.coordinate_y}"
    >
      <div 
        class="center_btn_item dfcen" v-for="(item, index) in details.center_data" :key="index"
        :style="{ width: details.center_schema.button.width, height: details.center_schema.button.height, left: details.center_schema.button.coordinate_x, top: details.center_schema.button.coordinate_y, textAlign: details.center_schema.button.text_align, color: details.center_schema.color, marginBottom: details.center_schema.spacing}"
        @click="$router.push('/editDetail')"
      >
        <img :src="item.image" alt="" :style="{ width: 48 + 'px' }">
        <div class="flex">{{ item.content }}</div>
      </div>
    </div>
		<!-- 闪页底部按钮 -->
    <div class="position_r_view"
      :style="{ width: details.bottom_schema.width, height: details.bottom_schema.height}"
    >
      <img :src="item.image" alt="" v-for="(item, index) in details.bottom_data" :key="index" :style="{ width: details.bottom_schema.icon.width, height: details.bottom_schema.icon.height, left: details.bottom_schema.icon.coordinate_x, top: details.bottom_schema.icon.coordinate_y}">
    </div>
	</div>
</template>
<script>
	import Header from "@/components/common/header.vue"
	import tipPopup from "@/components/common/tipPopup.vue"
	import memberPopup from "@/components/common/memberPopup.vue"
	import cropper from "@/components/common/cropper";
	import {
		mapState,
    mapActions
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
      this.getShanDetail(this.$route.query.id)
		},
		methods: {
      ...mapActions(['getShanDetail']),
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
