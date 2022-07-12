/**
 * @param TypeAlases 类型别名
 */

type Point = {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log(pt.x + pt.y);

}
printCoord({ x: 1, y: 2 })

/**
 * @param Interface 接口
 * 
 * 接口声明是命名对象类型的另一种方式
 * 
 */

interface PointIn {
    x: number;
    y: number;
}

function printCoordTwo(pt: PointIn) {
    // Duplicate function implementation
    console.log(pt.x + pt.y);
}

printCoordTwo({ x: 1, y: 2 })

// Interface 
// 通过继承扩展类型

interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}


function getBear(value: Bear) {
    return value
}

const bear = getBear({ name: "张三", honey: true });

console.log(bear.name);
console.log(bear.honey);



// 类型别名和接口的不同
/**
 *  类型别名和接口非常相似 ，接口上的所有属性几乎都可以在type上使用
 * 
 *  但是，类型别名本身是五大添加新的属性的，而接口是课扩展的
 * 
 */

// interface 通过继承 扩展类型
interface Monkey {
    name: string;
    wife: boolean;
}

interface People extends Monkey {
    worke: boolean
}

function Monday(value: People) {
    return value
}
const workeMan = Monday({ name: "张", wife: false, worke: true })
console.log(workeMan.name);
console.log(workeMan.wife);
console.log(workeMan.worke);

/**
 * 由此可见 interface 的继承性非常的强大，人跟猴子的区别就是礼拜一要打工 (T_T)
 */

// Type 通过交际扩展类型

type Boy = {
    name: string
}
type Girl = Boy & {
    quit: boolean
}

function getGirl(value: Girl) {
    return value
}

const girlInfo = getGirl({ name: "zhangsan", quit: true })

console.log(girlInfo.name);
console.log(girlInfo.quit);


/**
 * @param TypeAssertions 类型断言
 * 
 */

// 用断言的形式为其指定一个具体的类型
const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;

// 在 .tsx 文件中使用方式
const myCanvasTwo = <HTMLCanvasElement>document.getElementById("myCanvasTwo")


let num = "1";
// 类型错误
// const newNum = num as number 


// 字面量形式的定义 可以结合联合类型

function printText(s: string, alingment: "left" | "right" | "center") {

}

printText("Hello TypeScript", "center")



// 字面量 推断
// declare 声明文件， 这里声明的是一个全局的函数
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://www.baidu.com", method: "GET" } as const

// handleRequest(req.url, req.method as "GET")
handleRequest(req.url, req.method)

// null 和 undefined 的检测  取决于 严格检查Null( strictNullChecks ) 是否开启



/**
 * @param 非空断言  !
 *  
 * 只有当明确知道这个值 不是 null 或 undefind 的时候才使用 !
 */





