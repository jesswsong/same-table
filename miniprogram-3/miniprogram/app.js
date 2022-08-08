// app.js
App({
  onLaunch: function () {
  

    this.globalData = {};
    this.goCloud();
    //this.goMap();
  },

  
  goLogin(){
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

  goMap(){
    const key = 'M2WBZ-FULL3-HOS36-3WHFY-NOWQH-NTFS4'; // 使用在腾讯位置服务申请的key
    const referer = '拼桌桌'; // 调用插件的app的名称
    const hotCitys = ''; // 用户自定义的的热门城市

    wx.navigateTo({
      url: 'plugin://citySelector/index?key=${key}&referer=${referer}&hotCitys=${hotCitys}',
      });
  },
  goCloud(){
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }
  },

});
