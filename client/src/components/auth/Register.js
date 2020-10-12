import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import HeroLanding from "../Layout/HeroLanding";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const authStyles = {
  grid: {
    height: "100vh",
    width: "100vw",
  },
  subGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  paper: {
    margin: "3em",
    height: "90%",
    backgroundColor: "white",
    border: "solid",
    borderStyle: "dashed"
  },
  form: {
    position: "relative",
    top: "20%"
  },
  input: {
    margin: "1em",
    textAlign: "center",
    display: "grid"
  },
  button: {
    margin: "1em",
    textAlign: "center",
    display: "grid"
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginTop: "10px",
  }
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      business_vendor: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      business_vendor: this.state.business_vendor,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <Grid style={authStyles.grid} container spacing={3}>
          <Grid style={authStyles.subGrid} item xs={6}>
            <HeroLanding />
          </Grid>
          <Grid item xs={6}>
            <Paper style={authStyles.paper} variant="outlined" elevation={9}>
              <form style={authStyles.form} noValidate onSubmit={this.onSubmit}>
                {/* Business Name */}
                <div style={authStyles.input}>
                <TextField 
                onChange={this.onChange}
                value={this.state.business_vendor}
                error={errors.business_vendor}
                id="business_vendor"
                type="text"
                label="Business Name" 
                variant="outlined"
                className={classnames("", {
                  invalid: errors.business_vendor
                })}
                 />
                <span style={{color: "crimson"}}>
                  {errors.business_vendor}
                </span>
                </div>
                {/* Email */}
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
                  invalid: errors.email
                })}
                 />
                <span style={{color: "crimson"}}>
                {errors.email}
                </span>
                </div>
                {/* Password */}
                <div style={authStyles.input}>
                <TextField 
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                label="Password" 
                variant="outlined"
                className={classnames("", {
                  invalid: errors.password
                })}
                 />
                <span style={{color: "crimson"}}>
                  {errors.password}
                </span>
                </div>
                {/* Confirm Password */}
                <div style={authStyles.input}>
                <TextField 
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                label="Confirm Password" 
                variant="outlined"
                className={classnames("", {
                  invalid: errors.password2
                })}
                 />
                <span style={{color: "crimson"}}>
                  {errors.password2}
                </span>
                </div>
                
                <div style={authStyles.button}>
                <Button variant="contained" type="submit">Register</Button>
                <Link style={authStyles.link} tag={Link} to="/login">Already have an account? Login</Link>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
    </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
