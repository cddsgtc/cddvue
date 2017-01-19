const chalk = require('chalk');

// 这个插件是为了每次编译完毕的登陆连接
module.exports = class LogPlugin {
  constructor(port) {
    this.port = port;
  }

  apply(compiler) {
    compiler.plugin('done', () => {
      console.log(`> VuePack is running at ${chalk.yellow(`http://localhost:${this.port}`)}\n`)
    });
  }
};
