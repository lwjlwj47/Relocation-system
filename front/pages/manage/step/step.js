// pages/manage/step/step.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    index:"",
    i:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      index:options.index,
      i:options.i
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
  handleAdd(e) {
    const { fileList } = this.data;
    const { files } = e.detail;

    // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
    this.setData({
      fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片
    });

    // 方法2：每次选择图片都上传，展示每次上传图片的进度
    // files.forEach(file => this.uploadFile(file))
  },
  handleRemove(e) {
    const { index } = e.detail;
    const { fileList } = this.data;

    fileList.splice(index, 1);
    this.setData({
      fileList,
    });
  },
  add(){
    let pages = getCurrentPages();
//当前页面
  let prevPage = pages[pages.length-2];
  //上一页面
  prevPage.setData({
    index:this.data.index,
    i:this.data.i,
    //直接给上移页面赋值
    back: true,
  });
  wx.navigateBack({
    //返回
    delta:1
  })
  }
})