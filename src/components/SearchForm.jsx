import React, { Component } from "react";
import axios from "axios";

class locationSearch extends Component {
  state = {
    address: ""
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Performing search with:");
    console.log(this.state.address);
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="address"
          value={this.state.address}
          placeholder="Enter an address"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-default input-group-btn"
        />
      </form>
    );
  }
}

export default locationSearch;
