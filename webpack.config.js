const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  entry: join(__dirname, 'test', 'simple.test.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  node: {
    fs: 'empty'
  }
};

