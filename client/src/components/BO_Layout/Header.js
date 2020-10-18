import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const headerStyles = {
  logo: {
    fontFamily: "'Monoton', cursive",
    position: "absolute",
    top: "-28px",
    left: "15px",
    fontSize: "35px",
  },
  nav: {
    fontFamily: "'Poiret One', cursive",
    fontSize: "x-large",
    position: "absolute",
    top: "28px",
    left: "250px",
  },
  businessLogo: {
    position: "absolute",
    top: "18px",
    right: "160px",
  },
  businessName: {
    fontFamily: "'Poiret One', cursive",
    position: "absolute",
    top: "15px",
    right: "80px",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  logout: {
    position: "absolute",
    top: "25px",
    right: "16px",
    fontSize: "40px",
    cursor: "pointer",
  },
};

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <>
        <Grid item xs={8}>
          <div>
            <h4 style={headerStyles.logo}>Trace</h4>
          </div>

          <Breadcrumbs
            style={headerStyles.nav}
            separator="-"
            aria-label="breadcrumb"
          >
            <Link style={headerStyles.link} tag={Link} to="/Dashboard">
              Dashboard
            </Link>

            <Link style={headerStyles.link} tag={Link} to="/ThemeBuilder">
              Theme Builder
            </Link>

            <Link style={headerStyles.link} tag={Link} to="/CustomerList">
              Contact List
            </Link>

            <Link
              style={headerStyles.link}
              tag={Link}
              to={`/business/${user.id}`}
            >
              Test - Mobile
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={4}>
          <div style={headerStyles.businessName}>
            <h4>
              <AccountCircleIcon style={headerStyles.businessLogo} />
              <b>Welcome,</b> {user.business_vendor.split(" ")[0]}
            </h4>
          </div>
          <ExitToAppRoundedIcon
            style={headerStyles.logout}
            onClick={this.onLogoutClick}
            color="secondary"
          />
        </Grid>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
