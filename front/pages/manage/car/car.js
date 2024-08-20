// pages/firstparty/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cars:[
      {
        name:"中国重汽 SITRAK C5H 340马力",
        start_time:"2024.06.10",
        end_time:"2024.06.16",
        image:"https://img.js.design/assets/img/6676f0385e1398b2613d0a74.jpg#c978f030c1acffcdad2fcac973e28def",
        person:"张晓军",
        info:"津A·88888"

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

  add_program(){
    wx.navigateTo({
      url: '/pages/manage/add_car/add_car',
    })
  },
})