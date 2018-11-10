// pages/detail/detail.js
Page({
  tapHandle:function(e){
    var id=e.target.dataset.index;
    console.log(id);
  },
  tapHandle3:function(){
    console.log("父元素")
  },
  tapHandle4:function(){
    console.log("阻止冒泡子元素")
  },
  tapHandle5:function(){
    console.log("阻止冒泡父元素")
  },
  /**
   * 页面的初始数据
   */
  data: {
    number:1,
    imagelist:[],//图片轮播对象
    info:{}//商品信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("1:获取上一个组件传递的参数：");
    // console.log(options);
    //1.发送请求获得图片轮播列表
    wx.request({
      url:"http://127.0.0.1:3000/message",
      success:(res)=>{
        this.setData({
          imagelist:res.data
        });
      }
    })
    //2.获取商品信息
    var pid=options.pid;
    wx.request({
      url:"http://127.0.0.1:3000/product",
      data:{pid:pid},
      methods:"GET",
      success: (result)=>{
        console.log(result.data);
        this.setData({
          info:result.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击加号
  addNum:function(){
    var n=this.data.number+1;
    if(n>999){n=999}
    this.setData({
      number:n
    })
    console.log("+")
  },
  /**
   * 点击减号
   */
  subNum:function(){
    var n=this.data.number-1;
    if(n<1){
      n=1;
    }
    this.setData({
      number:n
    })
    console.log("-")
  },
  
})