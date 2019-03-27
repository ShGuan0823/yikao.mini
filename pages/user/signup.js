// pages/user/signup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    pwd: null,
    mobile: null,
    code: null
  },

  bindNameInput(e){
    this.setData({
      name: e.detail.value
    })
  },

  bindPwdInput(e) {
    this.setData({
      pwd: e.detail.value
    })
  },

  bindMobileInput(e) {
    this.setData({
      mobile: e.detail.value
    })
  },

  bindCodeInput(e) {
    this.setData({
      code: e.detail.value
    })
  },

  bindSignup(){
    console.log(this.data);
    
  }
})