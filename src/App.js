import React, { Component } from "react";
import Geocode from "react-geocode";

import "./App.css";
import MapContainer from "./components/MapContainer";
import SearchForm from "./components/SearchForm";

const API = "https://www.easyfoodstamps.com/stores?";
// const API = `https://www.easyfoodstamps.com/stores?latitude=${latitude}&longitude=${longitude}`;

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

class App extends Component {
  state = {
    currentLocation: null,
    ebtLocations: []
  };

  componentDidMount() {
    console.log("App componentDidMount");
  }

  handleSearch = address => {
    console.log("Handle search called with address: ", address);
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("Found corresponding coordinates: ");
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    console.log("App render");
    return (
      <div className="App">
        <div id="search-container">
          <SearchForm onSearch={this.handleSearch} />
        </div>
        <div id="map-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
