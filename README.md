#react-leaflet-control

##installation
`npm install LiveBy/react-leaflet-control`

##Usage

```jsx
import React, { Component } from 'react';
import Control from 'react-leaflet-control';
import { Map, TileLayer } from 'react-leaflet';

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
      
      <Control
        position="topleft"
      >
        <button 
          onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
        >Reset Center</button>
      </Control>
    </Map>
  }
}

```
