// 函数声明
function add(x: number, y: number): number {
  return x + y;
}
// 函数表达式
const ap = (x: number, y: number): number => {
  return x + y;
}
// 接口定义函数
interface Add {
  (x: number, y: number): number;
}
// 可选参数
function plus(x: number, y?: number): number {
  return y ? x + y : x;
}
// 默认参数
function abc(x: number, y: number = 1): number {
  return x + y;
}
// 剩余参数
function rest(...arr: number[]): number {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// 函数重载
/* 给同一个函数提供多个函数类型定义，从而实现函数的重载
函数重载真正执行的是同名函数最后定义的函数体 在最后一个函数体定义之前全都属于函数类型定义 不能写具体的函数实现方法 只能定义类型 */
function fff(x: number, y: number): number;
function fff(x: string, y: string): string;
function fff(x: any, y: any): any {
  return x + y;
}