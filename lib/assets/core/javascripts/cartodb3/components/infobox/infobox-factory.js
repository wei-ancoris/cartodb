var InfoboxView = require('./infobox-item-view');

module.exports = {
  // Infobox with no buttons, only message
  createInfo: function (opts) {
    var closable = opts.closable === undefined ? true : opts.closable;
    return new InfoboxView({
      type: opts.type || 'default',
      title: opts.title,
      body: opts.body,
      closable: closable
    });
  },

  createWithAction: function (opts) {
    var closable = opts.closable === undefined ? true : opts.closable;
    var options = {
      type: opts.type || 'default',
      title: opts.title,
      body: opts.body,
      closable: closable
    };

    if (opts.mainAction) {
      options.mainAction = {
        label: opts.mainAction.label,
        type: opts.mainAction.type
      };
    }

    if (opts.secondAction) {
      options.secondAction = {
        label: opts.secondAction.label,
        type: opts.secondAction.type
      };
    }

    return new InfoboxView(options);
  },

  createLoading: function (opts) {
    return new InfoboxView({
      type: opts.type || 'default',
      title: opts.title || '',
      body: opts.body,
      loading: true
    });
  },

  createQuota: function (opts) {
    if (opts.closable === undefined) {
      opts.closable = true;
    }

    return new InfoboxView(opts);
  }
};
