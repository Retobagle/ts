// 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 举个例子，比如我们现在有个这样的需求，我们要实现一个这样的函数，函数的参数可以是任何值，返回值就是将参数原样返回，并且参数的类型是 string，函数返回类型就为 string？
function getValue(arg:string):string  {
  return arg;
}
// 上面的需求，我们如果用泛型来解决的话：
function getValue2<T>(arg:T):T  {
  return arg;
}
// 泛型的语法是尖括号 <> 里面写类型参数，一般用 T 来表示第一个类型变量名称，其实它可以用任何有效名称来代替,比如我们用NIUBI也是编译正常的
// 泛型就像一个占位符一个变量，在使用的时候我们可以将定义好的类型像参数一样传入，原封不动的输出

// 使用
// 1.定义要使用的类型
getValue2<string>('hwx') // 定义 T 为 string 类型
// 2.利用typescript的类型推断
getValue2('hwx')  // 自动推导类型为 string

// 多个参数
function getV<T, U>(arg: [T, U]): [T, U] {
  return arg
}
// const exa = getV(['hwx', 18])
const exa = getV<string, number>(['hwx', 18])

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法.因为泛型 T 不一定包含属性 length
/* function getLength<T>(arg:T):T {
  console.log(arg.length);
  return arg;
} */
// 这时，我们可以使用extends关键字来对泛型进行约束
interface HasL {
  length: number;
}
function getLength<T extends HasL>(arg:T):T {
  console.log(arg.length);
  return arg;
}
const s = getLength('hwx');
const arr = getLength([1, 2, 3]);
const obj = getLength({length: 2});

// 泛型接口
// 在定义接口的时候指定泛型
interface Fan<T, U> {
  k1: T;
  k2: U;
}
const p1: Fan<string, number> = {
  k1: 'hwx',
  k2: 18
}
const p2: Fan<number, string> = {
  k1: 18,
  k2: 'hwx'
}
const p3: Fan<number, [number, string]> = {
  k1: 18,
  k2: [12,'13']
}

// 泛型类
class Test<T> {
  value: T;
  add: (x: T, y: T) => T; 
}
let test = new Test<number>();
test.value = 0;
test.add = (x, y) => x + y;
console.log(test.value);

// 泛型类型别名
type Cart<T> = { list: T[] } | T[];
let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = [1];

// 泛型参数的默认类型
function creatArray<T = string>(length: number, value: T): Array<T> {
  let res: T[] = [];
  for(let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}

// 泛型工具类型
// typeof 关键词除了做类型保护，还可以从实现推出类型，
//先定义变量，再定义类型
let per1 = {
  name: "树哥",
  age: 18,
  gender: "male",
};
type People = typeof per1;
function getName(p: People): string {
  return p.name;
}
getName(per1);
// keyof 可以用来获取一个对象接口中的所有 key 值
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

type PersonKey = keyof Person; //type PersonKey = 'name'|'age'|'gender';

function getValueByKey(p: Person, key: PersonKey) {
  return p[key];
}
let val = getValueByKey({ name: "树哥", age: 18, gender: "male" }, "name");
console.log(val); // 树哥
// in 用来遍历枚举类型：
type Keys = "a" | "b" | "c"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }
// infer 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。
type ReturnType<T> = T extends (
  ...args: any[]
) => infer R ? R : any;
// extends 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 索引访问操作符
interface Person {
  name: string;
  age: number;
}

type x = Person["name"]; // x is string
