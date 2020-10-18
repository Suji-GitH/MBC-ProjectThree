import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tippy from "@tippyjs/react";
import { TwitterPicker } from "react-color";
import QR from "../QRcode/QRcode";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";

const dashboardStyles = {
  mainGrid: {
    paddingTop: "125px",
    textAlign: "center",
  },
  qrGrid: {
    height: "250px",
    margin: "0px 20px 20px 15px",
    border: "3px dashed mediumpurple",
  },
  colorGrid: {
    height: "300px",
    margin: "0px 20px 0px 15px",
    border: "3px dashed deepskyblue",
    display: "grid",
  },
  themeBtn: {
    backgroundColor: "Transparent",
    fontFamily: "'Poiret One', cursive",
    fontWeight: "bold",
  },
  fileBtn: {
    color: "dodgerblue",
    fontFamily: "'Poiret One', cursive",
    fontWeight: "bold",
    padding: "20px 0px 0px 20px",
  },
  appGrid: {
    height: "100%",
    marginRight: "20px",
    border: "3px dashed lightgreen",
  },
  header: {
    fontFamily: "'Monoton', cursive",
    fontWeight: "500",
  },
  list: {
    fontFamily: "'Poiret One', cursive",
    textAlign: "left",
    display: "grid",
    gridGap: "1em",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginTop: "10px",
  },
};

function ThemeGrid({
  auth: {
    user: { id },
  },
}) {
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
    "#ccc"
  );
  const [selectedBtnColor, setSelectedBtnColor] = useState("#ccc");
  const [selectedBtnTxtColor, setSelectedBtnTxtColor] = useState("black");
  const [logo, setLogo] = useState();

  const mobileAppStyles = {
    headerLayout: {
      backgroundColor: `${selectedBackgroundColor}`,
    },
    form: {
      backgroundColor: `${selectedBackgroundColor}`,
      height: "100vh",
      padding: "1em",
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
  };

  const saveTheme = async () => {
    try {
      await API.saveTheme(id, {
        t_logo: logo,
        t_style: JSON.stringify(mobileAppStyles),
      });
    } catch (err) {
      console.error("Opps! : ", err);
    }
  };

  const onFileChange = (e) => {
    try {
      console.log("file: ", e.target.files);
      const [userSelectedFile] = e.target.files;
      if (userSelectedFile) {
        if (userSelectedFile.size > 10000) {
          console.log("userSelectedFile: ", userSelectedFile);
          alert("File too big");
        } else {
          var reader = new FileReader();
          // Read file content on file loaded event
          reader.onload = function (event) {
            setLogo(event.target.result);
          };
          // Convert data to base64
          reader.readAsDataURL(userSelectedFile);
        }
      }
    } catch (error) {
      console.log("Ërror");
    }
  };

  return (
    <>
      <Grid container spacing={0} style={dashboardStyles.mainGrid}>
        <Grid item xs={4}>
          <Paper style={dashboardStyles.qrGrid} elevation={3}>
            <h3 style={dashboardStyles.header}>Contact Form - QR Code:</h3>
            <QR />
          </Paper>
          <Grid item xs={12}>
            <Paper style={dashboardStyles.colorGrid} elevation={3}>
              <Tippy
                interactive={true}
                placement={"right"}
                arrow={false}
                content={
                  <TwitterPicker
                    color={selectedBackgroundColor}
                    onChangeComplete={(color) =>
                      setSelectedBackgroundColor(color.hex)
                    }
                  />
                }
              >
                <Button style={dashboardStyles.themeBtn} variant="contained">
                  Select Background Color
                </Button>
              </Tippy>
              <Tippy
                interactive={true}
                placement={"right"}
                arrow={false}
                content={
                  <TwitterPicker
                    color={selectedBtnColor}
                    onChangeComplete={(color) => setSelectedBtnColor(color.hex)}
                  />
                }
              >
                <Button style={dashboardStyles.themeBtn} variant="contained">
                  Select Button Color
                </Button>
              </Tippy>
              <Tippy
                interactive={true}
                placement={"right"}
                arrow={false}
                content={
                  <TwitterPicker
                    color={selectedBtnTxtColor}
                    onChangeComplete={(color) =>
                      setSelectedBtnTxtColor(color.hex)
                    }
                  />
                }
              >
                <Button style={dashboardStyles.themeBtn} variant="contained">
                  Select Button Text Color
                </Button>
              </Tippy>
              <Button
                style={dashboardStyles.themeBtn}
                disabled={!logo}
                onClick={saveTheme}
                variant="contained"
              >
                {" "}
                Save Theme
              </Button>
              {/* <button disabled={!logo} onClick={saveTheme}>
                Save Theme
              </button> */}
              <input
                style={dashboardStyles.fileBtn}
                type="file"
                onChange={onFileChange}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Paper style={dashboardStyles.appGrid} elevation={3}>
            <h3 style={dashboardStyles.header}>
              How Your Contact Form Looks on Mobile:
            </h3>
            <div
              style={{
                backgroundColor: selectedBackgroundColor,
                height: "80%",
                borderRadius: "16px",
              }}
            >
              <br></br>
              {/* Last Name */}
              <div style={mobileAppStyles.input}>
                <TextField
                  style={{ borderColor: "pink" }}
                  type="text"
                  label="First Name"
                  variant="outlined"
                />
              </div>
              {/* Last Name */}
              <div style={mobileAppStyles.input}>
                <TextField type="text" label="Last Name" variant="outlined" />
              </div>
              {/* Email */}
              <div style={mobileAppStyles.input}>
                <TextField type="email" label="Email" variant="outlined" />
              </div>
              {/* Mobile */}
              <div style={mobileAppStyles.input}>
                <TextField
                  type="c_mobileNumber"
                  label="Mobile Number"
                  variant="outlined"
                />
              </div>
              <div style={mobileAppStyles.buttonLayout}>
                <Button
                  style={mobileAppStyles.button}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

ThemeGrid.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ThemeGrid);
