require('./style.scss');
module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      actionId: 1,
      detail: {
        id: 0,
        name: '',
        abcestry: 0,
        sort: 0,
        comment: '',
        createdAt: ''
      }
    };
  },
  created: function () {
    this.$dispatch('showBreadcrumb', '分类管理详情');
    this.initData();
  },
  methods: {
    initData: function () {
      var id = this.$route.params.id;
      if (id === 0) {return;}
      var url = '/api/categories/' + this.$route.params.id;
      var _this = this;
      ac_http.request(_this, 'GET', url, function (ret) {
        _this.detail = ret.data;
      });
    },
    backList: function () {
      this.$router.go('/home/category/list');
    },
    save: function () {
      var url = '/api/categories';
      var param = {};
      param.id = this.detail.id;
      param.name = this.detail.name;
      param.abcestry = this.detail.abcestry;
      param.sort = this.detail.sort;
      param.comment = this.detail.comment;
      param.createdAt = this.detail.createdAt;
      var method = 'POST';
      if (param.id > 0) {
        method = 'PUT';
      }
      var _this = this;
      ac_http.request(_this, method, url, param, function (ret) {
        if (ret.ret < 0) {
          _this.$dispatch('showMsg', '保存失败', 1); return;
        }
        _this.detail.id = ret.data.id;
        _this.detail.createdAt = ret.data.createdAt;
        _this.$dispatch('showMsg', '保存成功');
      });
    }
  }
};
