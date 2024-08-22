// pages/firstparty/program_detail/program_detail.js
const app = getApp();
const api = app.globalData.api;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    const unit  = options.name
    wx.request({
      url: api+'/project/queryProjectByUnit?projectUnit='+unit,
      method:"GET",
      success(res){
        console.log(res)
        that.setData({
          program:res.data.data
        })
      },
      fail(res)
      {
        console.log(res)
      }
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
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      value:event.detail.value
    })
    console.log(this.data.value)
  },
  goto(e)
  {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/employee/program_detail_1/program_detail_1?id='+id,
    })
  }
})