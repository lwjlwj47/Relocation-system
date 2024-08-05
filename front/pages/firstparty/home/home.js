// pages/firstparty/home/home.js
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_name_height:"",
    name_height:"",
    pageCur:"home",

    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    cases:[
      {
        image:"/image/case1.png",
        introduce:"天津大学津南校区实验楼大型设备搬迁安装",
        time:"2024-06-12"
      },
      {
        image:"/image/case2.png",
        introduce:"天津大学化工学院搬迁",
        time:"2024-05-10"
      }
    ]
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

  methods:{
    onTap(e) {
      const { index } = e.detail;

      console.log(index);
    },
    onChange(e) {
      const { current, source } = e.detail;

      console.log(current, source);
    },
    onImageLoad(e) {
      console.log(e.detail.index);
    },
  },
  go(){
    wx.navigateTo({
      url: '/pages/firstparty/my/my',
    })
    console.log("error")
  }
})