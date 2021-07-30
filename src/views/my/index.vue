<template>
  <div class="my_container">
    <div class="user_info_view dfsb">
      <div class="user_head">
        <img class="head" src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" alt="">
        <img src="@/assets/images/home/check.png" mode="" class="icon_img"></img>
      </div>
      <div class="name_des" @click="$router.push('/editUserInfo')">
        <div class="name">
          <span>小仙女谭敏</span>
          <img src="@/assets/images/my/edit_my.png" alt="">
        </div>
        <div class="des">成熟男子愿意为某种事业卑贱地活着</div>
      </div>
    </div>
    <div class="content_view">
			<div class="my_action dfcen" @click="$router.push('/memberDes')">
				<img class="action_icon" src="@/assets/images/my/my_icon1.png" mode=""></img>
				<div class="action_des">
					<div class="title">会员</div>
					<div class="title2">开通会员即可享受5大权益</div>
				</div>
				<div class="sj_view dfcen">升级</div>
				<img src="@/assets/images/my/HomeIconRightArrow@2x.png" class="next_icon" mode=""></img>
			</div>
      <div class="my_action dfcen" @click="$router.push('/myLiked')">
				<img class="action_icon" src="@/assets/images/my/my_icon2.png" mode=""></img>
				<div class="action_des">
					<div class="title">闪页</div>
					<div class="title2">我关注的人</div>
				</div>
				<div class="count dfcen">共3页</div>
				<img src="@/assets/images/my/HomeIconRightArrow@2x.png" class="next_icon" mode=""></img>
			</div>
			<div class="my_action dfcen" @click="$router.push('/linkGuide')">
				<img class="action_icon" src="@/assets/images/my/my_icon4.png" mode=""></img>
				<div class="action_des">
					<div class="title">教学</div>
					<div class="title2">如何复制各个平台的链接</div>
				</div>
				<img src="@/assets/images/my/HomeIconRightArrow@2x.png" class="next_icon" mode=""></img>
			</div>
			<div class="my_action dfcen">
				<img class="action_icon" src="@/assets/images/my/my_icon5.png" mode=""></img>
				<div class="action_des">
					<div class="title">关注“闪我”公众号</div>
					<div class="title2">别人关注你或你关注的人有更新提醒</div>
				</div>
				<img src="@/assets/images/my/HomeIconRightArrow@2x.png" class="next_icon" mode=""></img>
			</div>
		</div>
  </div>
</template>
<style lang="less" scoped>
  .my_container {
    min-height: 100vh;
    background: #F6F6F6 url('../../assets/images/my/bg_icon.png') no-repeat;
    background-size: 100% 292px;
    padding: 0 24px;
    .user_info_view {
      padding: 30px 0 22px;
      .user_head {
      width: 60px;
      height: 60px;
      position: relative;
      .head {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #E5E5E5;
        box-sizing: border-box;
      }
      .icon_img {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .name_des {
      flex: 1;
      margin-left: 16px;
      .name {
        font-size: 18px;
        color: #000000;
        display: flex;
        align-items: center;
        img {
          width: 28px;
          height: 28px;
          margin-left: 4px;
        }
      }
    }
    }
    
    .content_view {
			.my_action {
				height: 64px;
				background-color: #FFFFFF;
				border-radius: 10px;
				padding: 0 10px 0 20px;
				margin-bottom: 12px;
				.action_icon {
					width: 32px;
					height: 32px;
					margin-right: 10px;
				}
				.action_des {
					flex: 1;
					.title {
						font-size: 16px;
						color: #001133;
					}
					.title2 {
						color: #8B90A3;
						font-size: 12px;
					}
				}
				.count {
					color: #518CFF;
					font-size: 12px;
					margin-right: 4px;
				}
				.sj_view {
					width: 46px;
					height: 21px;
					border-radius: 9px;
					border: 1px solid #FDC165;
					color: #FDC165;
					margin-right: 6px;
					font-size: 12px;
				}
				.next_icon {
					width: 16px;
					height: 16px;
				}
			}
		}
  }
</style>