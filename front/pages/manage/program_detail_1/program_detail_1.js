// pages/firstparty/program_detail_1/program_detail_1.js
const app = getApp();
const api = app.globalData.api;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmBtn: { content: '确定', variant: 'base' },
    show1Confirm: false,
    show2Confirm: false,
    dialogKey: '',
    six:true,
    showon:true,
    autosize:20,
    room_6:[],
    current_room:[],
    // room:[
    //   {
    //     number:"001",
    //   },
    //   {
    //     number:"002",
    //   },      
    //   {
    //     number:"003",
    //   },
    //   {
    //     number:"004",
    //   },
    //   {
    //     number:"005",
    //   },
    //   {
    //     number:"006",
    //   },      
    //   {
    //     number:"007",
    //   },
    // ],
    // program:
    //   {
    //     program_name:"总项目名称",
    //     first_name:"刘三",
    //     second_name:"李四",
    //     start_data:"2024.06.10",
    //     end_data:"2024.06.16",
    //     detail:"这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情...这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情...这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情"

    //   },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id
    let that = this
    //查询项目详情
    wx.request({
      url: api+'/project/queryProjectById?projectId='+id, 
      method:"GET",
      success(res){
        that.setData({
          program:res.data.data[0]
        })
      },
      fail(res)
      {
        console.log(res)
      }
    })
    //查询房间详情
    wx.request({
      url: api+'/room/queryRoomByProjectId?projectId='+id, 
      method:"GET",
      success(res){
        console.log(res)
        let firstSix = res.data.data.slice(0, 6);
        that.setData({
          room:res.data.data,
          room_6:firstSix,
          current_room:firstSix
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
    console.log("onshow")
    let pages = getCurrentPages();
  let currPage = pages[pages.length-1];
  if (currPage.data.back){
    // do something
    var add_room = {
      number:this.data.add_room
    }
    var room = [...this.data.room,add_room]
    this.setData({
      room:room,
      back:false
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

  changedetail()
  {
    this.setData({
      showon:!this.data.showon
    })
    console.log("改变了嘛")
    console.log(this.data.showon)
  },
  changeall()
  {
    this.setData({
      six:!this.data.six,
      current_room:this.data.room
    })
  },
  changesix()
  {
    this.setData({
      six:!this.data.six,
      current_room:this.data.room_6
    })
  },
  gotoroom()
  {
    wx.navigateTo({
      url: '/pages/manage/room/room',
    })
  },
  gotocar(){
    wx.navigateTo({
      url: '/pages/manage/car/car?projectid='+this.data.program.projectId,
    })
  },
  gotoequipment(){
    wx.navigateTo({
      url: '/pages/manage/equipment/equipment',
    })
  },
  add_room()
  {
    wx.navigateTo({
      url: '/pages/manage/add_room/add_room?'
    })
  },
      //显示框
      success(e){
        const { key } = e.currentTarget.dataset;
        console.log(e)
        this.setData({ [key]: true, dialogKey: key });
        console.log("点击")
      },

      fail(e){
        const { key } = e.currentTarget.dataset;
        console.log(e)
        this.setData({ [key]: true, dialogKey: key });
        console.log("点击")
      },

      closeDialog() {
        const { dialogKey } = this.data;
        this.setData({ [dialogKey]: false });
      },
      confirmDialog(e){
        const { dialogKey } = this.data;
        this.setData({
          [dialogKey]: false
        })
      }

})