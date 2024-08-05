Component({
  data: {
  },
  properties: {
    pageCur: {
      type: String,
      value: ''
    }
  },
  methods:{
  navChange(e) {
    wx.switchTab({
      url:"/pages/firstparty/"+e.currentTarget.dataset.cur+"/"+e.currentTarget.dataset.cur,
    })
  }
  }
})
