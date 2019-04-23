import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/MapContainer";
import SearchForm from "./components/SearchForm";

const API = "https://www.easyfoodstamps.com/stores?";
// const API = `https://www.easyfoodstamps.com/stores?latitude=${latitude}&longitude=${longitude}`;

class App extends Component {
  state = {
    latitude: 40.70851,
    longitude: -73.90896,
    zoom: 1,
    searchResults: []
  };

  talk() {
    console.log("takling");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    console.log("App render");
    return (
      <div className="App">
        <div id="search-container">
          <SearchForm />
        </div>
        <div id="map-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
