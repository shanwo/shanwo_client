<template>
  <div class="edit_container" :style="{ background: 'url('+ pageDatas.background +')' }">
    <div @click="edit(1)">编辑头像</div>
    <div @click="edit(2)">编辑中间图标</div>
    <div @click="$router.push('/editBottom')">编辑底部按钮</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageDatas: {}
    }
  },
  mounted() {
    this.pageDatas = {
      id: 14,
        uid: 1,
        template_id: 1,
        background:
          "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec763a1279b.jpg",
        code: "",
        follow: 0,
        browse: 3,
        sort: 0,
        is_open: 1,
        head_config: {
          width: "78.67vw",
          height: "94.67vw",
          coordinate_x: "120",
          coordinate_y: "40",
          avatar: {
            width: "78.67vw",
            height: "94.67vw",
            coordinate_x: "120",
            coordinate_y: "40",
            radius: "12px",
            image:
              "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec76377352f.jpg",
          },
          badge: {
            width: "78.67vw",
            height: "94.67vw",
            coordinate_x: "120",
            coordinate_y: "40",
            radius: "12px",
            image: "",
          },
          pendant: {
            width: "78.67vw",
            height: "94.67vw",
            coordinate_x: "120",
            coordinate_y: "40",
            radius: "12px",
            image: "",
          },
          nickname: {
            size: "4vw",
            color: "#FDDFB1",
            coordinate_x: "120",
            coordinate_y: "40",
            content: "\u7231\u4f60\u306e\u5c0f\u50bb\u74dc",
          },
          signature: {
            size: "6.67vw",
            color: "#FDDFB1",
            content: "\u8fd9\u4e2a\u4eba\u8fd8\u6ca1\u5199\u4ecb\u7ecd\u5462~2",
            coordinate_x: "120",
            coordinate_y: "40",
          },
        },
        center_config: {
          width: "78.67vw",
          height: "94.67vw",
          coordinate_x: "120",
          coordinate_y: "40",
          spacing: "2vw",
          size: "6.67vw",
          color: "#FDDFB1",
          count: "16",
          button: [
            {
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec763130211.png",
              url: "https:\/\/user.qzone.qq.com\/83117850",
              content: "\u6211\u7684QQ\u7a7a\u95f4",
            },
            {
              content: "\u6211\u7684\u5fae\u535a",
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec76322bb95.png",
              url: "https:\/\/weibo.com\/83117850",
            },
            {
              content: "\u6296\u97f3",
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec763156084.png",
              url: "https:\/\/www.douyin.com",
            },
            {
              content: "\u5feb\u624b",
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec76317b5c2.png",
              url: "https:\/\/www.kuaishou.com",
            },
          ],
        },
        bottom_config: {
          width: "78.67vw",
          height: "94.67vw",
          coordinate_x: "120",
          coordinate_y: "40",
          spacing: "2vw",
          icon: [
            {
              content: "wzxaini_9",
              type: "string",
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec76325841f.jpg",
            },
            {
              content: "83117850",
              type: "string",
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec7630fd379.png",
            },
            {
              content: "https:\/\/user.qzone.qq.com\/83117850",
              type: "url",
              image:
                "https:\/\/cdn.shanwo.cc\/local\/picture\/2021\/06\/ec763130211.png",
            },
          ],
        },
        is_delete: 0,
        updated_at: "2021-07-10 23:29:53",
        created_at: "2021-07-09 16:44:30",
    };
  },
  methods: {
    edit(type) {
      if(type == 1) {
        this.$router.push('/editHead')
      }
      if(type == 2) {
        this.$router.push('/editLink')
      }
    }
  },
};
</script>
<style lang="less" scoped>
.edit_container {
  width: 100vw;
  height: 100vh;
  background-position: center center;
}
</style>
