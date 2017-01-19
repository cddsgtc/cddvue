// const express = require('express'),
// webpackDevMiddleware = require('webpack-dev-middleware'),
// webpack = require('webpack'),
// webpackConfig = require('./dev');


// let app = express(),
//   compiler = webpack(webpackConfig);
// app.use(webpackDevMiddleware(compiler, {
//   hot:true,
//   publicPath:'/'
// }))

// app.listen(8024, ()=>{
//   console.log('服务器已启动，端口：8024');
// });



 'use strict'
 const fs = require('fs')
 const path = require('path')
 const chalk = require('chalk')
 const express = require('express')
 const webpack = require('webpack')
 const webpackConfig = require('./dev')
 const LogPlugin = require('./log-plugin')

 const app = express()

 const port = 8024
 webpackConfig.entry.client = [
   `webpack-hot-middleware/client?reload=true`,
   webpackConfig.entry.client
 ]

 webpackConfig.plugins.push(new LogPlugin(port))

 let compiler

 try {
   compiler = webpack(webpackConfig)
 } catch (err) {
   console.log(err.message)
   process.exit(1)
 }

 const devMiddleWare = require('webpack-dev-middleware')(compiler, {
   publicPath: webpackConfig.output.publicPath,
   quiet: true,
 })
 app.use(devMiddleWare)
 app.use(require('webpack-hot-middleware')(compiler, {
   log: () => {}
 }))

 const mfs = devMiddleWare.fileSystem
 const file = path.join(webpackConfig.output.path, 'index.html')


 devMiddleWare.waitUntilValid()

 app.get('*', (req, res) => {
   devMiddleWare.waitUntilValid(() => {
     const html = mfs.readFileSync(file)
     res.end(html)
   })
 })

 app.listen(port)
