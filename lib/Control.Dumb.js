import { Control, DomUtil, DomEvent } from 'leaflet';

export default Control.extend({
  options: {
    className: '',
    onOff: '',
    handleOff: function noop(){}
  },

  onAdd: function (map) {
    var _controlDiv = DomUtil.create('div', this.options.className);
    DomEvent.disableClickPropagation(_controlDiv);
    return _controlDiv;
  },

  onRemove: function (map) {
    if (this.options.onOff) {
        map.off(this.options.onOff, this.options.handleOff, this);
    }

    return this;
  }
});