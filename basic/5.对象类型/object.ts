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
let a: object;
a = {};
a = function () {
};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let b: {name: string, age?: number};
b = {name: '孙悟空', age: 18};

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name: '猪八戒', age: 18, gender: '男'};

/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let ddddd: (a: number ,b: number)=>number;
// ddddd = function (n1: string, n2: string): number{
//     return 10;
// }


/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示数值数值
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
let h: [string, number];
h = ['hello', 123];

/*
* enum 枚举
*
* */
enum Gender{
    Male,
    Female
}

let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}

console.log(i.gender === Gender.Male);
// &表示同时
let j: { name: string } & { age: number };
// j = {name: '孙悟空', age: 18};


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;
