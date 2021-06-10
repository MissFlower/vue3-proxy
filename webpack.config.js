const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    modules: [resolve(__dirname, ''), 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ],
  devServer: {
    open: true,
    port: 9999
  }
}