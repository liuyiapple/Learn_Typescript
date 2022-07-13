
// Narrowing 

function padLeft(padding:string | number, input:string) {
    // throw new Error("this Error")

    // ts中这样的 条件分支一句判断数据类型被称为 类型保护

    // 而这样的判断的数据类型更精准的过程，称之为Narrowing，收窄
    if(typeof padding === "number") {
        // 当padding 是一个数字的时候，把数字转换成字符加上空格 拼接在 input 的value 前面
        return new Array(padding + 1 ).join(" ") + input
    }

    // 那否则就走这块了，两个String 加一下 走你
    return padding + input

}

// typeof 类型保护

function printAll(strs:string | string[] | null) {
    if( strs && typeof strs === "object") {
        // Obejct is possibly "null" 这里的原因就是在js中，typeof 检测null的时候也是一个object
        //  当然，报错了也是幸运的，最起码知道了这里已经被收窄为 string[] | null 了
        for(let s of strs) {
            console.log(s);
        }
    } else if(typeof strs === "string") {
        console.log(strs);
    }
}


/**
 * @param 真值收窄
 * 
 */

function getUsersOnlineMessage(nuUsersOnline:number) {
    // js在这里做的就是一个隐式转换
    // false : 0 "" NaN ,0n,null,undefined
    // true：除了false之外的值都是true
    if(nuUsersOnline) {
        return  `I'm here,${nuUsersOnline}`
    }
    return "Nobody's here :("
}















