/**
 * Created by Administrator on 2016/9/29.
 */
const webpack = require('webpack');

module.exports = {
    // entry: ['babel-polyfill','./src/app.js'],
    entry:['./src/vue-router-test'],
    output:{
        // path: './bin',
        path:'./src',
        // filename:'app.bundle.js'
        filename:'vue-router-bundle.js'
    },
    module:{
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'}
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
            },
            output:{
                comments:false,
            },
        }),
    ]

};