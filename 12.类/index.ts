/**
 * @param class
 */

// 类成员
class Point {
    x: number
    y: number
}
const pt = new Point()
pt.x = 1
pt.y = 2

// 类型注解是可选的如果没有指定，会隐式推断为 any

class Point2 {
    x = 0
    y = 2
}

const pt2 = new Point2()
console.log(pt2.x + pt2.y);
