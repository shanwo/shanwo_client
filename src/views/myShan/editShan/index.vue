<template>
	<!-- :style="{ background: 'url('+ pageDatas.background +')' }" -->
	<div class="edit_container">
		<!-- <div @click="edit(1)">编辑头像</div>
		<div @click="edit(2)">编辑中间图标</div>
		<div @click="$router.push('/editBottom')">编辑底部按钮</div> -->
		<!-- 闪页背景 -->
		<div class="shan_bg"
			:style="{backgroundImage:'url(' + details.background + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
		</div>
		<!-- 闪页头部 -->
		<div class="position_r_view edit_border"
			:style="{ height: details.head_schema.height / 37.5 + 'rem'}">
			<!-- 头像 -->
			<img class="position_a_view" :src="details.head_data.avatar"
				:style="{ width: details.head_schema.avatar.width / 37.5 + 'rem', height: details.head_schema.avatar.height / 37.5 + 'rem', left: details.head_schema.avatar.coordinate_x / 37.5 + 'rem', top: details.head_schema.avatar.coordinate_y / 37.5 + 'rem', borderRadius: details.head_schema.avatar.radius / 37.5 + 'rem'}"
				@click="$router.push(`/editHead`)">
			<!-- 昵称 -->
			<div class="position_a_view"
				:style="{ width: details.head_schema.nickname.width / 37.5 + 'rem', height: details.head_schema.nickname.height / 37.5 + 'rem', left: details.head_schema.nickname.coordinate_x / 37.5 + 'rem', top: details.head_schema.nickname.coordinate_y / 37.5 + 'rem', textAlign: details.head_schema.nickname.text_align, fontSize: details.head_schema.nickname.size / 37.5 + 'rem', color: details.head_schema.nickname.color}"
				@click="$router.push(`/editUserInfo`)">
				{{ details.head_data.nickname }}
			</div>
			<!-- 描述 -->
			<div class="position_a_view"
				:style="{ width: details.head_schema.signature.width / 37.5 + 'rem', height: details.head_schema.signature.height / 37.5 + 'rem', left: details.head_schema.signature.coordinate_x / 37.5 + 'rem', top: details.head_schema.signature.coordinate_y / 37.5 + 'rem', textAlign: details.head_schema.signature.text_align, fontSize: details.head_schema.signature.size / 37.5 + 'rem', color: details.head_schema.signature.color}"
				@click="$router.push(`/editUserInfo`)">
				{{ details.head_data.signature }}
			</div>
			<!-- 编辑按钮 -->
			<img class="edit_img" src="@/assets/images/home/xiugai1@2x.png" >
		</div>
		<!-- 闪页中间链接 -->
		<!-- TODO: 确实图标的宽高xy -->
		<div class="position_r_view edit_border">
			<div class="" :style="{ height: details.center_schema.height / 37.5 + 'rem', overflow: 'scroll'}">
				<div class="center_btn_item dfcen" v-for="(item, index) in details.center_data" :key="index"
					:style="{ width: details.center_schema.button.width / 37.5 + 'rem', height: details.center_schema.button.height / 37.5 + 'rem', left: details.center_schema.button.coordinate_x / 37.5 + 'rem', top: details.center_schema.button.coordinate_y / 37.5 + 'rem', textAlign: details.center_schema.button.text_align, color: details.center_schema.color, marginBottom: details.center_schema.spacing / 37.5 + 'rem'}"
					@click="$router.push('/editDetail')">
					<img :src="item.image" alt="" :style="{ width: 48 / 37.5 + 'rem' }">
					<div class="flex">{{ item.content }}</div>
				</div>
			</div>
			<!-- 编辑按钮 -->
			<img class="edit_img" src="@/assets/images/home/xiugai1@2x.png" >
		</div>
		<!-- 闪页底部按钮 -->
		<div class="position_r_view edit_border dfcen" :class="test" :style="{ height: details.bottom_schema.height / 37.5 + 'rem'}">
			<img :src="item.image" alt="" v-for="(item, index) in details.bottom_data" :key="index"
				:style="{ width: details.bottom_schema.icon.width / 37.5 + 'rem', height: details.bottom_schema.icon.height / 37.5 + 'rem', left: details.bottom_schema.icon.coordinate_x / 37.5 + 'rem', top: details.bottom_schema.icon.coordinate_y / 37.5 + 'rem', marginLeft: details.bottom_schema.spacing / 37.5 / 2 + 'rem', marginRight: details.bottom_schema.spacing / 37.5 / 2 + 'rem'}">
			<!-- 编辑按钮 -->
			<img class="edit_img" src="@/assets/images/home/xiugai1@2x.png" >
		</div>
	</div>
</template>
<script>
	import {
		mapState,
		mapActions
	} from "vuex"
	export default {
		data() {
			return {
				pageDatas: {},
				test: ''
			}
		},
		computed: {
			...mapState({
				details: (state) => state.shanDetail.details
			})
		},
		mounted() {
			this.getShanDetail(this.$route.query.id)
			this.test = {
				width: this.details.bottom_schema.icon.width + 'px'
			}
		},
		methods: {
			...mapActions(['getShanDetail']),
			handleClickOkey() {
				console.log(1)
			}
		}
	};
</script>
<style lang="less" scoped>
	.edit_container {
		// width: 100vw;
		min-height: 100vh;
		// background-position: center center;
		
		background: linear-gradient(135deg, #38EF7D 0%, #11998E 100%);
		padding: 40px 24px 0;
		box-sizing: border-box;
		.edit_border {
			border: 1px dashed #FF4444;
			margin-bottom: 10px;
			.edit_img {
				width: 28px;
				height: 28px;
				position: absolute;
				right: -14px;
				bottom: 50%;
				transform: translate(0, 50%);
			}
		}
	}
</style>
