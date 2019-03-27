// pages/user/entryExam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  bindConfirmTap: function(e){
    wx.navigateTo({
      url: '/pages/user/examConfirm',
    })
  },

  

  bindChooseImg: function(e) {
    wx.chooseImage({
      success: function(res) {},
    })
  }
})