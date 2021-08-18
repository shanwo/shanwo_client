import httpRequest from "@/utils/httpRequest";
import apis from "@/api/api.js";
const shanDetail = {
  state: {
    details: {
      id: 1,
      sort_id: 9,
      name: "免费模板",
      order: 1,
      preview: "https://cdn.shanwo.cc/local/picture/2021/06/ec763a1279b.jpg",
      background: "https://cdn.shanwo.cc/local/picture/2021/06/ec763a1279b.jpg",
      head_schema: {
        width: "375px",
        height: "192px",
        coordinate_x: "0px",
        coordinate_y: "74px",
        avatar: {
          width: "88px",
          height: "88px",
          coordinate_x: "143px",
          coordinate_y: "0px",
          radius: "44px",
        },
        badge: {
          width: "78.67px",
          height: "94.67px",
          coordinate_x: "120px",
          coordinate_y: "40px",
          radius: "12px",
        },
        pendant: {
          width: "78.67px",
          height: "94.67px",
          coordinate_x: "120px",
          coordinate_y: "40px",
          radius: "12px",
        },
        nickname: {
          size: "22px",
          color: "#F2F2F2",
          coordinate_x: "146px",
          coordinate_y: "100px",
          text_align: "center",
          width: "82px",
          height: "22px",
        },
        signature: {
          size: "18px",
          color: "#E8E7E7",
          coordinate_x: "120px",
          coordinate_y: "132px",
          text_align: "center",
          width: "133px",
          height: "18px",
        },
      },
      head_data: {
        avatar: "https://cdn.shanwo.cc/local/picture/2021/06/ec76377352f.jpg",
        badge: "",
        pendant: "",
        nickname: "刘德华",
        signature: "中国著名女演员",
      },
      center_schema: {
        width: "328px",
        height: "320px",
        coordinate_x: "24px",
        coordinate_y: "253px",
        spacing: "16px",
        size: "6.67px",
        color: "#FDDFB1",
        count: "16px",
        button: {
          coordinate_x: "120px",
          coordinate_y: "40px",
          height: "60px",
          text_align: "center",
          width: "328px",
        },
      },
      center_data: [
        {
          url: "https://user.qzone.qq.com/83117850 ",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec763130211.png",
          content: "我的QQ空间",
          id: 6,
        },
        {
          url: "https://weibo.com/83117850 ",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec76322bb95.png",
          content: "我的微博",
          id: 1,
        },
        {
          content: "抖音",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec763156084.png",
          url: "https://www.douyin.com ",
          id: 2,
        },
        {
          content: "快手",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec76317b5c2.png",
          url: "https://www.kuaishou.com ",
          id: 3,
        },
        {
          url: "https://user.qzone.qq.com/83117850 ",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec763130211.png",
          content: "我的QQ空间",
          id: 6,
        },
        {
          url: "https://weibo.com/83117850 ",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec76322bb95.png",
          content: "我的微博",
          id: 1,
        },
        {
          content: "抖音",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec763156084.png",
          url: "https://www.douyin.com ",
          id: 2,
        },
        {
          content: "快手",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec76317b5c2.png",
          url: "https://www.kuaishou.com ",
          id: 3,
        },
      ],
      bottom_schema: {
        width: "100%",
        height: "40",
        coordinate_x: "0px",
        coordinate_y: "600px",
        spacing: "28px",
        icon: {
          coordinate_x: "120",
          coordinate_y: "40",
          height: "40px",
          width: "40px"
        },
      },
      bottom_data: [
        {
          content: "wzxaini_9",
          type: "string",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec76325841f.jpg",
          id: 10,
        },
        {
          type: "string",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec7630fd379.png",
          content: "83117850",
          id: 5,
        },
        {
          type: "url",
          image: "https://cdn.shanwo.cc/local/picture/2021/06/ec763130211.png",
          content: "https://user.qzone.qq.com/83117850 ",
          id: 6,
        },
      ],
      type: 1,
      is_delete: 0,
      updated_at: "2021-07-25 00:25:20",
      created_at: "2021-06-27 14:46:03",
    },
  },
  mutations: {},
  actions: {
    getShanDetail(context, id) {
      httpRequest.myAjax(`${apis.templateInfo}?id=${id}`, "GET", {}, (res) => {
        console.log(res);
      });
    },
  },
};
export default shanDetail;
