// 函数声明
function add(x, y) {
    return x + y;
}
// 函数表达式
var ap = function (x, y) {
    return x + y;
};
// 可选参数
function plus(x, y) {
    return y ? x + y : x;
}
// 默认参数
function abc(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
// 剩余参数
function rest() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function fff(x, y) {
    return x + y;
}
