import { Component, Children } from 'react';
import { MapControl } from 'react-leaflet';
import PropTypes from 'prop-types';
import { Map } from 'leaflet';
import Dumb from './Control.Dumb';
import { render, unmountComponentAtNode } from 'react-dom';

export default class Control extends MapControl {
  static contextTypes = MapControl.contextTypes;
  static childContextTypes = MapControl.childContextTypes;
  static propTypes = {
    children: PropTypes.node,
    map: PropTypes.instanceOf(Map),
    popupContainer: PropTypes.object,
    position: PropTypes.string
  };

  constructor(props){
    super(props);
  }

  componentWillMount() {
    const { children: _children, map: _map, popupContainer, ...props } = this.props;

    this.leafletElement = new Dumb(props);
  }

  componentDidMount(){
    super.componentDidMount();
    this.renderContent();
  }

  componentDidUpdate(next) {
    super.componentDidUpdate(next);
    this.renderContent();
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.leafletElement.getContainer());
    this.leafletElement.remove();
  }

  renderContent() {
    const container = this.leafletElement.getContainer();
    render(
      Children.only(this.props.children),
      container
    );
  }

  render() {
    return null;
  }

}
