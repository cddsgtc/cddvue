const path = require('path'),
  webpack = require('webpack'),
  copyWebpack = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function () {
    return {
        entry: {
            vendor: ['vue', 'vuex', 'vue-router'],
            login: './client/login',
            index: './client/index'
            // chanpay: './client/chanpay'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: '[name].js?[hash:8]',
            publicPath: '',
            sourceMapFilename: '[name].map?[chunkhash:8]'
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
                    test: /\.(jpg|png|gif|eot|svg|ttf|woff)$/,
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
                filename: '[name].bundle.css',
                disable: false,
                allChunks: true
            }),
            new copyWebpack([{
                from: './client/img/**/*',
                to: './assets/media/[name].[ext]?[hash:8]'
            }, {
                from: './client/data/**/*',
                to: './assets/data/[name].[ext]'
            }, {
                from: './client/*.html',
                to: './[name].[ext]'
            }], {
                ignore: ['index.html', 'login.html','chanpay.html']
            }),
            // new copyWebpack([{
            //     from: './client/data/**/*',
            //     to: './assets/data/[name].[ext]'
            // }]),
            // new copyWebpack([{
            //     from: './client/*.html',
            //     to: './[name].[ext]'
            // }, {
            //     ignore: ['index.html', 'login.html']
            // }]),
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
            // new HtmlWebpackPlugin({
            //     inject: true,
            //     chunks: ['chanpay', 'vendor', 'manifest'],
            //     template: path.join(__dirname, '../client/chanpay.html'),
            //     filename: 'chanpay.html',
            //     chunksSortMode: 'dependency'
            // })
        ]
    }
};
