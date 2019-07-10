## 跨域是浏览器的安全策略
   同源策略
   同协议 域名 端口 同源 不存在跨域

## CORS
   规定了一组 http 的头部字段
   允许那些网站通过浏览器有访问权限
   1. access-X
   2. cookie
   3. 浏览器会先以 OPTIONS 请求方法发起一个预检
      （preflight）请求， 获取一下允不允许当前的域请求， 服务器允许之后才会发起正式的请求。

## 代理
   1. nginx

反向代理
http://localhost:9999/api/
http://localhost:8888/api/
不知道 请求的是哪个服务器

正向代理


## iframe + pastMessage
1. 前端页面 通过 iframe 引入一个 后端目录下面的html，
   iframe 是不受同源策略限制的。
2. postMessage 用于两个窗口之间传递数据
3. 前端页面 通过 postMessage 向后端目录下面的 html 传递接口需要的请求参数
4. 后端页面 通过 postMessage 向前端页面 传递 接口结果