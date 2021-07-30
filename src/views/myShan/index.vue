<template>
  <div class="shan_container">
    <div class="shan_header dfsb">
			<div class="shan_tip">我的闪页</div>
			<div class="add_shan dfcen" @click="addShan">
        <van-icon name="plus" />
				<span>添加闪页</span>
			</div>
		</div>
    <div class="shan_content">
      <div class="shan_item" v-for="item in 10">
				<div class="item_user dfcen">
					<div class="user_head_view">
						<img class="user_head" src="@/assets/images/myShan/empty_icon.png" mode=""></img>
						<img class="head_tip" src="@/assets/images/myShan/head_tip.png" mode=""></img>
					</div>
					<div class="user_info">
						<div class="user_name_preview dfsb">
							<div class="name fz32">爱你的小傻瓜</div>
							<div class="preview_view dfcen">
								<span>预览</span>
								<img class="next_icon" src="@/assets/images/myShan/right_icon.png" mode=""></img>
							</div>
						</div>
						<div class="user_des">这个人还没写介绍</div>
					</div>
				</div>
				<div class="action_view dfcen">
					<div class="action_item dfcen" @click="actions(1)">
						<img src="@/assets/images/myShan/edit_icon.png" mode=""></img>
						<span>编辑</span>
					</div>
					<div class="action_item dfcen">
						<img src="@/assets/images/myShan/Eye@2x.png" mode=""></img>
						<span>广场</span>
					</div>
					<div class="action_item dfcen" @click="$router.push('/fans')">
						<img src="@/assets/images/myShan/Vector@2x.png" mode=""></img>
						<span>617</span>
					</div>
					<div class="action_item_end dfcen" @click="handleClickdel(item)">
						<img src="@/assets/images/myShan/Clip2@2x.png" mode=""></img>
						<span>删除</span>
					</div>
				</div>
			</div>
			<div class="sjhy dfcen">
				<span>升级会员创建更多闪页</span>
				<img class="next_icon" src="@/assets/images/myShan/right_icon.png" mode=""></img>
			</div>
    </div>
    <empty v-if="isEmpty" tipTitle1="请添加一个闪页" tipTitle2="将您的所有内容连接到一个链接"></empty>
		<!-- 删除弹层 -->
		<tipPopup ref="delete" @handleClickOkey="handleClickOkey"></tipPopup>
  </div>
</template>
<script>
import { Icon } from 'vant';
import empty from "@/components/common/empty.vue"
import tipPopup from "@/components/common/tipPopup.vue"
export default {
  components: {
    empty,
		tipPopup,
    [Icon.name]: Icon
  },
  data() {
    return {
      isEmpty: false
    }
  },
  methods: {
    addShan() {
      this.$router.push('/templates')
    },
    actions(type) {
      if(type == 1) {
        this.$router.push('/editShan')
      }
    },
		handleClickdel(item) {
			this.$refs.delete.show = true
		},
		handleClickOkey() {
			
		}
  }
}
</script>
<style lang="less" scoped>
.shan_container {
  min-height: 100vh;
  background: #F6F6F6;
  .shan_header {
    width: 100%;
    padding: 0 12px;
    z-index: 999;
    height: 60px;
    box-sizing: border-box;
    position: fixed;
    background: #F6F6F6;
    .shan_tip {
      font-size: 24px;
      color: #333333;
    }
    .add_shan {
      color: #FFFFFF;
      background: linear-gradient(323deg, #00A89C 0%, #93D2CD 100%);
      border-radius: 8px;
      width: 88px;
      height: 28px;
      font-size: 14px;
      span {
        margin-left: 2px;
      }
    }
  }
  .shan_content {
    padding: 70px 12px 20px;
    box-sizing: border-box;
    .shan_item {
      border-radius: 8px;
      border: 1px solid #9ED7D3;
      margin-bottom: 12px;
      height: 136px;
      box-sizing: border-box;
      background: #FFFFFF;
      .item_user {
        height: 92px;
        border-bottom: 1px solid #9ED7D3;
        padding-left: 12px;
        .user_head_view {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2px solid #E5E5E5;
          position: relative;
          .user_head {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          .head_tip {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 17px;
            height: 17px;
          }
        }
        .user_info {
          flex: 1;
          margin-left: 12px;
          .user_name_preview {
            padding-right: 20px;
            margin-bottom: 8px;
            .preview_view {
              width: 48px;
              height: 20px;
              border-radius: 4px;
              box-sizing: border-box;
              border: 1px solid #9ED7D3;
              font-size: 12px;
              color: #9ED7D3;
              .next_icon {
                width: 5.33px;
                height: 9.33px;
                margin-left: 3px;
              }
            }
          }
          .user_des {
            color: #84899D;
          }
        }
      }
      .action_view {
        height: 43px;
        font-size: 12px;
        .action_item, .action_item_end {
          position: relative;
          flex: 1;
          img {
            width: 24px;
            height: 24px;
            margin-right: 3px;
          }
        }
        .action_item::after {
          width: 1px;
          background-color: #9ED7D3;
          height: 19px;
          content: ' ';
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
    .sjhy {
      color: #4ABDB5;
      justify-content: flex-end;
      .next_icon {
        width: 6.33px;
        height: 11.83px;
        margin-left: 5px;
      }
    }
  }
}
</style>