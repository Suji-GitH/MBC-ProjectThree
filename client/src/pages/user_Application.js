import React, { useState, useEffect } from "react";
import Header from "../components/Mobile_Layout/Header";
import CustomerForm from "../components/Mobile_Layout/Form";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  useEffect(() => {
    const getTheme = async () => {
      try {
        const { app_theme } = await API.getTheme(id);
        if (app_theme) {
          const { t_logo, t_style } = app_theme;
          console.log("t_logo, t_style: ", t_logo, t_style);
          setTheme(JSON.parse(t_style));
          setLogo(t_logo);
        } else {
          alert(
            "Looks like you haven't created a theme yet! Please go to the theme builder and create one!"
          );
          history.push("/ThemeBuilder");
        }
      } catch (error) {
        console.log("Ërror: ", error);
      }
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
