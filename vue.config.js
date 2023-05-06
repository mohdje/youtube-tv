const { defineConfig } = require('@vue/cli-service')

module.exports =  defineConfig({
  transpileDependencies: true,
  publicPath: '',
  configureWebpack: config => {
    config.optimization.splitChunks = false;
    config.output.filename = '[name].js';
    config.output.chunkFilename = '[name].js';
  },
  chainWebpack: config => {
    config.plugin('extract-css')
      .tap(([options, ...args]) => [
        Object.assign({}, options, { filename: '[name].css' }),
        ...args
      ])
  }
})