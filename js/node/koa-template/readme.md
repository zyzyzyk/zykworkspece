## koa 中间件 MiddleWare
app.use(MiddleWare)
next 下一个中间件。
每一次use 都会注册一个中间件
[middleware1,middleware2]
1. async 函数
2. 洋葱模型：一层层往最里面执行，最后一个中间件执行完了，一层往外冒泡执行剩余的代码。
3. 解耦 ： 每一个中间件负责一件事
4. .set()

## 以X开头的：自定义响应头

## koa第三方中间件
koa ctx 就是 req+res 组成的对象
ctx: {
  req{},
  res{}
}
koa-views
接着扩展 ctx， 接着往ctx 上塞东西
ctx: {
  req{},
  res{},
  render: () => {}
}

## 
package.json 项目描述
依赖 npm install 下来的文件
-S 就是往package.json 中的dependence放入。
npm i node_modules 目录。
koa 压缩 -> 20 500M
不把 node_modules 放在压缩目录里 5M -> npm i 从json文件里面读取依赖安装

## ejs
<%=  %>原样输出
<%-  %>解析html
<% %>解析 JS