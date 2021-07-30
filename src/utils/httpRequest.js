import axios from "axios";
import { Toast } from "vant";
import baseURL from "../api/env.js";

const http = axios.create({
    timeout: 2000 * 500,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
});

http.__proto__ = axios;
/**
 * 请求拦截
 */
http.interceptors.request.use(
    config => {
        config.headers.sn = new Date().getTime();
        config.headers.token = sessionStorage.getItem("unionId");
        // config.headers.unionId = "o86GNwfImF03Tbs_uWsYCM54xnD4";

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
    response => {
        if (response.data.code && response.data.code !== 200) {
            let msg = response.data.msg;
            Toast(msg);
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 请求地址处理
 */
http.adornUrl = actionName => {
    return baseURL.apiURL + actionName;
};

/**
 * 封装ajax请求
 * 1.reqUrl、reqMethod为必填选项
 * 2.type存在时导出数据
 * @param {String}   reqUrl                   请求地址
 * @param {String}   reqMethod                请求方式
 * @param {JSON}     reqData                  请求数据
 * @param {Function} callback                 回调函数
 * @param {Function} dir                      直接返回响应数据
 */

const myAjax = (reqUrl, reqMethod, reqData, callback, dir) => {
    http({
            url: http.adornUrl(reqUrl),
            method: reqMethod,
            data: reqData
						
        })
        .then(({ data }) => {
            if (dir) {
                callback(data);
            } else if (data && data.code == 200) {
                callback(data.data);
            } else {
                Toast(data.msg);
            }
        })
        .catch(({ data }) => {});
};
const myAjax2 = (reqUrl, reqData, reqHeader, callback) => {
    http({
            url: baseURL.apiURL2 + reqUrl,
            method: "post",
            data: reqData,
            headers: {
                ...reqHeader,
                crossDomain: true
            }
        })
        .then(({ data }) => {
            if (data && data.code == 200) {
                callback(data.data);
            } else {
                Toast(data.msg);
            }
        })
        .catch(({ data }) => {});
};
const myRequest = (reqUrl, reqMethod, reqData) => {
    return http.request({
        url: http.adornUrl(reqUrl),
        method: "post",
        data: reqData
    });
};
export default {
    myAjax,
    myAjax2,
    myRequest
};