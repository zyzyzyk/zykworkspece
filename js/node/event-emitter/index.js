const EventEmitter = require('events');
class Ev extends EventEmitter{};

const ev = new Ev();

//绑定事件
['search'].forEach(key => {
  ev.on(key, async, function(...args) {
    const fn = require(`./lib/${key}`);
    const res =await fn(...args);
    console.log(...args);
  })
})

function main(arg) {
  let keyword = arg[2];
  console.log(keyword);
  eval.emit('search', keyword);
};
main(process.argv);