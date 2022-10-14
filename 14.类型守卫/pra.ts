/* 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。 换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。
换句话说：类型守卫是运行时检查，确保一个值在所要类型的范围内
目前主要有四种的方式来实现类型保护： */
// 1.in关键字
interface InObj1 {
  a: number,
  x: string
}
interface InObj2 {
  a: number,
  y: number[]
}
function isIn(arg: InObj1 | InObj2) {
  // x 在 arg 打印 x
  if ('x' in arg) console.log('x')
  // y 在 arg 打印 y
  if ('y' in arg) console.log('y')
}
isIn({a:1, x:'xxx'});
isIn({a:1, y:[1, 2]});
// 2.typeof 关键字(typeof 只支持：typeof 'x' === 'typeName' 和 typeof 'x' !== 'typeName'，x 必须是 'number', 'string', 'boolean', 'symbol'。)
function isTypeof( val: string | number) {
  if (typeof val === "number") console.log('number');
  if (typeof val === "string") return 'string'
  return '啥也不是'
}
isTypeof('1');
// 3.instanceof
function creatDate(date: Date | string){
  console.log(date)
  if(date instanceof Date){
      date.getDate()
  }else {
      return new Date(date)
  }
}
// 4、自定义类型保护的类型谓词
function isNumber(num: any): num is number {
  return typeof num === 'number';
}
function isString(str: any): str is string{
  return typeof str=== 'string';
}