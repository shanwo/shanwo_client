<template>
	<div class="guide_container">
		<van-collapse v-model="activeName" accordion>
		  <van-collapse-item title="社交(10)" name="1">
				<div class="content_item dfcen" v-for="(item, i) in 5" :key='i'>
					<img src="@/assets/images/myShan/noticon.png" class="item_icon">
					<div class="item_title dfsb" @click="$router.push('/guideDetail?id='+ item +'')">
						<span>公众号</span>
						<img src="@/assets/images/myShan/HomeIconRightArrow.png" >
					</div>
				</div>
			</van-collapse-item>
		  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
		  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
		</van-collapse>
		<Back></Back>
	</div>
</template>

<script>
import { Collapse, CollapseItem } from 'vant';
import Back from "@/components/common/back.vue"
  export default {
    data() {
      return {
        activeName: ''
      }
    },
    components: {
			Back,
			[Collapse.name]: Collapse,
			[CollapseItem.name]: CollapseItem
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>
<style lang="less" scoped>
	.guide_container {
		.content_item {
			height: 56px;
			color: #84899D;
			.item_icon {
				width: 28px;
				height: 28px;
				margin-right: 10px;
			}
			.item_title {
				flex: 1;
				img {
					width: 19px;
					height: 19px;
				}
			}
		}
		/deep/ .van-cell--clickable {
			line-height: 44px;
		}
		/deep/ .van-cell__right-icon {
			position: absolute;
			left: 12px;
			top: 50%;
			transform: translate(0, -50%);
			font-size: 18px;
		}
		/deep/ .van-cell__title {
			padding-left: 26px;
			font-size: 16px;
			color: #333333;
		}
		/deep/ .van-collapse-item--border::after {
			border-top: 1px solid #E5E5E5;
		}
	}
</style>
