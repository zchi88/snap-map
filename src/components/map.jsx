import React, { Component } from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./map.css";

const DEFAULT_ZOOM = 13;

// Fix to get marker to show
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class Map extends Component {
  state = {
    lat: 40.70851,
    lng: -73.90896,
    zoom: DEFAULT_ZOOM
  };

  componentDidMount() {
    console.log("Getting current location");
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({ lat: position.coords.latitude });
      this.setState({ lng: position.coords.longitude });
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap id="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
