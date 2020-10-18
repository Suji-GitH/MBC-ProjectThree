import React, { Component } from "react";

class Search extends Component {
  render(props) {
    const searchStyle = {
      fontFamily: "'Poiret One', cursive",
      textAlign: "center",
      margin: "150px 0px 50px 0px",
      border: "solid 3px orange",
      width: "100%",
      borderStyle: "dashed",
      height: "55px",
      fontSize: "20px",
    };

    return (
      <>
        <input
          style={searchStyle}
          id="search"
          type="text"
          placeholder="Search Customer by typing in the date..."
          onChange={this.props.filterByDate}
        />
      </>
    );
  }
}

export default Search;
