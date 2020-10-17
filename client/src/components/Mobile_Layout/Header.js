import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

function Header({ logo }) {
  const infoStyle = {
    position: "absolute",
    top: "15px",
    padding: "1em",
    right: "20px",
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Link tag={Link} to="/MBC-React-Portfolio/">
        <img src={logo} alt="businessLogo" />
      </Link>

      <IconButton
        style={infoStyle}
        onClick={() => {
          openInNewTab(
            "https://www.dhhs.vic.gov.au/record-keeping-contact-tracing-covid-19"
          );
        }}
      >
        <InfoRoundedIcon />
      </IconButton>
    </>
  );
}

export default Header;
