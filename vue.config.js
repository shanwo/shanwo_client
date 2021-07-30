const path = require("path");
const webpack = require("webpack");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/market-poster", // 基本路径
  outputDir: "dist", // 输出文件目录
  assetsDir: "static", //放置生成的静态文件目录（js css img）
  lintOnSave: process.env.NODE_ENV !== "production", // eslint-loader 是否在保存的时候检查，在开发环境监测
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
		config.module
			.rule('vue')
			.test(/\.vue$/)
			.use('style-rem-loader')
				.loader('style-rem-loader')
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
      Object.assign(config, {
        optimization
      });
    }
  },
  // 第三方插件配置
  pluginOptions: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
};
