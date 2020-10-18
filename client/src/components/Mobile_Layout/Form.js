import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Form({
  auth: {
    user: { id },
  },
  theme,
}) {
  /* 
  const mobileAppStyles = {
    form: {
      backgroundColor: `${selectedBackgroundColor}`,
      height: "100vh",
    },
    formLayout: {
      textAlign: "center",
      margin: "5em 1em 0",
    },
    input: {
      margin: "1em",
      display: "grid",
    },
    buttonLayout: {
      margin: "4em 2em 0 1em",
      display: "grid",
    },
    button: {
      backgroundColor: `${selectedBtnColor}`,
      color: `${selectedBtnTxtColor}`,
    },
  }; */

  return (
    <form style={theme.form}>
      {/* noValidate onSubmit={this.onSubmit} */}
      {/* Last Name */}
      <div style={theme.input}>
        <TextField
          // onChange={this.onChange}
          // value={this.state.c_firstName}
          // error={errors.c_firstName}
          id="c_firstName"
          type="text"
          label="First Name"
          variant="outlined"
          // className={classnames("", {
          //   invalid: errors.c_firstName
          // })}
        />
        {/* <span style={{color: "crimson"}}>
                  {errors.c_firstName}
                </span> */}
      </div>
      {/* Last Name */}
      <div style={theme.input}>
        <TextField
          // onChange={this.onChange}
          // value={this.state.c_lastName}
          // error={errors.c_lastName}
          id="c_lastName"
          type="text"
          label="Last Name"
          variant="outlined"
          // className={classnames("", {
          //   invalid: errors.c_lastName
          // })}
        />
        {/* <span style={{color: "crimson"}}>
                  {errors.c_lastName}
                </span> */}
      </div>
      {/* Email */}
      <div style={theme.input}>
        <TextField
          // onChange={this.onChange}
          // value={this.state.c_email}
          // error={errors.c_email}
          id="c_email"
          type="email"
          label="Email"
          variant="outlined"
          // className={classnames("", {
          //   invalid: errors.c_email
          // })}
        />
        {/* <span style={{color: "crimson"}}>
                {errors.c_email}
                </span> */}
      </div>
      {/* Mobile */}
      <div style={theme.input}>
        <TextField
          // onChange={this.onChange}
          // value={this.state.c_mobileNumber}
          // error={errors.c_mobileNumber}
          id="c_mobileNumber"
          type="c_mobileNumber"
          label="Mobile Number"
          variant="outlined"
          // className={classnames("", {
          //   invalid: errors.c_mobileNumber
          // })}
        />
        {/* <span style={{color: "crimson"}}>
                  {errors.c_mobileNumber}
                </span> */}
      </div>

      <div style={theme.buttonLayout}>
        <Button style={theme.button} variant="contained" type="submit">
          Submit
        </Button>
        <span>Thank you for your corporation!!!</span>
      </div>
    </form>
  );
}

Form.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Form);
