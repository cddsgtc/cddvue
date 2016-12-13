/**
 * Created by Administrator on 2016/10/9.
 */

// function start() {
//     return Date.now();
// }
//
// var start = start();
// function end(){
//     return Date.now();
// }
//
// var count = 0;
// while(end() - start < 100){
//     console.log(count++);
// }
// console.log((end() -start)/1000);
//
// var d = new Date();
// console.log(d.toTimeString());

// var str = 'cat bat sat fat';
// var str1 = ' 世界你好';
// console.log(str.split(/t/).toString().trim().replace(/, /g,''));
// var num =0x65;
// console.log(num.toString(10));
// console.log();
// var url = 'http://www.baidu.com/img png';
// console.log(encodeURI(url));
// url = encodeURIComponent(url);
// console.log(url);
// console.log(decodeURIComponent(url));
// var i ;
// function selectFrom(lowerValue, upperValue){
//     var choices = upperValue - lowerValue + 1;
//     return Math.floor(Math.random()*choices + lowerValue);
// }
//
// // console.log(selectFrom(2, 10));
// var colors = ['red','blue','yellow','green','black','white'];
// var start = Date.now();
// for(i = 0; i< 10;i++)console.log(colors[selectFrom(0,colors.length-1)]);
// var end = Date.now();
// console.log('用时：'+(end - start)/1000+'秒');
// var person = new Object();
// person.name = 'cdd';
// person.age = 26;
// person.job = 'webfrontEngineer';
// person.sayName = function(){
//     return(this.name);
// };
// Object.defineProperty(person, 'name',{
//     writable:false,
//     value:'cdd'
// });
// person.name ='ddc';
// console.log(person.name);
// for(i in person){
//     console.log('属性的名字是：'+i+'属性的类型是:'+typeof i);
// }
// var book = {};
// Object.defineProperties(book,{
//     _year:{
//         writable:true,
//         value:2004
//     },
//     edition:{
//         writable:true,
//         value:1
//     },
//     year:{
//         get:function(){
//             return "年份:"+this._year+'\n'+"版本："+this.edition;
//         },
//         set:function(newValue){
//             if(newValue >2004){
//                 this._year = newValue;
//                 this.edition += newValue -2004;
//             }
//         }
//     }
// });
// book._year = 2005;
// console.log(book.year);
// console.log(Object.getOwnPropertyDescriptor(book,'_year'));
// function Book(){
// }
// Book.prototype._year = 2004;
// Book.prototype.edition = 1;
// var book1 = new Book();
// Object.defineProperty(book1,'year',{
//     get:function(){
//         return this._year +'\n  '+this.edition;
//     },
//     set:function(newValue){
//         if(newValue >2004){
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// });
// book1.year = 2009;
// console.log(book1);


// function Person(name, age){
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     return o;
// }

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         return this.name;
//     };
// }
// function PersonO(){}
// PersonO.prototype = {
//     constructor:PersonO,
//     name:'cdd',
//     age:26,
//     sayName:function(){
//         return this.name;
//     }
// };
//
// function timePoint(){
//     return Date.now();
// }
//
// var start = timePoint();
// for(i = 0; i<10;i++){
//     var person = new PersonO();
//     console.log(PersonO.prototype.constructor);
// }
// var end = timePoint();
// console.log(end -start);

// function Person(name, age, job){
//     var o = new Object();
//     o.sayName= function(){
//         return name;
//     };
//     return o;
// }
// var person = Person('cdd');
// console.log(person.sayName());
// person.name = person.sayName();
// console.log(person.name);
// var person1 = new Person('cdd');
// console.log(person1);

// function SuperType(){
//     this.property = true;
// }
// SuperType.prototype.getSuperValue = function(){
//     return this.property;
// };
//
// function SubType(){
//     this.subproperty = false;
// }
//
// SubType.prototype = new SuperType();
//
// SubType.prototype.getSubValue = function(){
//     return this.subproperty;
// };
//
// var instance = new SubType();
// console.log(instance.getSubValue());


//闭包，闭包，闭包，闭包。。

// function object(o){
//     function F(){}
//     F.prototype = o;
//     return new F();
// }
//
// function inheritPrototype(subType, superType){
//     var prototype = Object(superType.prototype);
//     prototype.constructor = subType;
//     subType.prototype = prototype;
// }
//
//
// function SuperType(name){
//     this.name =name;
//     this.colors = ['red','blue','yellow'];
// }
// SuperType.prototype.sayName = function(){
//     return this.name;
// };
//
// function SubType(name, age){
//     SuperType.call(this, name);
//     this.age = age;
// }
//
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function(){
//     console.log(this.age);
// };

// var a = 0;
// if(a ==2){
//     function b(){
//         console.log('2');
//     }
// }else{
//     function b(){
//         console.log('else');
//     }
// }
// b();


// for(var i = 0; i < 2; i++){
//     console.log(i);
// }
// console.log('i的值是:'+ i);
// var name = 'node';
// var object = {
//     name:'object',
//     sayName:function(){
//         return function(){
//             return this.name;
//         }
//     }
// };
// console.log(object.sayName()());
// var count = 0;
// var interval;
// function start(){
// interval = setInterval(function(){
//     console.log('number:'+' '+count++);
//     if(count >90){
//         end();
//     }
// },1000)
// }
//
// function end(){
//     clearInterval(interval);
//     console.log('结束');
// }
// start();

// var num = 0;
// var max =10;
// function incrementNumber(){
//     num++;
//     console.log('number:'+num);
//     var f = arguments.callee;
//     if(num < max){
//         setTimeout(f,1000);
//     }else{
//         console.log('结束');
//     }
// }
//
// setTimeout(incrementNumber,1000);

// function F(a,b){
//     b && console.log('b存在');
//     a && console.log('a存在');
//     !a && !b && console.log('都不存在');
// }
//
// F(1,2);
// var fs = require('fs');
// fs.readFile('test.html',function(err,data){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(data.toString());
//   }
// });


// var reg = new RegExp('a','g');
// console.log(reg.exec('abababababa'));
// for (var i in RegExp){
//     console.log(RegExp[i]);
// }
// console.log(RegExp.$_);

// let arr = [1,2,3,4,5];
// let a = [6,7];
// arr=arr.concat(a);
// console.log(arr);
// console.log(3);

// let str = 'cat bat dat';
// console.log(str.replace(/.at/g,'s($&)'));
// let a = 0x45;
// var b = 10;
// console.log(a.toString('10'));
function fun(a, b,show){
	var c = a + b;
	if(show){
		show(c);
	}else {
		return c;
	}
}
var start1 = Date.now();
fun(1, 4,function(data){
	console.log(data);
})
console.log(Date.now() - start1+ 'ms');
var start2 = Date.now();
console.log(fun(3,4));
console.log(Date.now()-start2 + 'ms');