/* global ac_util ac_ ac_cookies */

require('./style.scss');
module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      actionId: 1
    };
  },
  created: function () {
    this.$dispatch('showBreadcrumb', '分类管理');
  },
  methods: {
    logout: function () {
    }
  }
};
