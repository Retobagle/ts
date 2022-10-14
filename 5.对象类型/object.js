// object 类型用于表示所有的非原始类型，即我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。
var object;
// object = 1; // 报错
object = {};
// 大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
var o;
o = 1;
ObjectCase = undefined;
// {} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合
var obj;
obj = true;
