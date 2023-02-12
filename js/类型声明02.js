"use strict";
// 类型 any ，类似于原生js，表示变量没有类型，可以任意赋值 但不建议使用
let e;
e = 1;
e = 'hello';
e = true;
let f;
f = e;
console.log(typeof f); // f从string类型变成了number类型 所以不建议使用
// unknown 就是一个安全的any
let e1;
e1 = 1;
e1 = 'hello';
e1 = true;
let f1;
// f1 = e1 //不能将unknown赋值给其他类型
// 解决办法1
if (typeof e1 === 'string') {
    f1 = e1;
}
// 解决办法2 类型短语 告诉解析器e1的类型是string
f1 = e1;
// 解决办法3 <string>变量
f1 = e1;
// 类型void 表示空值(undefined)，以函数为例，就表示没有返回值的函数
function fn() {
    // return 123 报错
    return;
}
// 类型never 表示没有返回值 一般用于抛出异常
function fn2() {
    throw new Error('报错了');
}
