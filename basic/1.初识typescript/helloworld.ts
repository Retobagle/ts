function greeterr(per: string) {
  return 'hello, ' + per
}
let per = 'hwx12346'
console.log(greeterr(per));

// 声明完变量直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let cc = false;
cc = true;

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"

function sum(a: number, b: number): number{
    return a + b;
}

let result = sum(123, 456);
console.log('result', result);

