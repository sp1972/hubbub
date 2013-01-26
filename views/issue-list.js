(function () {
  'use strict';

  var $ = window.jQuery;
  var _ = window._;
  var app = window.app;

  app.IssueListView = app.View.extend({
    className: 'issue-list',

    template: _.template($('#js-issue-list-template').html()),

    initialize: function () {
      // debounce, in case multiple issues are being added/removed at once
      // TODO make more efficient?
      this.listenTo(this.collection, 'add remove', _.debounce(this.render, 0));
    },

    addItem: function(model) {

    },

    removeItem: function(model) {

    },

    render: function () {
      this.$el.html(this.template({
        title: this.options.title,
        issues: this.collection
      }));
      return this;
    }
  });
})();
