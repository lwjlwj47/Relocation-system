// pages/employee/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_name_height:"",
    name_height:"",
    pageCur:"home"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
          // const menuButton  = wx.getMenuButtonBoundingClientRect()
          let menuButton = wx.getMenuButtonBoundingClientRect()
          let statusBar = wx.getSystemInfoSync();
          this.setData({
            name_height: 2 * (menuButton.top - statusBar.statusBarHeight) + menuButton.height,
            top_name_height:statusBar.statusBarHeight
          })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  program(){
    wx.switchTab({
        url:"/pages/employee/program/program"
    })
  },
  apply(){
    wx.navigateTo({
      url: '/pages/employee/apply/apply',
    })
  },
  daily(){
    wx.navigateTo({
      url: '/pages/employee/daily_paper/daily_paper',
    })
  }
})