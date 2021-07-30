const homeApi = {
  wxLogin: `user/login`, //h5 登录
  wxShare: `user/getWeChatConfig`, //h5 分享
  getRecent: `home/recent`, // 首页 - 最近更新
  getHot: `home/hot`, // 首页 - 热门
};
const myShan = {
  pageInfo: "page/info?id=14",
};


const apis = {
  ...homeApi,
  ...myShan
};
module.exports = apis;