function err(msg) {
    throw new Error(msg);
}
function sum(a = err('第一个参数为空'),b = err('第二个参数为空')) {
    return a + b;
}
console.log(sum(1,2));
console.log(sum(undefined,10));//第一个参数为空，并报错
console.log(sum(10)) //报错，第二个参数为空
//不允许改写函数体，实现同样的功能
