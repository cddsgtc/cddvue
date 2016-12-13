/**
 * Created by Administrator on 2016/9/8.
 */
let a = {
  root: 'b/',
  // dir:'c/d',
  name:'index',
    ext:'.txt'
};
let path = require('path');

console.log(path.format(a));
console.log(path.isAbsolute('path/index'));
console.log(path.join('c','b','d','index')+'.html');
var path2 = path.join('c:','b','d','index')+'.html';
console.log(path.posix.parse(path2));
console.log(path.relative('b/c','e/f'));
