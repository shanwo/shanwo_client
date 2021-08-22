<template>
  <div class="edit_head">
    <Header>
      <div class="save_btn dfcen">保存</div>
    </Header>
    <div class="head_content">
      <div class="head_edit_view border_view">
        <div class="title_view">头像</div>
        <div class="head_view dfcen">
          <div class="head_img_view">
            <!-- 用户头像 -->
            <img class="user_head" src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" alt="">
            <!-- 头像装饰 -->
            <img src="@/assets/images/home/des.png" class="decorate_img" mode=""></img>
            <!-- 头像 -->
            <!-- 右下角标 -->
            <img src="@/assets/images/home/check.png" mode="" class="icon_img"></img>
          </div>
        </div>
        <div class="title_view">徽章</div>
        <div class="icon_view">
          <div class="icons_scroll">
            <div class="icon_item" v-for="(item, i) in 20" :key="i">
              <img src="@/assets/images/home/check.png" mode="" class="icon_img"></img>
            </div>
          </div>
        </div>
        <div class="title_view">挂件</div>
        <div class="gj_view">
          <div class="gj_scroll">
            <img v-for="(item, i) in 20" :key="i" src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="border_view user_name_view dfcen">
        <div class="name">姓名:</div>
        <input type="text" placeholder="请输入姓名">
      </div>
      <div class="border_view des_view">
        <img src="@/assets/images/myShan/info.png" alt="">
        <textarea placeholder="请输入简介" rows="6" maxlength="100" v-model="des"></textarea>
        <div class="font_count">
          {{ des.length }}/100
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/header.vue"
import { mapState } from "vuex";
  export default {
    data() {
      return {
        name: '',
        des: ''
      }
    },
		computed: {
		  ...mapState({
		    details: (state) => state.shanDetail.details,
		  }),
		},
    components: {
      Header
    }
  }
</script>
<style lang="less" scoped>
.edit_head {
  min-height: 100vh;
  background: #F6F7F9;
	padding-top: 100px;
	box-sizing: border-box;
  .save_btn {
    background: linear-gradient(323deg, #00A89C 0%, #93D2CD 100%);
    width: 68px;
    height: 28px;
    border-radius: 8px;
    color: #fff;
  }
  .head_content {
    padding: 0 12px 20px;
    font-size: 14px;
    .border_view {
      border: 1px solid #9ED7D3;
      border-radius: 8px;
      margin-bottom: 14px;
    }
    .head_edit_view {
      padding: 12px;
      .title_view {
        color: #666666;
        font-size: 16px;
      }
      .head_view {
        height: 120px;
        .head_img_view {
          width: 88px;
          height: 88px;
          position: relative;
          .user_head {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #E5E5E5;
          }
          .decorate_img {
            width: 146px;
            height: 146px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .icon_img {
            width: 16px;
            height: 16px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }
      .icon_view {
        margin-top: 20px;
        height: 33px;
        overflow: scroll;
        border-bottom: 1px solid #E5E5E5;
        margin-bottom: 16px;
        .icons_scroll {
          display: flex;
          height: 100%;
          .icon_item {
            height: 100%;
            img {
              width: 18px;
              height: 18px;
              margin-right: 24px;
            }
          }
        }
      }
      .gj_view {
        height: 88px;
        overflow: scroll;
         margin: 10px 0;
        .gj_scroll {
          display: flex;
          img {
            width: 88px;
            height: 88px;
            margin-right: 6px;
          }
        }
      }
    }
    .user_name_view {
      height: 52px;
      padding: 0 12px;
      .name {
        color: #4ABDB5;
        font-size: 14px;
        margin-right: 8px;
      }
      input {
        flex: 1;
      }
    }
    .des_view {
      padding: 10px 10px 24px;
      display: flex;
      position: relative;
      img {
        width: 32px;
        height: 32px;
        margin-right: 9px;
      }
      textarea {
        padding-top: 6px;
        flex: 1;
      }
      .font_count {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #B4B8C9;
        font-size: 12px;
      }
    }
  }
}
</style>