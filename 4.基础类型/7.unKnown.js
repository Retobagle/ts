// unknown与any一样，所有类型都可以分配给unknown:
var v = 1;
v = 'hwx';
v = [1, 2];
// unknown与any的区别：任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
/* let a: unknown = 1;
let b: string = a;  // 编译错误 */
var a = 1;
var b = a; // 编译错误
var c = 1;
var f = c;
