// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addPicMassage: "拍照/相册",
    repairItems: [
      {
        title: "私锁私用",
        index: 0
      },
      {
        title: "车牌坏了",
        index: 1
      },
      {
        title: "轮胎坏了",
        index: 2
      },
      {
        title: "车锁坏了",
        index: 3
      },
      {
        title: "违规乱停",
        index: 4
      },
      {
        title: "密码不对",
        index: 5
      },
      {
        title: "刹车故障",
        index: 6
      },
      {
        title: "其他故障",
        index: 7
      }
    ],
    picsUrls: [],
    choosedItems: [],
    submitBtnType: "",
    ofoNumber: "",
    ofoDsec: "",
    disabled: true
  },

  submitRpair: function() {
    if (this.data.choosedItems.length == 0 || this.data.picsUrls.length == 0) {
      wx.showModal({
        title: '选择故障信息',
        content: '车不是坏了吗，告诉我哪里坏了？',
        confirmText: "给个机会",
        cancelText: "老子不选",
      })
    }else {
      wx.request({
        url: 'https://easy-mock.com/mock/5b012f47e6e1035843cd3b32/example/ofo',
        success: (res) => {
          wx.showToast({
            title: '保修成功，谢谢反馈！！！'
          });

          if(this.data.origin === "useofo") {
            console.log(999)
            setTimeout(() => {
              wx.redirectTo({
                url: '../main/main'
              });
            }, 900);
          }else {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              });
            }, 900);
          }
        }
      })
    };
  },
  inputNumber: function(e) {
    this.setData({
      ofoNumber: e.detail.value
    });
  },
  inputDsec: function(e) {
    this.setData({
      ofoDsec: e.detail.value
    });
  },

  changeBtnColor: function() {
    if (this.data.choosedItems.length != 0 && this.data.picsUrls.length != 0) {
      this.setData({
        submitBtnType: "primary",
        disabled: false
      });
    } else {
      this.setData({
        submitBtnType: "",
        disabled: true
      });
    }
  },
  chooseRepirType: function(e) {
    this.data.choosedItems = [];
    let choosedIndexs = e.detail.value;
    choosedIndexs.forEach((ele, index) => {
      this.data.choosedItems.push(this.data.repairItems[ele]);
    });
    this.changeBtnColor();
  },
  delPic: function(e) {
    let _picsUrls = this.data.picsUrls;
    _picsUrls.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      picsUrls: _picsUrls
    });
    this.changeBtnColor();
  },
  addPic: function(e) {
    wx.chooseImage({
      success: (res) => {
        let responseUrls = this.data.picsUrls;
        if(res.tempFilePaths.length) {
          this.setData({
            addPicMassage: "拍照/相册"
          });
        }
        res.tempFilePaths.forEach((ele, index) => {
          responseUrls.push(ele);
        });
        this.setData({
          picsUrls: responseUrls
        });
        this.changeBtnColor();
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.picsUrls.length == 0) {
      this.setData({
        addPicMassage: "+"
      })
    };
    if(options.origin === "useofo") {
      this.data.origin = options.origin;
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