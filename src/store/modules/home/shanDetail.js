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
        width: "328",
        height: "170",
        coordinate_x: "24",
        coordinate_y: "39",
        avatar: {
          width: "88",
          height: "88",
          coordinate_x: "124",
          coordinate_y: "12",
          radius: "44",
        },
        badge: {
          width: "78.67",
          height: "94.67",
          coordinate_x: "120",
          coordinate_y: "40",
          radius: "12",
        },
        pendant: {
          width: "78.67",
          height: "94.67",
          coordinate_x: "120",
          coordinate_y: "40",
          radius: "12",
        },
        nickname: {
          size: "22",
          color: "#F2F2F2",
          coordinate_x: "146",
          coordinate_y: "100",
          text_align: "center",
          width: "82",
          height: "22",
        },
        signature: {
          size: "18",
          color: "#E8E7E7",
          coordinate_x: "120",
          coordinate_y: "132",
          text_align: "center",
          width: "133",
          height: "18",
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
        width: "328",
        height: "320",
        coordinate_x: "24",
        coordinate_y: "253",
        spacing: "16",
        size: "6.67",
        color: "#FDDFB1",
        count: "16",
        button: {
          coordinate_x: "120",
          coordinate_y: "40",
          height: "60",
          text_align: "center",
          width: "328",
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
				}
      ],
      bottom_schema: {
        width: "375",
        height: "40",
        coordinate_x: "0",
        coordinate_y: "600",
        spacing: "28",
        icon: {
          coordinate_x: "120",
          coordinate_y: "40",
          height: "40",
          width: "40"
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
  mutations: {
		setDetails(state, val) {
			state.details = val
		}
	},
  actions: {
    getShanDetail(context, id) {
      httpRequest.myAjax(`${apis.templateInfo}?id=${id}`, "GET", {}, (res) => {
        console.log(res);
				// context.commit('setDetails', res)
      });
    },
  },
};
export default shanDetail;
