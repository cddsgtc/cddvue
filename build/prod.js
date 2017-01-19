const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
const webpack = require('webpack');

module.exports = function () {
  return webpackMerge(commonConfig(), {
    devtool : 'source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        beautyfy: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  })
};
