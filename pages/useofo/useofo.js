// pages/useofo/useofo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 6,
    ofoState: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      number: options.number,
      password: options.password
    });
    let time = 6;
    this.timer = setInterval(() => {
      this.setData({
        time: --time
      });
      if(time <= 0) {
        clearInterval(this.timer);
        if(this.data.ofoState) {
          wx.redirectTo({
            url: '../deposit/deposit?number=' + options.number
          });
        };
      };
    }, 1000)
  },
  moveToRepir: function() {
    this.data.ofoState = false;
    wx.redirectTo({
      url: '../repair/repair?origin=useofo'
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