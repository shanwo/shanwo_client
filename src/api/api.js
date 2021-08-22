const homeApi = {
  
};
const apis = {
  templateInfo: "page/info",
	wxLogin: `user/login`, //h5 登录
	wxShare: `user/getWeChatConfig`, //h5 分享
	getRecent: `home/recent`, // 首页 - 最近更新
	getHot: `home/hot`, // 首页 - 热门
	getTemplateList: `template/lists` // 模板列表
};

module.exports = apis;