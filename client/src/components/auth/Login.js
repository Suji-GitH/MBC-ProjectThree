import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
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
    top: "30%"
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
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
              <form style={authStyles.form} noValidate onSubmit={this.onSubmit}>
                <div style={authStyles.input}>
                <TextField 
                onChange={this.onChange}
                id="email"
                type="email"
                label="Email" 
                variant="outlined"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
                 />
                <span style={{color: "crimson"}}>
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                </div>

                <div style={authStyles.input}>
                <TextField 
                onChange={this.onChange}
                id="password"
                type="password"
                label="Password" 
                variant="outlined"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
                 />
                <span style={{color: "crimson"}}>
                  {errors.password}
                  {errors.passwordnotfound}
                </span>
                </div>
                
                <div style={authStyles.button}>
                <Button variant="contained" type="submit">Login</Button>
                <Link style={authStyles.link} tag={Link} to="/">REGISTER</Link>
                </div>

              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
