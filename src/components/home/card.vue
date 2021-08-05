<template>
  <div class="content_view">
    <div class="item_view" v-for="(itemUser, indexUser) in list" :key="indexUser" @click="toDetail(itemUser)" :style="{backgroundImage:'url(' + itemUser.background + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: '100% 100%'}">
      <!-- 用户图片 -->
      <!-- 背景蒙层 -->
      <div class="item_view_bg item_user_info" :class="'item_bg_' + indexUser % 4"></div>
      <!-- 用户信息 -->
      <div class="item_user_info dfcen">
        <img src="@/assets/images/home/shandian.png" class="tip_img"></img>
        <div class="user_head_view">
          <!-- 装饰图 -->
          <img :src="itemUser.pendant" v-if="itemUser.pendant" class="decorate_img" mode=""></img>
          <!-- 头像 -->
          <img class="head_img" :src="itemUser.avatar" mode=""></img>
          <!-- 右下角标 -->
          <img :src="itemUser.badge" v-if="itemUser.badge" mode="" class="icon_img"></img>
        </div>
        <!-- 名字 -->
        <div class="user_name">{{ itemUser.nickname }}</div>
        <!-- 描述 -->
        <div class="user_des text_line2">{{ itemUser.signature }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		mounted() {
		},
    methods: {
      toDetail(item) {
        this.$router.push(`/shanDetail?sort_id=${item.id}`)
      }
    }
  }
</script>
<style lang="less" scoped>
  .content_view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 8px 0;
    .item_view {
      width: 176px;
      height: 200px;
      position: relative;
      margin-bottom: 8px;
			background-size: 100% 100%;
			border-radius: 12px;
      .item_view_bg {
        border-radius: 12px;
        opacity: 0.3;
      }
			.item_bg_0 {
				background: linear-gradient(135deg, #CDF85B 0%, #4747E7 100%);
			}
			.item_bg_1 {
				background: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%);
			}
			.item_bg_2 {
				background: linear-gradient(135deg, #C94B4B 0%, #4B134F 100%);
			}
			.item_bg_3 {
				background: linear-gradient(135deg, #38EF7D 0%, #11998E 100%);
			}
      .item_user_info {
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        .tip_img {
          width: 11px;
          height: 14px;
          position: absolute;
          right: 12px;
          top: 11px;
        }
        .user_head_view {
          position: relative;
          width: 52px;
          height: 52px;
          margin-bottom: 6px;
          .decorate_img {
            width: 72.33px;
            height: 82.67px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 9;
          }
          .head_img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-sizing: border-box;
            border: 2px solid #E5E5E5;
          }
          .icon_img {
            width: 14px;
            height: 14px;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
          }
        }
        .user_name {
          color: #F2F2F2;
          font-size: 18px;
          margin-bottom: 7px;
        }
        .user_des {
          color: #EDEDED;
          font-size: 12px;
					margin: 0 12px;
        }
      }
    }
  }
</style>