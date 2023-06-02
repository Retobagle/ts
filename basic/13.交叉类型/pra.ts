// 跟联合类型相反，用&操作符表示，交叉类型就是两个类型必须存在，person 即是 IpersonA 类型，又是 IpersonB 类型
interface IpersonA{
  name: string,
  age: number
}
interface IpersonB {
  name: string,
  gender: string
}

let person: IpersonA & IpersonB = { 
    name: "师爷",
    age: 18,
    gender: "男"
};
// 注意：交叉类型取的多个类型的并集，但是如果key相同但是类型不同，则该key为never类型
interface iperA {
  // name: number
  name: string
}
interface iperB {
  name: string
}
function testFn(param: iperA & iperB) {
  console.log(param);
}
testFn({name: 'hwx'})