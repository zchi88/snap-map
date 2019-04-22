import React, { Component } from "react";
import "./App.css";

import axios from "axios";
// const API = `https://www.easyfoodstamps.com/stores?latitude=${latitude}&longitude=${longitude}`;

class App extends Component {
  state = {
    latitude: "",
    longitude: "",
    searchResults: []
  };

  search() {
    // axios
    //   .get(
    //     `https://www.easyfoodstamps.com/stores?latitude=${latitude}&longitude=${longitude}`
    //   )
    //   .then(res =>
    //     this.setState({
    //       searchResults: res.data
    //     })
    //   )
    //   .catch(err => console.log(err));
  }

  componentDidMount() {
    console.log("App componentDidMount");
    this.search();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Performing search with:");
    console.log(this.state.latitude);
    console.log(this.state.longitude);
  };

  render() {
    console.log("App render");

    return (
      <div className="App">
        <div id="mapid" />
        <div className="Search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="latitude"
              value={this.state.latitude}
              placeholder="40.70851"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="longitude"
              value={this.state.longitude}
              placeholder="-73.90896"
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" className="btn btn-secondary" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
