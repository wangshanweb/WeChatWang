Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist:[],
    goodslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://127.0.0.1:3000/imagelist",
      methods:"GET",
      success:(res)=>{
        console.log(res.data);
        this.setData({imagelist:res.data})
      }
    });
    wx.request({
      url:"http://127.0.0.1:3000/goodslist",
      methods:"GET",
      success:(res)=>{
        console.log(res.data);
        this.setData({goodslist:res.data})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("2:onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("1:onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("1:onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉--Down");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉-Bottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})