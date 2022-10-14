// 某些情况下，我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型(类型断言有两种方式)
// 1.尖括号写法
let str: any = 'hwx';
let styLength: number = (<string>str).length;
// 2.as写法
let eng: any = 'retobagle';
let engLength: number = (eng as string).length;