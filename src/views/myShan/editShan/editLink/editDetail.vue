<template>
  <div class="detail_container">
    <Header :backBg="true">
      <div class="save_btn dfcen">保存</div>
    </Header>
    <!-- 链接按钮样式 -->
    <div class="link_view">
      <img class="close_img" src="@/assets/images/myShan/close.png" alt="" @click="deleteLink">
    </div>
    <!-- 修改链接内容 -->
    <div class="edit_link_con">
      <div class="link_btn dfcen" @click="show = !show">
        <div class="btn_label">按钮图标</div>
        <div class="btn_imgs">
          <img src="@/assets/images/myShan/noticon.png" alt="" class="btn_icon">
          <img src="@/assets/images/my/HomeIconRightArrow@2x.png" class="next_icon">
        </div>
      </div>
      <div class="btn_label title">按钮文字</div>
      <input type="text" placeholder="请输入按钮文字">
      <div class="btn_label title">跳转链接</div>
      <input type="text" placeholder="请输入按钮链接">
      <div class="sjhy dfcen" @click="$router.push('/linkGuide')">
				<span>如何获取链接</span>
				<img class="next_icon" src="@/assets/images/myShan/right_icon.png"></img>
			</div>
    </div>
		<!-- 删除弹层 -->
    <tipPopup ref="delete" @handleClickOkey="handleClickOkey"></tipPopup>
		<!-- 获取图标弹层 -->
		<van-popup v-model="show" round position="bottom" :style="{ height: '150px' }">
			<div class="icon_set_view dfcen">
				<div class="icon_item_view dfcen" @click="$router.push('/icons')">
					<img src="@/assets/images/myShan/icons.png">
					<span>图标库</span>
				</div>
				<div class="icon_item_view dfcen">
					<img src="@/assets/images/myShan/photos.png">
					<span>手机相册</span>
					<input
						type="file"
						name="img"
						accept="image/*"
						ref="upup"
						@change="uploadImg($event, 2)"
					/>
				</div>
				<div class="icon_item_view dfcen" @click="show = !show">
					<img src="@/assets/images/myShan/delete.png">
					<span>不使用图标</span>
				</div>
			</div>
		</van-popup>
		<cropper ref="cropper" @updateImgUrl="updateImgUrl" :fromType="1"></cropper>
  </div>
</template>
<script>
import Header from "@/components/common/header.vue"
import tipPopup from "@/components/common/tipPopup.vue"
import cropper from "@/components/common/cropper";
import { Popup } from 'vant';
  export default {
    data() {
      return {
        id: '',
				show: false
      }
    },
    components: {
			[Popup.name]: Popup,
			cropper,
      Header,
      tipPopup
    },
    mounted() {
      this.id = this.$route.query.id
    },
    methods: {
      // 删除链接
      deleteLink() {
				this.$refs.delete.show = true
      },
			// 确认删除
			handleClickOkey() {
				this.$router.back()
			},
			uploadImg(e, code) {
				console.log(e, code)
				// 选择原图之后
				this.$refs.cropper.upphoto(e, code);
				this.show = false
				// e.target.value = "";
			},
			// 上传图片之后的回调，获取图片地址
			updateImgUrl(data) {
				console.log(data)
			}
    }
  }
</script>
<style lang="less" scoped>
.detail_container {
  min-height: 100vh;
  background: linear-gradient(135deg, #A8F2C5 0%, #9AD1CD 100%);
  display: flex;
  flex-direction: column;
  .save_btn {
    width: 68px;
    height: 28px;
    border-radius: 8px;
    color: #1FB1A6;
    background: #fff;
    font-size: 14px;
  }
  .link_view {
    width: 328px;
    height: 60px;
    background: red;
    position: relative;
    margin: 0 auto;
    .close_img {
      width: 32px;
      height: 32px;
      position: absolute;
      right: -16px;
      top: -16px;
    }
  }
  .edit_link_con {
    width: 328px;
    flex: 1;
    background: #fff;
    margin: 14px auto 0;
    border-radius: 16px 16px 0 0;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, .2);
    padding: 10px 14px 0;
    box-sizing: border-box;
    .link_btn {
      height: 56px;
      border-bottom: 1px solid #E5E5E5;
    }
    .btn_imgs {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .btn_icon {
        width: 48px;
        height: 48px;
      }
      .next_icon {
        width: 16px;
        height: 16px;
        margin-left: 2px;
      }
    }
    .title {
      line-height: 55px;
    }
    input {
      border: 1px solid #9ED7D3;
      width: 100%;
      height: 50px;
      padding: 0 12px;
      border-radius: 8px;
      box-sizing: border-box;
    }
    .sjhy {
      color: #4ABDB5;
      margin-top: 15px;
      justify-content: flex-end;
      .next_icon {
        width: 6.33px;
        height: 11.83px;
        margin-left: 5px;
      }
    }
  }
	.icon_set_view {
		height: 100%;
		.icon_item_view {
			flex: 1;
			flex-direction: column;
			color: #84899D;
			font-size: 14px;
			position: relative;
			input {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				opacity: 0;
			}
			img {
				width: 32px;
				height: 32px;
				margin-bottom: 10px;
			}
		}
	}
}
</style>