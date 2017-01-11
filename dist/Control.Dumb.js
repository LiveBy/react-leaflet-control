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
    var _controlDiv = _leaflet.DomUtil.create('div', this.options.className);
    _leaflet.DomEvent.disableClickPropagation(_controlDiv);
    return _controlDiv;
  },

  onRemove: function onRemove(map) {
    if (this.options.onOff) {
      map.off(this.options.onOff, this.options.handleOff, this);
    }

    return this;
  }
});