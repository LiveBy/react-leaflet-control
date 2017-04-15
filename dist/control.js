'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _reactLeaflet = require('react-leaflet');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _leaflet = require('leaflet');

var _Control = require('./Control.Dumb');

var _Control2 = _interopRequireDefault(_Control);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = function (_MapControl) {
  _inherits(Control, _MapControl);

  function Control(props) {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));
  }

  _createClass(Control, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          _children = _props.children,
          _map = _props.map,
          popupContainer = _props.popupContainer,
          props = _objectWithoutProperties(_props, ['children', 'map', 'popupContainer']);

      this.leafletElement = new _Control2.default(props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Control.prototype.__proto__ || Object.getPrototypeOf(Control.prototype), 'componentDidMount', this).call(this);
      this.renderContent();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(next) {
      _get(Control.prototype.__proto__ || Object.getPrototypeOf(Control.prototype), 'componentDidUpdate', this).call(this, next);
      this.renderContent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _reactDom.unmountComponentAtNode)(this.leafletElement.getContainer());
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var container = this.leafletElement.getContainer();
      (0, _reactDom.render)(_react.Children.only(this.props.children), container);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Control;
}(_reactLeaflet.MapControl);

Control.contextTypes = _reactLeaflet.MapControl.contextTypes;
Control.childContextTypes = _reactLeaflet.MapControl.childContextTypes;
Control.propTypes = {
  children: _propTypes2.default.node,
  map: _propTypes2.default.instanceOf(_leaflet.Map),
  popupContainer: _propTypes2.default.object,
  position: _propTypes2.default.string
};
exports.default = Control;