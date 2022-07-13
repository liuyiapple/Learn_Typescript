// 对象类型

interface Person {
    name: string;
    age: number
}

function greet(person: Person) {
    console.log("hello" + person.name);
}
const person = greet({ name: "张三", age: 89 })


/**
 * @param readonly 属性
 * 
 * 带有readonly标记的属性在类型检查的时候，内容是不能改的
 */

// interface TypeObj {
//     readonly  num:number
// }

// function addNum(num:TypeObj) {
//     num = num++;
// }
// addNum(12)

/**
 * 索引签名
 *  不知道类型的属性名字，但是知道值类型的时候使用
 */
interface StringArray {
    readonly [index: number]: string
}
function getArr() {
    return ["2", "@"]
}
const myArr: StringArray = getArr();
// 被readonly 标记了，就不能在修改了
// myArr[2] = "ZHANGSAN "
const secondItem = myArr[1];



/**
 * @param extends 继承
 */

interface PostEmail {
    name: string;
    age: number;
    adress: string;
}
interface City {
    num: number
}

// ts可以连续继承
interface PostMan extends PostEmail, City {
    work: string
}

const pm: PostMan = {
    name: "a",
    age: 2,
    adress: "事实上",
    num: 233,
    work: "z"
}

/**
 * @param Intersection Type  交叉类型 & 
 */
interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

// 在这里链接了Colorful 和Circle 产生了一个新的类型
type ColorfulCircle = Colorful & Circle

function draw(circle: Colorful & Circle) {
    console.log(circle.color);
    console.log(circle.radius);
}
draw({ color: "#C00000", radius: 50 })


/**
 * 尽管看起来很像，但是写法上有很大的区别
 * 下面的写法是不会报错的
 */
interface TestType {
    color: string
}

type ColorfulSub = TestType & {
    color: number
}


/**
 * 一下继承方式会编译错误
 */

// interface TestTypeTwo {
//     color:string
// }
// interface Demo extends TestTypeTwo {
//     color:number
// }

/**
 * @param Array 类型
 * 
 * @param ReadonlyArray 描述数组不能被改变
 */

function doSomeThing(value: Array<number>) {
    console.log(value[2]);
}

doSomeThing([1, 2])
// doSomeThing([1,"2"]) // Error

let arr: ReadonlyArray<number> = [1, 2]


/**
 *  元组类型
 */

let point = [3,4] as const // 当前数组断言为 const 的时候， 他就是一个readonly元组类型
// point[1] = 5

























