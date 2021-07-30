const envType = process.env.VUE_APP_CURRENTMODE;
let baseURL = {};
if (process.env.NODE_ENV === "development") {
    baseURL.apiURL = "https://api.shanwo.cc/"; //配置访问环境----测试
} else {
    baseURL.apiURL = "https://proapi.zddapi.com/api/"; //配置访问环境----生产
}

export default baseURL;