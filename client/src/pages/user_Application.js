import React, { useState, useEffect } from "react";
import Header from "../components/Mobile_Layout/Header";
import CustomerForm from "../components/Mobile_Layout/Form";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../utils/API";

function UserApp({
  auth: {
    user: { id },
  },
}) {
  const [theme, setTheme] = useState();
  const [logo, setLogo] = useState();

  useEffect(() => {
    const getTheme = async () => {
      const { app_theme } = await API.getTheme(id);
      const { t_logo, t_style } = app_theme;
      console.log("t_logo, t_style: ", t_logo, t_style);
      setTheme(JSON.parse(t_style));
      setLogo(t_logo);
    };
    getTheme();
  }, []);

  return (
    <>
      {logo && <Header logo={logo} theme={theme} />}
      {theme && <CustomerForm theme={theme} />}
    </>
  );
}

UserApp.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserApp);
