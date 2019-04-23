import React, { Component } from "react";
import Geocode from "react-geocode";
import axios from "axios";

import "./App.css";
import MapContainer from "./components/MapContainer";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const API = "https://www.easyfoodstamps.com/stores?";
const DEFAULT_STARTING_LOCATION = {
  address: "",
  latitude: 40.70851,
  longitude: -73.90896
};

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

class App extends Component {
  state = {
    currentLocation: DEFAULT_STARTING_LOCATION,
    ebtResourceFilters: [],
    ebtStores: [],
    ebtOther: [],
    payload: []
  };

  findEbtResources() {
    console.log(
      "Finding nearby EBT resources from address: ",
      this.state.currentLocation.address
    );
    console.log("Constructing payload URL: ");
    const payloadUrl = `${API}latitude=${
      this.state.currentLocation.latitude
    }&longitude=${this.state.currentLocation.longitude}`;
    console.log(payloadUrl);

    console.log("Getting payload...");
    axios
      .get(payloadUrl)
      // .then(res => this.setState({ ebtResourcesPayload: res.data }))
      .then(res => {
        this.setState({ ebtResourceFilters: res.data["filters"] });
        this.setState({ ebtStores: res.data["stores"] });
        this.setState({ ebtOther: res.data["other"] });
        console.log("filters:", this.state.ebtResourceFilters);
        console.log("other:", this.state.ebtOther);
        console.log("stores:", this.state.ebtStores);
      })
      .catch(err => console.log(err));
  }

  getStartingLocation() {
    console.log("Getting Starting location");
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      const startLocation = {
        address: "",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.setState({ currentLocation: startLocation });
      console.log("Starting location: ", this.state.currentLocation);
      this.findEbtResources();
    });
  }

  componentDidMount() {
    console.log("App componentDidMount");
    this.getStartingLocation();
  }

  handleSearch = address => {
    console.log("Handle search called with address: ", address);
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("Found corresponding coordinates: ");
        console.log(lat, lng);

        const newLocation = {
          address,
          latitude: lat,
          longitude: lng
        };
        console.log("Old current location: ", this.state.currentLocation);
        this.setState({ currentLocation: newLocation });
        console.log("New current location: ", this.state.currentLocation);

        this.findEbtResources();
      },
      error => {
        console.error(error);
      }
    );
  };

  handleHoverLocation = location => {
    console.log("Handling location hover from App:");
    console.log(location);
  };

  render() {
    console.log("App render");
    return (
      <div className="App">
        <div id="search-container">
          <SearchForm onSearch={this.handleSearch} />
          <SearchResults
            ebtOther={this.state.ebtOther}
            ebtStores={this.state.ebtStores}
          />
        </div>
        <div id="map-container">
          <MapContainer
            currentLocation={this.state.currentLocation}
            ebtOther={this.state.ebtOther}
            ebtStores={this.state.ebtStores}
            onMouseOver={this.handleHoverLocation}
          />
        </div>
      </div>
    );
  }
}

export default App;
