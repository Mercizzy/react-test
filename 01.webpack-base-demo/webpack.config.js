const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "mode": "development",  //development,production
  "plugins": [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],  //表示后缀名不需要，会自动补全
    alias: {  //配置别名
      '@': path.join(__dirname, './src')
    }
  }
};