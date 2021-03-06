import React, { Component } from "react";

class locationSearch extends Component {
  state = {
    address: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Performing search with:");
    console.log(this.state.address);
    this.props.onSearch(this.state.address);
  };

  render() {
    console.log("Search form rendering");
    console.log("Search form props: ", this.props);

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
