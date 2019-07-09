- 后缀变成.ts
  typescript是JS的超集
  typescript会编译成 js
  可以跟写java一样
  .ts文件 -> webpack loader -> babel -> js
  大型项目， 可以有效减少bug 60%
  更好地多人协作

- 将弱类型的js 转变成静态类型的typescript
  错误在编译阶段就解决了
  let a:string = 1;(false)
  let a:string = '1';
  在比较重要的场合(vuex中)
- interface 关键字 声明一个自定义的类型 接口
  多出20%代码， 有了类型检测，代码更可靠
  有利于合作
- vuex 提供了一些类型给 typescript
  需要去学习这些