import React from "react";

function Footer() {

  const footerStyle = {
    position: "fixed",
    left: 20,
    bottom: 0,
    width: "100%",
    color: "black",
    textAlign: "left"
  }

  return (
  <>
  <footer style={footerStyle}>
    <p>
      &copy; {new Date().getFullYear()} Trace. All rights reserved.
    </p>
  </footer>
  </>
  );
}

export default Footer;
