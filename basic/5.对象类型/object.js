/* // object 类型用于表示所有的非原始类型，即我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。
let object: object;
// object = 1; // 报错
object = {};

// 大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
let o: Object;
o = 1;
// {} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合
let obj: {};
obj = true; */

// object表示一个js对象
var a;
a = {};
a = function () {
};
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
var b;
b = { name: '孙悟空', age: 18 };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: '猪八戒', age: 18, gender: '男' };
/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
var d;
// d = function (n1: string, n2: string): number{
//     return 10;
// }
/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
// number[] 表示数值数值
var f;
var g;
g = [1, 2, 3];
/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
var h;
h = ['hello', 123];
/*
* enum 枚举
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
};
console.log(i.gender === Gender.Male);
// &表示同时
var j;
var k;
var l;
var m;
k = 2;
