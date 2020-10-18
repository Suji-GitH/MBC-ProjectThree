import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import HeroLanding from "../BO_Layout/HeroLanding";
import Footer from "../BO_Layout/Footer";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Background from "../assets/img/contact_tracing.jpg";

const authStyles = {
  grid: {
    height: "100vh",
    width: "100vw",
  },
  subGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    backgroundImage: `url(${Background})`,
    margin: "3em",
    height: "90%",
    backgroundColor: "white",
    border: "solid",
    borderStyle: "dashed",
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    height: "100%",
    padding: "1em",
    display: "grid",
  },
  input: {
    margin: "1em",
    textAlign: "center",
    display: "grid",
  },
  buttonGrid: {
    margin: "1em",
    textAlign: "center",
    display: "grid",
  },
  button: {
    backgroundColor: "aquamarine",
    fontFamily: "'Poiret One', cursive",
    fontWeight: "bold",
    fontSize: "larger",
    height: "60px",
    // "&:hover": {
    //   backgroundColor: "aquamarine",
    // },
  },
  link: {
    fontFamily: "'Poiret One', cursive",
    textDecoration: "none",
    color: "black",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <div>
          <Grid style={authStyles.grid} container spacing={3}>
            <Grid style={authStyles.subGrid} item xs={6}>
              <HeroLanding />
            </Grid>
            <Grid item xs={6}>
              <Paper style={authStyles.paper} variant="outlined" elevation={9}>
                <form
                  style={authStyles.form}
                  noValidate
                  onSubmit={this.onSubmit}
                >
                  <di></di>
                  <div></div>
                  <div style={authStyles.input}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <span style={{ color: "crimson" }}>
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>

                  <div style={authStyles.input}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      label="Password"
                      variant="outlined"
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />
                    <span style={{ color: "crimson" }}>
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>

                  <div style={authStyles.buttonGrid}>
                    <Button
                      style={authStyles.button}
                      variant="contained"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Link style={authStyles.link} tag={Link} to="/">
                      REGISTER
                    </Link>
                  </div>
                </form>
              </Paper>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
