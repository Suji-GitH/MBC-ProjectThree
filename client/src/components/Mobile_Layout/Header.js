import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

function Header({ logo, theme }) {
  const mHeaderStyle = {
    info: {
      position: "absolute",
      top: "15px",
      padding: "1em",
      right: "20px",
    },
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div style={theme.headerLayout}>
        <img src={logo} alt="businessLogo" />
      </div>

      <IconButton
        style={mHeaderStyle.info}
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
