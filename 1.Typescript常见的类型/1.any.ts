
/**
 * @param any
 * 
 * 当一个值是any类型的时候，可以获取他的任意属性，或者像函数一样去调用它
 * 
 * ts 都不会去检测它的类型
 * 
 * 
 * 然而，当没有指定类型的时候，TypeScript 也会默默的给某段代码指定any类型
 */
let obj: any = { x: 0 };

obj.foo();

obj();



/**
 *  @param 变量上的类型注解
 *
 *  当使用 const let var 声明一个变量的时候，可以选择性的添加类型注解
 * 
 *  当然 ，typescript 也会自动推断 
 */


let myName: string = "Liuyao"



/**
 *  @param 函数 (Function)
 * 
 *  当有了类型注释的时候，TypeScript 便会检测函数的参数 
 */

function leanTs(name: string) {
    console.log("定义一个函数类型的翻新", name);

}

leanTs("12")


/**
 *  返回值类型定义
 *  @returns number 
 */
function getFavoriteNumner(): number {
    return 12;
}



const names = ["Aloce", "Bob", "Eve"]

/**
 * 尽管这里并没有添加类型注释，但是TypeScript根据forEach 函数的类型，
 *      以及传入的参数，最终推断除了s的类型
 * 
 *  - > 这个过程被称为 上下文推断的过程
 * 
 */

// names.forEach(function(s) {
//     console.log(s.toUppercase());
//     // Property "toUppercase" does not exist on type "string"

// })

/**
 * 
 * @param pt  函数的定义
 */

function printCoord(pt: { x: number, y: number }) {
    console.log(pt.x + pt.y);
}

printCoord({ x: 1, y: 2 })



/**
 * 
 * @param obj  可选参数 Optional Properties
 * 
 * 对象类型 可以指定一些甚至所有的属性为可选二点，只需要在属性名 后面添加 ?
 * 
 */

function printName(obj: { first: string, last?: string }) {
    // ......

    // 不加上? 会报错 -->  Object is possibly "undefined"
    console.log(obj.last?.toLocaleUpperCase());

    // 当获取一个不存在的属性，会得到一个undefined 而不是一个运行时的错误，
    // 所以在获取属性的时候，应该先检查一下是否为undefined
    if (obj.last != undefined) {
        console.log(obj.last.toLocaleUpperCase());
    }

}

printName({ first: "张三" })


/**
 * @param id  联合类型的声明方式
 * 
 *  联合类型是由两个或者更多的类型组成的额，表示值可能是这些类型中的其中一个
 * 
 *  当联合类型的每个成员都有一个属性的， 比如 数组和字符串 都有slice 方法的时候，就不需要
 *   分支语做类型收窄
 * 
 */

// eg: 1
function printId(id: number | string) {
    // console.log(`You Id is ${id}`);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }


}
printId(12)
printId("12")


// eg:2
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log(x.join("and"));
    } else {
        console.log(x.toUpperCase());
    }

}
welcomePeople(["!", "2", "3"])

// eg: 3

function getFileThtee(x:string[] | string) {
    x.slice(0,1)
}

getFileThtee(["1","2","#"])



























