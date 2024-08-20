// pages/firstparty/room/room.js
const steps=["各个等级设备检查符合项提交（搬迁前）","提交","拆机打包","装车","卸车","安装","各个等级级设备检查符合项提交（安装后）","提交","其他检查","全部完成"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:"001",
    name:"负责人名称",
    equipment:[
      {
        name:"设备名称",
        rank:"一等级",
        image:"https://img.js.design/assets/img/6676f87c22652736f73972fd.jpg#76dbe6fac70afaae2ffa764aab0378d5",
        remark:"轻拿轻放",
        step:4,
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
    console.log("onshow")
    let pages = getCurrentPages();
  let currPage = pages[pages.length-1];
  if (currPage.data.back){
    // do something
    var step = "equipment[" + this.data.i + "].step";
    this.setData({
      [step]:this.data.index,
    })
  }
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
  selectstep(res)
  {
    console.log(res.currentTarget.dataset.key)
    let key = res.currentTarget.dataset.key+1
    console.log(res)
    wx.navigateTo({
      url: '/pages/employee/step/step?index='+key+"&i="+res.currentTarget.dataset.i,
    })
  }
})