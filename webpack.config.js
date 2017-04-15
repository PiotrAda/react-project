var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, './client/app');
var BUILD_DIR = path.resolve(__dirname, './client/dist');

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: APP_DIR + '/index.html',
  inject: 'body'
});

module.exports = {
  entry: APP_DIR + '/index.js',
  module: {
    loaders:[
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        include: APP_DIR,
        loader: 'file-loader',
      }
    ]
  },
  devServer:{
    contentBase: BUILD_DIR,
    inline: true
  },
  output: {
    filename: 'index.js',
    path: BUILD_DIR
  },
plugins: [HTMLWebpackPluginConfig]
};
