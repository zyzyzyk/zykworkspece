// js 的后端node 用核心模块打理起服务器端开发
// 要读文件，先引入fs
const fs = require('fs');
// 读一个文件 有几步 js运行在服务器命令行上
// 1. 找到文件 代码由CPU处理 内存 a.txt在磁盘文件里，
// IO操作 花时间（耗时）
// 2.打开文件
// 3.读取文件
// 4.输出到命令行
// callback（回调函数）
// 

// 当出现耗时问题时，找promise 这是一类问题
// promise 是耗时问题的包裹
const fileAPromise = new Promise((resolve,reject) => {
    fs.readFile('./a.txt','UTF-8',(err,data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    })
});
const fileBPromise = new Promise((resolve,reject) => {
    fs.readFile('./b.txt','UTF-8',(err,data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    })
});
const fileCPromise = new Promise((resolve,reject) => {
    fs.readFile('./c.txt','UTF-8',(err,data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    })
})
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise;
    })
    .then(data => {
        console.log(data);
        return fileCPromise;
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })