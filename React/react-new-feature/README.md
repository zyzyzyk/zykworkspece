## why
  concurrent model
  目的： 让react整体渲染有一个优先级的排比
  1. js 单线程
  2. 浏览器 多线程
     1. UI渲染线程
     2. js解析
     3. http
  3. js线程 和 ui 是互斥的，js可以操作DOM
  4. 互斥造成 卡顿 的产生 js执行占据了很大的空间，导致ui得不到响应