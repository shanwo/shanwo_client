import wx from "weixin-js-sdk";

import baseURL from "@/api/env.js";
import {homeApi} from "@/api/api";
import httpRequest from "@/utils/httpRequest";

// 解析浏览器传参
const getUrlParam = name => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

/**
 *
 *
 * 分享相关方法
 *
 *
 *
 * */
// 区分手机型号
export const judgePhone = () => {
    let u = navigator.userAgent;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
        return "ios";
    } else {
        return "android";
    }
};
// 登录方法
const checkLogin = (showType, callback) => {
    const code = getUrlParam("code");
    //根据用户id 判断用户是否登录过
    if (!sessionStorage.getItem("userId") && !sessionStorage.getItem("unionId")) {
        //  未登录用户判断code是否存在
        if (code) {
            // code存在走接口请求，根据code换区用户信息
            let data = {
                code: code,
                userSource: sessionStorage.getItem("userSource")
            };
            httpRequest.myAjax(homeApi.wxLogin, "post", data, res => {
                sessionStorage.setItem("userId", res.userId);
                sessionStorage.setItem("unionId", res.unionId);
                sessionStorage.setItem("enterTimes", 1);
                callback(res);
            });
        } else {
            // 没有code，通过地址获取code
            let local = window.location.href.split("#")[0];
            window.location.href =
                "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                baseURL.appId +
                "&redirect_uri=" +
                encodeURIComponent(local) +
                "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
        }
    } else {
        // 有微信用户直接返回
        callback();
    }
};
// 初始化微信分享，按钮隐藏
export const wxConfigItems = (
    showType,
    path,
    callback,
    videoDesc,
    shareImg
) => {
    let list = [
        "hideMenuItems",
        "showMenuItems",
        "updateTimelineShareData",
        "onMenuShareAppMessage",
        "onMenuShareTimeline",
        "updateAppMessageShareData"
    ];
    // 根据状态判断现实隐藏 showType == 1 显示分享 2 隐藏操作栏
    if (showType == 1 || showType == 3) {
        list = [
            "hideMenuItems",
            "hideOptionMenu",
            "showMenuItems",
            "updateTimelineShareData",
            "onMenuShareAppMessage",
            "onMenuShareTimeline",
            "updateAppMessageShareData"
        ];
    } else {
        list = ["hideMenuItems"];
    }

    let shareUrl = window.location.href.split("#")[0];
    let reqData = {
        shareUrl: shareUrl
    };
    // 请求需要微信验证得参数
    httpRequest.myAjax(homeApi.wxShare, "post", reqData, res => {
        wx.config({
            debug: false,
            appId: res.appId, // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature, // 必填，签名
            jsApiList: list // 必填，需要使用的JS接口列表
        });
        wx.checkJsApi({
            jsApiList: ["chooseImage"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function (res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }
        });
        // 校验完成后出发
        wx.ready(function (res) {
            setTimeout(() => {
                // 默认隐藏所有
                wx.hideOptionMenu("hideOptionMenu");
                wx.hideMenuItems({
                    menuList: [
                        "menuItem:refresh",
                        "menuItem:share:appMessage",
                        "menuItem:share:timeline",
                        "menuItem:share:weiboApp",
                        "menuItem:share:facebook",
                        "menuItem:share:qq",
                        "menuItem:favorite",
                        "menuItem:share:QZone",
                        "menuItem:openWithQQBrowser",
                        "menuItem:openWithSafari",
                        "menuItem:share:email",
                        "menuItem:share:brand",
                        "menuItem:refresh",
                        "menuItem:exposeArticle",
                        "menuItem:setFont"
                    ]
                });
                let toPath = path.split("?")[0];
                // 判断根据不同的页面是否需要显示分享按钮
                if (toPath == "/home") {
                    let menuList = [
                        "menuItem:share:appMessage",
                        "menuItem:share:timeline",
                        "menuItem:favorite"
                    ];
                    wx.showMenuItems({
                        menuList: menuList
                    });
                    let shareUrl = `${baseURL.jumpUrl}${path}`;
                    let shareCt = {
                        title: videoDesc || "展业素材库：海量素材免费用，每日更新不重样！", // 分享时的标题
                        link: shareUrl, // 分享时的链接
                        desc: shareUrl ? "" : "让每一次优质内容分享，都成为你的获客机会~",
                        imgUrl: shareImg ||
                            "https://zdd-5.com/yingxiaoyun/market_poster/master/images/icon/poAy20yWV1je4wbF.png" // 分享时的图标,
                    };
                    // 分享好友
                    wx.onMenuShareAppMessage({
                        ...shareCt,
                        success: function (res) {
                            if (callback) {
                                callback();
                            }
                            // 用户点击了分享后执行的回调函数
                        }
                    });
                    //   分享到朋友圈接口
                    wx.onMenuShareTimeline({
                        ...shareCt,
                        success: function () {
                            //给用户添加1次抽奖机会
                            if (callback) {
                                callback();
                            }
                        },
                        //用户取消分享后执行的回调函数
                        cancel: function () {
                            console.log("分享朋友圈----取消分享");
                        }
                    });
                }
            }, 10);
        });
        wx.error(function (res) {
            console.log("失败==", res);
        });
    });
};

export {getUrlParam, checkLogin};