function isIn(arg) {
    // x 在 arg 打印 x
    if ('x' in arg)
        console.log('x');
    // y 在 arg 打印 y
    if ('y' in arg)
        console.log('y');
}
isIn({ a: 1, x: 'xxx' });
isIn({ a: 1, y: [1, 2] });
// 2.typeof 关键字(typeof 只支持：typeof 'x' === 'typeName' 和 typeof 'x' !== 'typeName'，x 必须是 'number', 'string', 'boolean', 'symbol'。)
function isTypeof(val) {
    if (typeof val === "number")
        console.log('number');
    if (typeof val === "string")
        return 'string';
    return '啥也不是';
}
isTypeof('1');
// 3.instanceof
function creatDate(date) {
    console.log(date);
    if (date instanceof Date) {
        date.getDate();
    }
    else {
        return new Date(date);
    }
}
