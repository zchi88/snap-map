import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapContainer.css";

const DEFAULT_ZOOM = 13;

// Fix to get marker to show
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class MapContainer extends Component {
  state = {
    zoom: DEFAULT_ZOOM
  };

  // renderMarkers(){
  //   return {this.props.ebtResourcesPayload.map(entry => )};
  // }
  render() {
    console.log("Map container rendering");
    console.log("Map container props: ", this.props);

    const position = [
      this.props.currentLocation.latitude,
      this.props.currentLocation.longitude
    ];
    return (
      <Map id="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {this.props.currentLocation.address
              ? this.props.currentLocation.address
              : "You are here"}{" "}
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapContainer;
