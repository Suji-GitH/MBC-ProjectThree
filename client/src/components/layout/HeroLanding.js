import React, { Component } from "react";

const headerStyle = {
  fontFamily: "'Monoton', cursive",
  fontSize: "100px",
  textAlign: "center",
  marginBottom: "unset"
};

const paraStyle = {
  fontFamily: "'Poiret One', cursive",
  fontSize: "large",
  textAlign: "right"
};


class Landing extends Component {
  render() {
    return (
      <>
      <div>
      <h1 style={headerStyle}>Trace</h1>
      <p style={paraStyle}>Create/Manage customized contact</p> 
      <p style={paraStyle}>tracing form for your business</p>
      </div>
      </>
    );
  }
}

export default Landing;
