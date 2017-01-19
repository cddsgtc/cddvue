const path = require('path'),
  webpack = require('webpack'),
  copyWebpack = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function () {
  return {
    entry: {
      vendor: ['jquery', 'vue', 'vuex', 'vue-router'],
      login: './client/login',
      index: './client/index'
    },
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js?[hash:8]',
      publicPath: '',
      sourceMapFilename: '[name].map?[hash:8]'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      },
      extensions: ['.js', '.vue', '.json'],
      modules: ['./node_modules']
    },
    module: {
      loaders: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            loader: 'css-loader'
          })
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: "file-loader?name=assets/media/[name].[ext]?[hash:8]"
          // loader: "url-loader?name=assetes/media/[name].[ext]?[hash:10]"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: [
      // new ForKCheckerPlugin(),
      new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: false,
        allChunks: true
      }),
      new copyWebpack([{
        from: './client/img/**/*',
        to: './assets/media/[name].[ext]'
      }]),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ['index', 'vendor', 'manifest'],
        template: path.join(__dirname, '../client/index.html'),
        filename: 'index.html',
        chunksSortMode: 'dependency'
      }),
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ['login', 'vendor', 'manifest'],
        template: path.join(__dirname, '../client/login.html'),
        filename: 'login.html',
        chunksSortMode: 'dependency'
      })
    ]
  }
};
