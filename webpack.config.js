const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  entry: join(__dirname, 'test', 'simple.test.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  node: {
    fs: 'empty'
  }
};

