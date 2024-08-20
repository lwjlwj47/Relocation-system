Component({
  data: {
  },
  properties: {
    pageCur: {
      type: String,
      value: ''
    },
    index: {
      type: Number,
      value: ''
    }
  },
  methods:{
  navChange(e) {
    if(this.data.index=="1")
    {
    wx.switchTab({
      url:"/pages/firstparty/"+e.currentTarget.dataset.cur+"/"+e.currentTarget.dataset.cur,
    })
    }
    else if(this.data.index=="2")
    {
      wx.switchTab({
        url: '/pages/manage/'+e.currentTarget.dataset.cur+"/"+e.currentTarget.dataset.cur,
      })
    }
    else
    {
        wx.switchTab({
          url: '/pages/employee/'+e.currentTarget.dataset.cur+"/"+e.currentTarget.dataset.cur,
        })
    }
  }
  }
})
