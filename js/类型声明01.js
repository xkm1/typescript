"use strict";
// 声明一个变量a，同时它的类型为number
let a;
a = 1;
// a的类型为number，以后只能是number，赋别的类型的值会报错
// a = 'hello'
let b = 'hello';
let c = true;
// 编译器会认识d为boolean，后续的赋值就不能赋其他类型的值了，所以这种写法更多
let d = false;
// d = 123
// 函数中间可以指定返回值得类型
function sum(a, b) {
    // 返回值已是number，所以报错
    // return a + 'hello'
    return a + b;
}
// 这个时候就不能传递非数字的参数了
// sum(123, '123')
// 同时参数传少了或传多了都不行
// sum(123) 
// sum(123, 424, 134)
let result = sum(123, 456);
