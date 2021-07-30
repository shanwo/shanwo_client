import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/css/reset.css";
import httpRequest from "@/utils/httpRequest";
import store from "./store";
import {
    checkLogin,
    getUrlParam,
    wxConfigItems,
    judgePhone
} from "@/utils/login";

import "lib-flexible";
import baseURL from "@/api/env.js";

import 'vant/lib/index.less'

Vue.prototype.$myRequest = httpRequest.myRequest; // ajax请求方法
Vue.prototype.$myAjax = httpRequest.myAjax; // ajax请求方法
Vue.config.productionTip = false;

// 所有接口api
import apis from "@/api/api.js";
Vue.prototype.$api = apis;

// 测试
sessionStorage.setItem("code", "code");
sessionStorage.setItem("unionId", "o86GNwfImF03Tbs_uWsYCM54xnD4");
sessionStorage.setItem("userId", "9");

// 正式
// sessionStorage.setItem("code", "code");
// sessionStorage.setItem("unionId", "o86GNweWJ2VClSGVVrNoQezGYYtU");
// sessionStorage.setItem("userId", "1");

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "首页";
    const code = getUrlParam("code"); //获取浏览器登录时需要得code

    let PhoneType = judgePhone();
    if (!sessionStorage.getItem("userId") && !sessionStorage.getItem("unionId")) {
        // 判断如果没有code跳转获取code
        if (!sessionStorage.getItem("hasRedirect") && !code) {
            let local = window.location.href.split("#")[0];
            window.location.href =
                "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                baseURL.appId +
                "&redirect_uri=" +
                encodeURIComponent(local) +
                "&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect";
        } else {
            // 此处只在ios得时候调用，相当于ios需要调用两次，当时为了解决低版本得兼容问题
            if (PhoneType == "ios") {
                if (to.path == "/") {
                    wxConfigItems(1, to.path);
                }
            }
            next();
        }
    } else {
        next();
    }

});

new Vue({
    router,
		store,
    render: h => h(App)
}).$mount("#app");