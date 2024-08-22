// pages/manage/add_program/add_program.js
const app = getApp();
const api = app.globalData.api;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //项目增添数据
    cityvalue: '',
    name1:"",
    name2:"",
    name3:"",
    personvalue: '',
    date1Text: '',
    date2Text: '',
    remark:"",

    cityText: '',
    cityvalue: '',
    cityValue: [],
    personText: '',
    personvalue: '',
    personValue: [],
    dateText: '',
    dateValue: [],
    citys: [
      { label: '高校', value: '1' },
      { label: '企事业', value: '0' },

    ],
    person: [
      { label: '张三', value: '张三' },
      { label: '李四', value: '李四' },

    ],


    //时间1
    mode: '',
    date1Visible: false,
    date: new Date().getTime(), // 支持时间戳传入
    date1Text: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',

    //时间2
    mode: '',
    date2Visible: false,
    date: new Date().getTime(), // 支持时间戳传入
    date2Text: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
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
    const { value } = e.detail;
    const { label } = e.detail;
    console.log(value)
    console.log('picker change:', e.detail);
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}value`]: value.join(' '),
      [`${key}Text`]: label.join(' '),
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

  onPersonPicker() {
    this.setData({ personVisible: true });
  },


  //时间选择器
  showPicker(e) {
    const { mode } = e.currentTarget.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const { value } = e.detail;
    const { mode } = this.data;
    console.log('confirm', value);
    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });

    this.hidePicker();
  },

  onColumnChange(e) {
    console.log('pick', e.detail.value);
  },


  //input
  name1change(e)
  {
    this.setData({
      name1:e.detail.value
    })
  },
  name2change(e)
  {
    this.setData({
      name2:e.detail.value
    })
  },

  name3change(e)
  {
    this.setData({
      name3:e.detail.value
    })
  },
  remarkchange(e)
  {
    this.setData({
      remark:e.detail.value
    })
  },

  //提交
  return()
  {
//     var program_a ={
//       cityvalue: this.data.cityValue,
//       name1:this.data.name1,
//       program_name:this.data.name2,
//       first_name:this.data.name3,
//       second_name: this.data.personvalue,
//       start_data: this.data.date1Text,
//       end_data: this.data.date2Text,
//       detail:this.data.remark,
//     }
//     let pages = getCurrentPages();
// //当前页面
//   let prevPage = pages[pages.length-2];
  //上一页面
  // prevPage.setData({
  //   program_a:program_a,
  //   //直接给上移页面赋值
  //   back: true,
  // });
  wx.request({
    url: api+'/project/addProject',
    method:"POST",
    data:{
      "projectGrade": 1,
      "projectName": this.data.name2,
      "projectFirstPerson": this.data.name3,
      "projectSecondPerson": this.data.personText,
      "projectStartTime": this.data.date1Text,
      "projectEndTime": this.data.date2Text,
      "projectRemark": this.data.remark,
      "projectIsDone": 0,
      "projectUnit": this.data.name1,
      "projectUnitType": this.data.cityValue[0]
    },
    success(res){
      console.log(res)
    },
    fail(res)
    {
      console.log(res)
    }
  })

  wx.navigateBack({
    //返回
    delta:1
  })
  }
})