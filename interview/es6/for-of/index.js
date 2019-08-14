function foo () {
  for (let arg of arguments) {
    console.log('arg', arg)
  }
}
foo('a', 'b', 'c');
var arr = [];
var str = 'abc';
var map = new Map();
var obj = {};
let initIndex = 0,
    maxIndex = 3;
obj[Symbol.iterator] = () => ({
  next: function() {
    initIndex++;
    if(initIndex <= maxIndex) {
      return {
        done: false,
        value: initIndex
      }
    }else {
        return {
        done: true,
        value: undefined
      }
    }
    
  }
})
for (let a of obj) {
  console.log(a)
}
console.log(
  typeof arr[Symbol.iterator],
  typeof str[Symbol.iterator],
  typeof map[Symbol.iterator],
  typeof obj[Symbol.iterator]
)