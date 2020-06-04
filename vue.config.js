const path = require('path');

module.exports = {
  outputDir: './demo/dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-rough-notation/'
    : '/',
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './demo/main.js'),
    },
  },
}
