//http
const http = require('http');
const url = require('url');
const qs = require('querystring');
http.createServer((req, res) => {
    //自己的服务器
    if (req.url == '/favicon.ico') return;
    //把url解析为对象
    const queryObj = qs.parse(reqObj.query);
    const reqObj = url.parse(req.url);
    console.log('正在请求', req.url);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      ${Json.stringify(queryObj)}
    </body>
    </html>
    `);
    // res.end('hello node');
}).listen(3000, () => {
    console.log('服务正在3000端口运行');
})