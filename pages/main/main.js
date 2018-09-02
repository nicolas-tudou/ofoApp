// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      latitude: 0,
      longitude: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.notend = options.notend;
    wx.getLocation({
      success: (res) => {
        console.log(res)
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    });
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [
            {
              id: 1,
              iconPath: "/images/location.png",
              position: {
                width: 60,
                height: 60,
                top: res.windowHeight - 80,
                left: 20
              },
              clickable: true
            },
            {
              id: 5,
              iconPath: "/images/marker.png",
              position: {
                width: 30,
                height: 45,
                top: res.windowHeight / 2 - 45,
                left: res.windowWidth / 2 - 15
              }
            },
            {
              id: 3,
              iconPath: "/images/use.png",
              clickable: true,
              position: {
                width: 100,
                height: 100,
                top: res.windowHeight - 120,
                left: res.windowWidth / 2 - 50
              }
            },
            {
              id: 4,
              iconPath: "/images/warn.png",
              clickable: true,
              position: {
                width:60,
                height: 60,
                top: res.windowHeight - 80,
                left: res.windowWidth - 80
              }
            },
            {
              id: 2,
              iconPath: "/images/avatar.png",
              clickable: true,
              position: {
                width: 50,
                height: 50,
                top: res.windowHeight - 170,
                left: res.windowWidth - 70
              }
            }
          ]
        })
      },
    });
  },
  bindcontroltap: function(e) {
    console.log(e)
    switch(e.controlId) {
      case 1: this.movetoCenter(); break;
      case 2: 
        wx.navigateTo({
          url: '/pages/mine/mine'
        });
        break;
      case 3: 
        if(this.notend) {
          wx.navigateBack({
            delta: 1
          })
        }else {
          wx.scanCode({
            success: () => {
              console.log("success");
              wx.showLoading({
                title: '正在获取密码...',
              })
              wx.request({
                url: 'https://easy-mock.com/mock/5b012f47e6e1035843cd3b32/example/ofo',
                success: (res) => {
                  console.log(res.data.data)
                  wx.hideLoading();
                  wx.redirectTo({
                    url: '/pages/useofo/useofo?number=' + res.data.data.number + '&password=' + res.data.data.password,
                    success: () => {
                      wx.showToast({
                        title: '获取密码成功',
                        duration: 1000
                      })
                    }
                  })
                }
              })
            },
            fail: () => {
              console.log('failed')
            }
          });
        }
        break;
      case 4: 
        wx.navigateTo({
          url: '/pages/repair/repair'
        });
        break;
    }
  },
  movetoCenter: function() {
    this.mapCtx.moveToLocation();
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
    this.mapCtx = wx.createMapContext("mayMap");
    this.movetoCenter();
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