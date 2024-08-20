// pages/manage/add_car_info/add_car_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"项目1",

    personText: '',
    personvalue: '',
    personValue: [],
    person: [
      { label: '张三', value: '张三' },
      { label: '李四', value: '李四' },

    ],

        //时间1
    mode: '',
    date1Visible: false,
    date: new Date('2021-12-23').getTime(), // 支持时间戳传入
    date1Text: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',

    //时间2
    mode: '',
    date2Visible: false,
    date: new Date('2021-12-23').getTime(), // 支持时间戳传入
    date2Text: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',

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
  
})