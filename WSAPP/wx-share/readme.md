传统的MVC后端开发

MVVM
Model Page({data:{}})
View  Template wxml
VM  {{}} wx:for

MVC Model 数据库，View 静态页面，Controller 控制器

Web HTTP服务器
端口是什么 3000
Mysql 3306
WebServer  80、3000

用户 Request 通过IP + 端口
Web Server Response

http   
    .creatServer(function(request,respnse) {
        request 用户 N
        response.end();
    })  //服务器创建好
    .listen();  //在某个端口启动http