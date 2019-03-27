// pages/user/examConfirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindCancleTap: function(){
    wx.navigateTo({
      url: '/pages/user/entryExam',
    })
  }
})