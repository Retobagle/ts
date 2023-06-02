// 枚举
// 普通枚举（初始值默认为 0 其余的成员会会按顺序自动增长 可以理解为数组下标）
var dirction;
(function (dirction) {
    dirction[dirction["NORTH"] = 0] = "NORTH";
    dirction[dirction["SOUTH"] = 2] = "SOUTH";
    dirction[dirction["WEST"] = 3] = "WEST";
    dirction[dirction["EAST"] = 4] = "EAST";
})(dirction || (dirction = {}));
let dir = dirction.WEST;
console.log(dir);
// 字符串枚举
var color;
(function (color) {
    color["RED"] = "\u7EA2\u8272";
    color["BLUE"] = "\u84DD\u8272";
    color["PINK"] = "\u7C89\u8272";
})(color || (color = {}));
const blue = color.BLUE;
console.log(blue);
const col = [0 /* Color.RED */, 1 /* Color.BLUE */, 2 /* Color.PINK */];
console.log(col);
