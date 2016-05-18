'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _leaflet = require('leaflet');

exports.default = _leaflet.Control.extend({
  options: {
    className: '',
    onOff: '',
    handleOff: function noop() {}
  },

  onAdd: function onAdd(map) {
    return _leaflet.DomUtil.create('div', this.options.className);
  },

  onRemove: function onRemove(map) {
    map.off(this.options.onOff, this.options.handleOff, this);
    return this;
  }
});