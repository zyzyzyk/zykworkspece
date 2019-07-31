1. 三部分： 三个容器 背后100%宽度  原点  已经拖拽的进度条
2. touchStart touchMove touchEnd
3. 改变 width 和 left定位

```js
new Progress('selector', {
  onDrag: () => {},
  onDragStart:() => {},
  onDragEnd: () => {},
  progress: 0.5, // 当前进度条起始位置默认值
  disableDrag: false
})
```