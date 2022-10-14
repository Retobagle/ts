/* 
  实际上，在大多数的情况下使用接口类型和类型别名的效果等价，但是在某些特定的场景下这两者还是存在很大区别。

  TypeScript 的核心原则之一是对值所具有的结构进行类型检查。 而接口的作用就是为这些类型命名和为你的代码或第三方代码定义数据模型。

  type(类型别名)会给一个类型起个新名字。 type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型。
  起别名不会新建一个类型 - 它创建了一个新名字来引用那个类型。给基本类型起别名通常没什么用，尽管可以做为文档的一种形式使用。

  接口和类型别名都可以用来描述对象或函数的类型，只是语法不同

  */
type MyTYpe = {
  name: string;
  say(): void;
}

interface MyInterface {
  name: string;
  say(): void;
}

// 都允许扩展
// interface使用extend实现扩展
interface Interface {
  name: string;
  say(): void;
}

interface MyInterface2 extends Interface {
  sex: string;
}

let person: MyInterface2 = {
  name: '树哥',
  sex: '男',
  say(): void {
    console.log("hello 啊，树哥！");
  }
}
person.say();

// type使用&实现扩展
type obj = {
  name: string;
  say(): void
}
type obj2 = obj & {
  age: number;
}
let value: obj2 = {
  name: 'hwx',
  age: 27,
  say(): void {
    console.log('恰饭');

  }
}
value.say();

// 不同：type可以声明基本数据类型别名/联合类型/元组等，而interface不行
// 基本类型别名
type UserName = string;
type UserName = string | number;
// 联合类型
type Animal = Pig | Dog | Cat;
type List = [string, boolean, number];
// interface能够合并声明，而type不行
interface Person6 {
  name: string
}
interface Person6 {
  age: number
}
// 此时Person6同时具有name和age属性