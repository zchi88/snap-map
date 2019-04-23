import React, { Component } from "react";

class Location extends Component {
  state = {
    address: "",
    latitude: "",
    longitude: ""
  };
  render() {
    console.log("Location rendering");
    console.log("Location props: ", this.props);
    return null;
  }
}

export default Location;
