// pages/firstparty/room/room.js
const app = getApp();
const api = app.globalData.api;
const steps=["各个等级设备检查符合项提交（搬迁前）","提交","拆机打包","装车","卸车","安装","各个等级级设备检查符合项提交（安装后）","提交","其他检查","全部完成"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:"",
    name:"负责人名称",
    equipment:[
      {
        name:"设备名称",
        rank:"一等级",
        image:"https://img.js.design/assets/img/6676f87c22652736f73972fd.jpg#76dbe6fac70afaae2ffa764aab0378d5",
        remark:"轻拿轻放",
        step:6,
      }
    ],
    my_steps:steps,
    first: 1,
    second: 1,
    third: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
      this.setData({
          number:options.roomid
      })
      let id = options.id
      let projectid=options.projectid
          //查询房间详情
    wx.request({
      url: api+'/equipment/queryEquipmentByRoomId?projectId='+projectid+"&roomId="+id, 
      method:"GET",
      success(res){
        console.log(res)
        that.setData({
          equipment:res.data.data,
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

  }
})