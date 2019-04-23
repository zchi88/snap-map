import React, { Component } from "react";
import uuid from "uuid";

class SearchResults extends Component {
  state = {};

  handleMouseover = event => {};

  renderEbtStores() {
    console.log("Search results: ebt Stores:", this.props.ebtStores);
    return this.props.ebtStores.map(store => (
      <li
        key={uuid.v4()}
        className="list-group-item"
        onMouseOver={this.handleMouseover}
      >
        <span className="name-label">{store["store_name"]}</span>
        <span>{store["address"]}</span>
      </li>
    ));
  }

  renderEbtOther() {
    console.log("Search results: ebt Other:", this.props.ebtOther);
    return this.props.ebtOther.map(store => (
      <li
        key={uuid.v4()}
        className="list-group-item"
        onMouseOver={this.handleMouseover}
      >
        <span className="name-label">{store["store_name"]}</span>
        <span>{store["address"]}</span>
      </li>
    ));
  }

  render() {
    return (
      <div className="panel panel-primary" id="result_panel">
        <h4 className="panel-title">Result List</h4>
        <ul className="list-group">
          {this.renderEbtStores()}
          {this.renderEbtOther()}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
