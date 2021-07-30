module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    //配置vant,自动按需要引入
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
