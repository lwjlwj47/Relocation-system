// pages/firstparty/program/program.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageCur:"program",
    value:"0",
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
    unit_conpany:[
      {
        image:"https://img.js.design/assets/img/62d4d34291c472110f55acfc.png",
        name:"天津共享信息咨询有限公司",
        number:24
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
  methods:{
    onTabsChange() {
      // console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
      console.log("change")
    },

    onTabsClick() {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onStickyScroll(event) {
      console.log(event.detail);
    },
  },
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      value:event.detail.value
    })
    console.log(this.data.value)
  },
  gotodetail(e)
  {
    let name = e.currentTarget.dataset.key
    wx.navigateTo({
      url: '/pages/employee/program_detail/program_detail?name='+name,
    })
  }
})