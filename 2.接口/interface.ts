// 使用接口来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述),简单理解就是为我们的代码提供一种约定
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(per: Person) {
  return '你好, ' + per.firstName + ' ' + per.lastName
}
let user = {
  firstName: 'Huang',
  lastName: 'Weixing'
}
console.log(greeter(user));

// 设置接口可选|只读
interface Int {
  readonly name: string;
  age?: number;
}

// 索引签名
// 有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 索引签名 的形式来满足上述要求。我们规定 以 string 类型的值来索引，索引到的是一个 any 类型的值
interface Person2 {
  name: string;
  age?: number;
  [prop: string]: any; //  prop字段必须是 string类型 or number类型。 值是any类型，也就是任意的
}

const p1:Person2 = { name: "张麻子" };
const p2:Person2 = { name: "树哥", age: 28 };
const p3:Person2 = { name: "汤师爷", sex: 1 }