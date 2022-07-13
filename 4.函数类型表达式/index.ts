function greeter(fn: (a: string) => void) {
    fn("Hello Ts")
}

function printToConsole(s: string) {
    console.log(s);

}

greeter(printToConsole)

/**
 * 调用签名
 * 
*/

type DescriableFunction = {
    description: string;
    // 这里的参数表达式是 : 而不是 =>
    (someAge: number): boolean;
}

function doSomeThing(fn: DescriableFunction) {
    console.log(fn.description + fn(6));

}

/**
 * 构造签名
 * @param Object
 */
type SomeConstructor = {
    new(s: string): Object;
}
function fn(ctor: SomeConstructor) {
    return new ctor("Hello ts")
}


/**
 * @param arr 泛型函数
 * @returns 返回数组中的第一个参数
 * 
 * 我的理解是 调用函数期间，传递过来什么数据类型的数组，我就想对应约束什么类型的数组
 */

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
const s = firstElement([1, 2, 3])

const u = firstElement(["2", "2"])

const n = firstElement([])

/**
 * @param Inference 推断 
 * 
 */
function ArrFun<Input, Output>(arr: Input[], func: (arr: Input) => Output): Output[] {
    return arr.map(func)
}

const parsed = ArrFun(["2"], (n) => parseInt(n))


/**
 * 
 * @param a 
 * @param b 
 * @returns 
 * 
 * 约束
 * 
 */
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

const longerArray = longest([1, 2], [3, 4])

const longerString = longest("@", "444")

/**
 * 常见的泛型约束错误
 * 
 */

// function miniumLength<Type extends { length: number }>(arr:Type,mininum:number):Type {
//     if(arr.length >= mininum) {
//         return arr;
//     } else{
//         return {length :mininum}
//     }
// }
// const arr = miniumLength([1, 2, 3], 6);


/***
 * 声明类型参数
 */

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
//  这样写Type 只能对传递过来的参数约束到第一个数据类型 number
const arr = combine([1, 2], [2])
// 我就非得写两个数据类型
const arr2 = combine<number | string>([2], ["#"])


/**
 * 写好一个泛型函数
 */

// good
function arrFun1<Type>(arr: Type[]) {
    return arr[0]
}

// 拉跨 ，尽可能函数在书写的时候就推断他的数据类型，而不是在执行的时候
function arrFun2<Type extends any[]>(arr: Type[]) {
    return arr[0]
}



/**
 * 可选参数
 */
function f(x?: number) {
    console.log("这是一个可选参数的函数");
}

f(); // ok

f(222); // ok
// 尽管这里定义的x时number 但是其实是 number  | undefined ps:这个确实没想到
f(undefined);
// f("@"); // 类型错误


/**
 * 回调中的可选参数
 * 
 * 调用函数的时候，如果传入了必须要的参数多的参数，额外的参数就会被忽略 js和ts都一样的
 */
function myForEach<Type>(arr: Type[], callback: (arg: any, index: number) => void) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index], index)
    }
}
myForEach([1, 2, 3], (a, b) => console.log(a, b.toFixed(2)));



/**
 * @param unknow 数据类型可以表示任何值，但是比any更加安全
 * 
 * @param never 一些函数从来不返回值
 * 
 * @param Function 有一个特殊的性质，Function 总是被调用，返回值是any
 */


/**
 * 参数结构
 */

function sum({ a, b, c }: { a: number, b: number, c: number }) {
    console.log(a + b + c);

}

