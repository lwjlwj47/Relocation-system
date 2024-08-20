// pages/manage/add_room/add_room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    cityText: '',
    cityValue: [],
    rankText: '',
    rankValue: [],
    citys: [
      { label: '张三', value: '张三' },
      { label: '李四', value: '李四' },
      { label: '小五', value: '小五' },
      { label: '小六', value: '小六' },
      { label: '小七', value: '小七' },
    ],
    ranks: [
      { label: '一级', value: '1' },
      { label: '二级', value: '2' },
      { label: '三级', value: '3' },

    ],

    //设备
    equipment:[
      {
      }
    ],
    //上传照片
    fileList: [],
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
  onColumnChange(e) {
    console.log('picker pick:', e);
  },

  onPickerChange(e) {
    const { key } = e.currentTarget.dataset;
    let i = e.currentTarget.dataset.key
    console.log(e.currentTarget.dataset)
    const { value } = e.detail;
    var rank = "equipment[" + i + "].rank";
    console.log('picker change:', e.detail);
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(' '),
      [rank]:value[0]
    });
  },

  onPickerCancel(e) {
    const { key } = e.currentTarget.dataset;
    console.log(e, '取消');
    console.log('picker1 cancel:');
    this.setData({
      [`${key}Visible`]: false,
    });
  },

  onCityPicker() {
    this.setData({ cityVisible: true });
  },
  onRankPicker() {
    this.setData({ rankVisible: true });
  },
    //上传图片
    handleAdd(e) {
      const { fileList } = this.data;
      const { files } = e.detail;

      // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
      this.setData({
        fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片
      });
      let i = e.currentTarget.dataset.key
      var name = "equipment[" + i + "].image";
      this.setData({
        [name]: [...fileList, ...files]
      })
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
    add_eq()
    {
      const add = {}
      // let equipment=this.data.equipment.push(add)
      let equipment=[...this.data.equipment,add]
      this.setData({
        equipment:equipment
      })
    },
    add(){
let pages = getCurrentPages();
  //当前页面
    let prevPage = pages[pages.length-2];
    //上一页面
    prevPage.setData({
      add_room:this.data.name,
      //直接给上移页面赋值
      back: true,
    });
    wx.navigateBack({
      //返回
      delta:1
    })
    },
    namechange(res)
    {
      let content = res.detail.value
      console.log(res)
      let i = res.currentTarget.dataset.key
      var name = "equipment[" + i + "].name";
      this.setData({
        [name]: content
      })
    },
    putchange(res)
    {
      let content = res.detail.value
      console.log(res)
      let i = res.currentTarget.dataset.key
      var name = "equipment[" + i + "].remark";
      this.setData({
        [name]: content
      })
    },

    roomchange(res)
    {
      let content = res.detail.value
      this.setData({
        name: content
      })
    }
})