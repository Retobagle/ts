// 枚举
// 普通枚举（初始值默认为 0 其余的成员会会按顺序自动增长 可以理解为数组下标）
enum dirction {
  NORTH,
  SOUTH = 2,
  WEST,
  EAST,
}
let dir: dirction = dirction.WEST
console.log(dir);

// 字符串枚举
enum color {
  RED = '红色',
  BLUE = '蓝色',
  PINK = '粉色',
}
const blue: color = color.BLUE
console.log(blue);

// 常量枚举
const enum Color {
  RED,
  BLUE,
  PINK,
}
const col: Color[] = [Color.RED, Color.BLUE, Color.PINK];
console.log(col);
