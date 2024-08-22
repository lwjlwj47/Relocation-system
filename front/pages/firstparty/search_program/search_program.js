// pages/firstparty/search_program/search_program.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    unit_school:[
      {
        image:"https://img.js.design/assets/img/62d4d34291c472110f55acfc.png",
        name:"中国民航大学",
        number:10
      },
      {
        image:"https://img.js.design/assets/img/62d4d34291c472110f55acfc.png",
        name:"天津大学",
        number:20
      },
      {
        image:"https://img.js.design/assets/img/62d4d34291c472110f55acfc.png",
        name:"天津医科大学",
        number:50
      },
      {
        image:"https://img.js.design/assets/img/62d4d34291c472110f55acfc.png",
        name:"南开大学",
        number:120
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let value = options.value
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
  onChangeValue(e)
  {
    console.log(e)
    this.setData({
      input:e.detail.value
    })
  },
  submit(e)
  {
    console.log("提交了")
  }
})