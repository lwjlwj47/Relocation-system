Component({
  options: {
    addGlobalClass: true
  },
 
  /**
   * 组件的属性列表
   */
  properties: {
    navigationBackgroundColor: {
      type: String,
      value: ''
    },
    navigationBarTitleText: {
      type: String,
      value: ''
    },
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    paddingTopNum: '',
    statusBarHeight: '',
  },
 
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
 
      const {
        height,
        top
      } = wx.getMenuButtonBoundingClientRect()
      const {
        statusBarHeight
      } = wx.getSystemInfoSync();
      const navbarH = (top - statusBarHeight) * 2 + height + statusBarHeight
      this.setData({
        paddingTopNum: navbarH,
        statusBarHeight: statusBarHeight
      })
 
     },
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
 
    //自定义导航返回图标操作
    back() {
      wx.navigateBack({
        delta: 1
      }).then(res => {
        console.log(res)
      }).catch(err => {
        // 如果报错，说明是通过二维码或者分享进入的，直接返回首页
        wx.reLaunch({
          url: '../../../pages/index/index',
        })
      })
    },
 
  },
 
})