//index.js
//获取应用实例
const app = getApp();
const GameManager = require('./game_manager.js');

Page({
  data: {
    grids: []
  },
  gameManager: null,
  touchStartClientX: 0, // 开始时候的坐标
  touchStartClientY: 0,
  touchEndClientX: 0,
  touchEndClientY: 0,
  onLoad: function () {
    this.gameManager = new GameManager(4);
    const grids = this.gameManager.setup();
    this.setData({
      grids
    })
  },
  touchStart(event) {
    console.log('touchStart');
    // 触点
    const touch = event.touches[0];
    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;
  },
  touchMove(event) {
    const touch = event.touches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
  },
  touchEnd(event) {
    console.log(event);
    const touch = event.changedTouches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
    const dx = this.touchEndClientX
    - this.touchStartClientX;
    const dy = this.touchEndClientY
    - this.touchStartClientY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    console.log(this.touchStartClientX,
      this.touchStartClientY,
      this.touchEndClientX,
      this.touchEndClientY)
    if (Math.max(absDx, absDy) > 20) {
      console.log('滑动了');
    }

  }
})

