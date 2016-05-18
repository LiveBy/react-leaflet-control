import { Control, DomUtil } from 'leaflet';

export default Control.extend({
  options: {
    className: '',
    onOff: '',
    handleOff: function noop(){}
  },
  
  onAdd: function (map) {
    return DomUtil.create('div', this.options.className);
  },
  
  onRemove: function (map) {
    map.off(this.options.onOff, this.options.handleOff, this);
    return this;
  }
});