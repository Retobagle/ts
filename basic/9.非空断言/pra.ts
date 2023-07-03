// 在上下文中当类型检查器无法断定类型时，可以使用缀表达式操作符 ! 进行断言操作对象是非 null 和非 undefined 的类型，即x!的值不会为 null 或 undefined
let user12: string | null | undefined;
console.log(user12!.toUpperCase()); // 编译正确
console.log(user12.toUpperCase()); // 错误
