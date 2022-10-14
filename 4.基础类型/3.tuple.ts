// Array类型，两种定义方式（只能定义出内部是同种类型的数组）
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 对于内部不同类型的数组可以使用元组类型来定义（Tuple）
const tuple: [number, string] = [1, 'hwx'];

// 注意: 元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。例如，一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]。
// const tp: [number, string] = [1, 2, 'hwx'];
const tp: any[] = [1, 2, 'hx'];