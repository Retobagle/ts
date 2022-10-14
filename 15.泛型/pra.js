// 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
// 举个例子，比如我们现在有个这样的需求，我们要实现一个这样的函数，函数的参数可以是任何值，返回值就是将参数原样返回，并且参数的类型是 string，函数返回类型就为 string？
function getValue(arg) {
    return arg;
}
// 上面的需求，我们如果用泛型来解决的话：
function getValue2(arg) {
    return arg;
}
// 泛型的语法是尖括号 <> 里面写类型参数，一般用 T 来表示第一个类型变量名称，其实它可以用任何有效名称来代替,比如我们用NIUBI也是编译正常的
// 泛型就像一个占位符一个变量，在使用的时候我们可以将定义好的类型像参数一样传入，原封不动的输出
// 使用
// 1.定义要使用的类型
getValue2('hwx'); // 定义 T 为 string 类型
// 2.利用typescript的类型推断
getValue2('hwx'); // 自动推导类型为 string
// 多个参数
function getV(arg) {
    return arg;
}
// const exa = getV(['hwx', 18])
var exa = getV(['hwx', 18]);
function getLength(arg) {
    console.log(arg.length);
    return arg;
}
var s = getLength('hwx');
var arr = getLength([1, 2, 3]);
var obj = getLength({ length: 2 });
var p1 = {
    k1: 'hwx',
    k2: 18
};
var p2 = {
    k1: 18,
    k2: 'hwx'
};
var p3 = {
    k1: 18,
    k2: [12, '13']
};
