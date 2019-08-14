## for...of...
用于遍历 可迭代对象 
比如：Array, (Map, Set), String, es6三种结构天生拥有iterator。
     所以 for...of 是不能遍历object的，object需要添加Symbol.iterator。
可迭代对象有两个要求
1. 必须存在 Symbol.iterator 属性
2. Symbol.iterator是一个方法 返回 next 属性
   ```
    [Symbol.iterator] = () => ({
      next: () => {
        return {
          done: boolean
          value: 
        }
      }
    })
   ```
可以自定义 for...of 行为 比如Object{}