// pages/firstparty/program_detail/program_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageCur:"program",
    value:"",
    program:[
      {
        program_name:"总项目名称",
        first_name:"甲方负责人名称",
        second_name:"乙方负责人名称",
        start_data:"2024.06.10",
        end_data:"2024.06.16",
        detail:"这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情..."

      }
    ],
    program_done:[
      {
        program_name:"总项目名称",
        first_name:"甲方负责人名称",
        second_name:"乙方负责人名称",
        start_data:"2024.06.10",
        end_data:"2024.06.16",
        detail:"这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情..."

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
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      value:event.detail.value
    })
    console.log(this.data.value)
  },
  goto()
  {
    wx.navigateTo({
      url: '/pages/firstparty/program_detail_1/program_detail_1',
    })
  }
})