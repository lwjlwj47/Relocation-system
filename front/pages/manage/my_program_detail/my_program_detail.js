// pages/firstparty/program_detail/program_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmBtn: { content: '确定', variant: 'base' },
    showConfirm: false,
    dialogKey: '',
    unit:"",
    unit_number:"",
    value:"",
    program:[
      {
        program_name:"总项目名称",
        first_name:"刘三",
        second_name:"李四",
        start_data:"2024.06.10",
        end_data:"2024.06.16",
        detail:"这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情..."

      }
    ],
    program_done:[
      {
        program_name:"总项目名称",
        first_name:"刘三",
        second_name:"李四",
        start_data:"2024.06.10",
        end_data:"2024.06.16",
        detail:"这是项目详情段落文本备注，这是项目详情段落文本这是项目详情段落文本，这是项目详情..."

      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    this.setData({
      unit:options.name,
      unit_number:options.number
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
  //   console.log("onshow")
  //   let pages = getCurrentPages();
  // let currPage = pages[pages.length-1];
  // if (currPage.data.back){
  //   // do something
  //   let program = [...this.data.program,this.data.program_a]
  //   this.setData({
  //     program:program,
  //     back:false
  //   })
  // }
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
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      value:event.detail.value
    })
    console.log(this.data.value)
  },
  goto()
  {
    wx.navigateTo({
      url: '/pages/manage/program_detail_1/program_detail_1',
    })
  },
  onIconTap(e)
  {
    let index = e.currentTarget.dataset.index;
    var array = this.data.program;
    array.splice(index,1)
    this.setData({
      program:array
    })
  },
    //显示框
    delete(e){
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
      let index = e.currentTarget.dataset.i;
      var array = this.data.program;
      array.splice(index,1)
      this.setData({
        program:array,
        [dialogKey]: false
      })
    }
})