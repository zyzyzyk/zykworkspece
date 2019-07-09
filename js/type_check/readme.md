类型 typeof
复杂数据类型就是object
Array 是可以遍历的对象
function 是可以运行的对象
JSON object 对象字面量是可以枚举的对象 for(keyin)
typeof 半吊子，typeof [] 没有办法跟JSON区分开来
有一个方法可以区分ARRAY 和 JSON object

1. 用对象字面量来面向对象 区别于原型
   它没有被实例化的需要 Type. 将在程序中就做类型检测
   var Type = {}; 组织代码
2. for循环 来一次性的加完； 同步异步的问题 
使用闭包来将type作用域封闭起来，立即执行函数，
同步执行 类型检测函数的定义， 因为函数嵌套，形成了一个闭包，
 当函数再被调用时（异步），找到定义时刻的type
3. Object.prototype.toString.call(obj)
Object祖先 ，顶级对象 函数才有prototype属性，原型上有toString方法，解决typeof的尴尬 "[object Object]"
[object Array] 方法的执行方式可以被改变