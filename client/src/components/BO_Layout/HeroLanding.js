import React, { Component } from "react";

const heroStyle = {
  header: {
    fontFamily: "'Monoton', cursive",
    fontWeight: "500",
    fontSize: "150px",
    textAlign: "center",
    marginBottom: "unset",
  },
  para: {
    fontFamily: "'Poiret One', cursive",
    fontSize: "25px",
    textAlign: "right",
  },
};

class Landing extends Component {
  render() {
    return (
      <div>
        <h1 style={heroStyle.header}>Trace</h1>
        <p style={heroStyle.para}>Create/Manage customized contact</p>
        <p style={heroStyle.para}>tracing form for your business</p>
      </div>
    );
  }
}

export default Landing;
