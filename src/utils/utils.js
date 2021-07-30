import wx from "weixin-js-sdk";

const chooseImage = () => {
    // 拍照或从手机相册中选图接口
    wxConfigItems(["chooseImage", "getLocalImgData"], () => {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                var localId = res.localIds[0]; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片

                wx.getLocalImgData({
                    // 备注：此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题。
                    localId: localId, // 图片的localID
                    success: function(res) {
                        var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                        if (localData.indexOf("data:image") != 0) {
                            localData = "data:image/jpeg;base64," + localData;
                        }
                        localData = localData
                            .replace(/\r|\n/g, "")
                            .replace("data:image/jgp", "data:image/jpeg");
                    }
                });
            }
        });
    });
};

const previewImage = (current, urls) => {
    // 预览图片接口
    wxConfigItems(["previewImage"], () => {
        wx.previewImage({
            current: current, // 当前显示图片的http链接 ''
            urls: urls // 需要预览的图片http链接列表 []
        });
    });
};

// 数值转换
const numTransform = function(num) {
    num = Number(num);
    var numLength = num.toString().length;
    if (num) {
        if (numLength < 5) {
            num = num;
        }
        if (numLength >= 5 && numLength < 8) {
            num = (num / 10000).toString();
            var splitNum = num.split(".");
            num = splitNum.length > 1 ? splitNum[0] + "." + splitNum[1][0] + "w+" : splitNum + 'w+';
        }
        if (numLength >= 8) {
            num = '999w+'
                // num = (num / 100).toString();
                // var splitNum = num.split(".");
                // num = splitNum[0] + "." + splitNum[1][0] + "亿";
        }
    } else {
        num = 0;

    }

    return num;
};

export { chooseImage, previewImage, numTransform };