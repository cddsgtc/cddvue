const webpack = require('webpack'),
  commonConfig = require('./base.js'),
  webpackMerge = require('webpack-merge'),
  friendErrors = require('friendly-errors-webpack-plugin');

module.exports = function () {
  return webpackMerge(commonConfig(), {
    // entry: {
    //   client: './client/index.js'
    // },
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new friendErrors()
    ]
  })
};
