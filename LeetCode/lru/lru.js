var LRUCache = function(capacity) {
    this.capacity = capacity //容量
    this.obj = {}; //存放
    // 最近最少使用
    // obj 存取  数组存取重要性
    // 开头[0]，结尾.length-1
    // unshift pop()
    this.arr = [];
}
LRUCache.prototype.get = function(key) {
    var val = this.obj[key];
    if (val >0) {
        // 最近最少使用
        var index = this.arr.indexOf(key);
        this.arr.splice(inex,1);
        this.arr.unshift(key);
        return val;
    }else {
        return -1;
    }
}
LRUCache.prototype.set = function(key,val) {
    // 之前已存在
    if(this.obj[key]) {
        this.obj[key] = value;//更新
        var index = this.arr.indexOf(key);
        this.arr.splice(inex,1);
        this.arr.unshift(key);
        return;
    }
    if(this.capacity === this.arr.length) {
        // 满了
        var k = this.arr.pop();
        this.obj[k]  =undefined;
    }
    this.obj[key] = val;
    this.arr.unshift(key);
}
var cache = new LRUCache(2);
cache.set(1,1);
cache.set(2,2);
console.log(cache.get(1));