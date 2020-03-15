module.exports = {
  configureWebpack: {
    externals: {
      AMap: 'AMap'
    },
  },
  devServer: {
    https: true
  }
};
