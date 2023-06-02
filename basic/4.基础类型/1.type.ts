let done: boolean = false;
let count: number = 1;
let str: string = '1';
// const sym = Symbol();
// let obj = {
//   [sym]: 'hwx'
// }
// console.log(obj[sym]);
let list: number[] = [1, 2, 3]
let ary: Array<number> = [1, 2, 3] // Array<number>泛型语法

// undefined 和 null
let a: undefined = undefined;
let b: null = null;
let st: string = 'hwx';
st = undefined;
st = null;
// 如果在sconfig.json指定了"strictNullChecks":true ，null 和 undefined 只能给它们自己的类型赋值，但是 undefined 可以给 void 赋值
let c: void = undefined;
let d: void = null;

