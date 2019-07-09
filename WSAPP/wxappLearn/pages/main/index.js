// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    item:[],
    indicatorDots:true,
    interval:500
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cbf00c1330edc5317b8163c/example/maoyan',
      success:function(res) {
        console.log(res);
        this.setData({
          items:res.data.data.movieList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})