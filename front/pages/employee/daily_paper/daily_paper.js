// pages/employee/daily_paper/daily_paper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false,
    note: '',
    paper:[
      {
        name:"张三",
        time:"2024-9-21"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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



  // 日历
  handleCalendar() {
    this.setData({ visible: true });
  },
  handleConfirm(e) {
    const { value } = e.detail;
    const format = (val) => {
      const date = new Date(val);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    this.setData({
      note: format(value),
    });
  },
  onClose({ detail }) {
    console.log(detail.trigger);
  },

  write()
  {
    wx.navigateTo({
      url: '/pages/employee/write_paper/write_paper',
    })
  },

  check()
  {
    wx.navigateTo({
      url: '/pages/employee/paper/paper',
    })
  }
})