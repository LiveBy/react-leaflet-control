# react-leaflet-control

A [React-Leaflet](https://github.com/PaulLeCam/react-leaflet) component that renders React elements in leaflet's control pane.


## installation
`npm install react-leaflet-control`

## Options
`position`: Which pane to mount to. Options are `topleft`, `topright`, `bottomleft`, `bottomright`

## Usage
```js
import React, { Component } from 'react';
import Control from 'react-leaflet-control';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

export default class Example extends Component {
  constructor(){
    this.state = {
      center: [51.3, 0.7]
    } 
  }
  render(){
    <Map
      center={this.state.center}
      zoom={10}
    >
      <ZoomControl position="topright" />
      <TileLayer
        url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        maxZoom={18}
      />
      
      <Control position="topleft" >
        <button 
          onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
        >
          Reset View
        </button>
      </Control>
    </Map>
  }
}

```
