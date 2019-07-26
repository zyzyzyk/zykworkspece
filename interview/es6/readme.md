对es6的理解

es6 相对于es5 ECMAScript的第六次修订
ES2015 随着babel webpack构建工具的成熟
es6 已成为js编程的事实标准
es6 比es5更加简洁，提高了开发效率
让js代码更加优雅。

- 新增的特性
  let变量和const常量声明 具有var没有的块级作用域
  比如循环事件监听时闭包就不需要了，让代码更好理解。
  var有变量提升的能力，let const 不会到顶级对象(Window)，使用的变量或常量需要升级

- 箭头函数 =>
  简化了函数的表达形式
  1. 不用function关键字 () => {}
  2. 如果只有一个参数，() 也可以省
  3. 如果代码直接返回值，{} 也可以省 右侧的代码就是 返回值
  4. 有效地规避了this丢失的问题 指向上一级

- 模板字符串
  增强版的字符串 ``括号，它的多行表达式，特别适合REACT JSX template的书写
  DOM 或HTML模板的构建 更加优雅

- 结构赋值
  可解，spread 可合，reset 从对象或数组中提取值，对变量进行赋值，提高开发效率

- for...of 循环
  for 计步，数组友好，但是对象，Set，Map类数组 以及字符串都可以遍历

- SET es6 新增的数据结构，类似数组，唯一的，没有重复的值

- import export es6 的模块化，es6原生支持的module，将js代码分割成不同的小块独立的开发，
  一个文件一个类，一个独立的模块，比如说 utils api

- ...展开运算符
- 终于支持原生的class关键字了，js 有了创传统面向对象的写法，extends 不过它只是语法糖，底层还是基于原型的面向对象

- promise 为js提供了异步解决方案，规避了回调地狱(then) 代码的书写和执行时一样的

- 更棒的异步解决方法 es7 async await
  koa 基于async await 快速取代了express的地位

- vue react 响应式编程依赖proxy defineProperty 监听对象改变，做一些事情
- es6 提供了新的数据类型，Symbol