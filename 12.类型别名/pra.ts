// 类型别名用来给一个类型起个新名字。它只是起了一个新名字，并没有创建新类型。类型别名常用于联合类型。
type count = number | number[];
function hello(value: count) {}