// Required 将类型的属性变成必选
interface P1 {
  name?: string;
  age?: number;
  hobby?: string[];
}
const v1: Required<P1> = {
  name: 'hwx',
  age: 18,
  hobby: ['唱', '跳', 'rap']
}

// Partial 与 Required 相反，将所有属性转换为可选属性
interface P2 {
  name: string,
  age: number,
}
// type edit = Partial<P2>
const shuge:Partial<P2> = {
  name:'树哥'
} // error  Property 'age' is missing in type '{ name: string; }' but required in type 'P2'.

// exclude  Exclude<T, U>将某个类型中属于另一个的类型移除掉,剩余的属性构成新的类型
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// extract 和 Exclude 相反，Extract<T,U> 从 T 中提取出 U。
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () =>void

// Readonly 把数组或对象的所有属性值转换为只读的，这就意味着这些属性不能被重新赋值。
interface PersonU {
  name: string;
  age: number;
  gender?: "male" | "female";
}

let p: Readonly<PersonU> = {
  name: "hello",
  age: 10,
  gender: "male",
};
// p.age = 11; // error  Cannot assign to 'age' because it is a read-only property.

// Record Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
type Property = 'key1'|'key2'
type PersonA = Record<Property, string>;
const pp: PersonA = {
  key1: "hello 啊",
  key2: "树哥",
};

// Pick 从某个类型中挑出一些属性出来
type Person3 = {
  name: string;
  age:number;
  gender:string
}
type P3 = Pick<Person3, "name" | "age">; // { name: string; age: number; }
const user2:P3={
  name:'树哥',
  age:18
}

// Omit 与Pick相反，Omit<T,K> 从T中取出除去K的其他所有属性。
interface Person4 {
  name: string,
  age: number,
  gender: string
}
type P4 = Omit<Person4, "age" | "gender">
const user3:P4  = {
  name: '树哥'
}

// NonNullable 去除类型中的 null 和 undefined
type P5 = NonNullable<string | number | undefined>; // string | number
type P6 = NonNullable<string[] | null | undefined>; // string[]

// ReturnType 用来得到一个函数的返回值类型
type Func = (value: string) => string;
const test1: ReturnType<Func> = '1';

// Parameters 用于获得函数的参数类型所组成的元组类型。
type P7 = Parameters<(a: number, b: string) => void>; // [number, string]

// InstanceType 返回构造函数类型T的实例类型
class C {
  x = 0;
  y = 0;
}
type D = InstanceType<typeof C>;  // C