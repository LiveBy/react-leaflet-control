"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLeaflet = require("react-leaflet");

var _leaflet = require("leaflet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DumbControl = _leaflet.Control.extend({
  options: {
    className: "",
    onOff: "",
    handleOff: function noop() {}
  },

  onAdd: function onAdd() /* map */{
    var _controlDiv = _leaflet.DomUtil.create("div", this.options.className);
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

exports.default = (0, _reactLeaflet.withLeaflet)(function (_MapControl) {
  _inherits(LeafletControl, _MapControl);

  function LeafletControl() {
    _classCallCheck(this, LeafletControl);

    return _possibleConstructorReturn(this, (LeafletControl.__proto__ || Object.getPrototypeOf(LeafletControl)).apply(this, arguments));
  }

  _createClass(LeafletControl, [{
    key: "createLeafletElement",
    value: function createLeafletElement(props) {
      return new DumbControl(Object.assign({}, props));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(LeafletControl.prototype.__proto__ || Object.getPrototypeOf(LeafletControl.prototype), "componentDidMount", this).call(this);

      // This is needed because the control is only attached to the map in
      // MapControl's componentDidMount, so the container is not available
      // until this is called. We need to now force a render so that the
      // portal and children are actually rendered.
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.leafletElement || !this.leafletElement.getContainer()) {
        return null;
      }
      return _reactDom2.default.createPortal(this.props.children, this.leafletElement.getContainer());
    }
  }]);

  return LeafletControl;
}(_reactLeaflet.MapControl));