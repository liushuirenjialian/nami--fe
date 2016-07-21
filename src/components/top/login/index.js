var acHttp = require('../../../lib/http.js');
require('./style.scss');
module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      account: '',
      password: ''
    };
  },
  components: {
    alert: require('vue-strap').alert
  },
  // attached: function () {
  //   console.log("加载登录");
  //   ac_util.stopLoading();
  // },
  methods: {
    login: function () {
      var url = '/oauth/token';
      var param = {};
      param.username = this.account;
      param.password = this.password;
      var _this = this;
      acHttp.oauth(_this, url, param, function (ret) {
        console.log(ret);
        _this.getUserInfo();
      });
    },
    getUserInfo: function () {
      var url = '/api/account';
      acHttp.request(this, 'GET', url, function (ret) {
        ac_store.setUserInfo(ret.data);
        console.log(ret);
      });
    },
    logout: function () {
      var url = '/api/logout';
      acHttp.request(this, 'POST', url, function (ret) {
        console.log(ret);
      });
    }
  }
};
