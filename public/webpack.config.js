/**
 * Created by Administrator on 2016/9/6.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill','./src/app.js'],
    output: {
        path: './bin',
        filename: 'app.bundle.js?'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'}
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            },
            output:{
                comments:false
            }
        }),
        new HtmlWebpackPlugin()
    ]
};