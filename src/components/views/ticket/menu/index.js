require('./style.scss');
module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      actionId: 1,
      id: ''
    };
  },
  created: function () {
    // this.$dispatch('showBreadcrumb', '工单管理');

  },
  methods: {
    logout: function () {
    }
  }
};
