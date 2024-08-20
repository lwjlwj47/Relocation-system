// pages/employee/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_name_height:"",
    name_height:"",
    pageCur:"my",

    name:"爱吃西瓜的小丸子",
    phone:"19973739899"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
  gotopaper()
  {
    wx.navigateTo({
      url: '/pages/employee/reimbursement/reimbursement',
    })
  },
  gotodaily()
  {
    wx.navigateTo({
      url: '/pages/employee/daily_paper/daily_paper',
    })
  },
  gotoprogram(){
    wx.switchTab({
      url: '/pages/employee/program/program',
    })
  }
})