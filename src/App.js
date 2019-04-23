import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/MapContainer";
import SearchForm from "./components/SearchForm";

const API = "https://www.easyfoodstamps.com/stores?";
// const API = `https://www.easyfoodstamps.com/stores?latitude=${latitude}&longitude=${longitude}`;

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
