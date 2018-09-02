// pages/deposit/deposit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 123456,
    discrible: "正在计费",
    disable: false,
    hours: 0,
    minutes: 0,
    seconds: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let h = 0;
    let m = 0;
    let s = 0;
    this.setData({
      number: options.number
    });
    this.timer = setInterval(() => {
      this.setData({
        seconds: ++s
      });
      if(s == 59) {
        s = -1;
        setTimeout(() => {
          this.setData({
            minutes: ++m
          });
        }, 1000)
      };
      if(s == 59) {
        m = -1;
        setTimeout(() => {
          this.setData({
            hours: ++h
          })
        });
      }
      if(h == 24) {
        clearInterval(this.timer);
      }
    }, 1000)
  },
  endride: function() {
    clearInterval(this.timer);
    console.log(999)
    this.setData({
      disable: true,
      discrible: "骑行时长"
    })
  },
  backmap: function () {
    console.log(this.data.disable)
    if(this.data.disable) {
      console.log(888)
      wx.redirectTo({
        url: '/pages/main/main'
      })
    }else {
      wx.navigateTo({
        url: '/pages/main/main?notend=true'
      })
    }
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