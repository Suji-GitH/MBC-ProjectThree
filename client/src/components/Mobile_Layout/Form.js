import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import SnackBar from "../SnackBar/SnackBar";
import API from "../../utils/API";

function Form({
  auth: {
    user: { id },
  },
  theme,
}) {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <>
      {showSuccess ? (
        <SnackBar show>Thank you for your corporation :)</SnackBar>
      ) : null}
      <Formik
        initialValues={{
          c_firstName: "",
          c_lastName: "",
          c_email: "",
          c_mobileNumber: "",
        }}
        validate={({ c_firstName, c_lastName, c_email, c_mobileNumber }) => {
          const errors = {};
          if (!c_firstName) {
            errors.c_firstName = "Required!";
          }
          if (!c_lastName) {
            errors.c_lastName = "Required!";
          }
          if (!c_email) {
            errors.c_email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(c_email)
          ) {
            errors.c_email = "Invalid email address";
          }
          if (!c_mobileNumber) {
            errors.c_mobileNumber = "Required!";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const data = await API.saveCustomerDetails(id, values);
            setShowSuccess(true);
            setSubmitting(false);
          } catch (error) {}
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form style={theme.form} onSubmit={handleSubmit}>
            <div style={theme.input}>
              <TextField
                id="c_firstName"
                name="c_firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.c_firstName}
                type="text"
                label="First Name"
                variant="outlined"
                error={errors.c_firstName && touched.c_firstName}
                helperText={errors.c_firstName}
              />
            </div>

            <div style={theme.input}>
              <TextField
                id="c_lastName"
                name="c_lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.c_lastName}
                type="text"
                label="Last Name"
                variant="outlined"
                error={errors.c_lastName && touched.c_lastName}
                helperText={errors.c_lastName}
              />
            </div>

            <div style={theme.input}>
              <TextField
                id="c_email"
                name="c_email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.c_email}
                type="email"
                label="Email"
                variant="outlined"
                error={errors.c_email && touched.c_email}
                helperText={errors.c_email}
              />
            </div>

            <div style={theme.input}>
              <TextField
                id="c_mobileNumber"
                name="c_mobileNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.c_mobileNumber}
                type="phone"
                label="Mobile Number"
                variant="outlined"
                error={errors.c_mobileNumber && touched.c_mobileNumber}
                helperText={errors.c_mobileNumber}
              />
            </div>

            <div style={theme.buttonLayout}>
              <Button
                style={theme.button}
                disabled={
                  isSubmitting ||
                  errors.c_firstName ||
                  errors.c_lastName ||
                  errors.c_email ||
                  errors.c_mobileNumber
                }
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

Form.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Form);
