const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: { 
    performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false,
      maxEntrypointSize: 5000000,
      maxAssetSize: 3000000
    }
  },
  chainWebpack: config => {
    config.module.rule('svg').uses.clear();
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  }
}