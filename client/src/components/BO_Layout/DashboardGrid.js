import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";
import QR from "../QRcode/QRcode";
import Graph from "../FootTraffic/graph";

const dashboardStyles = {
  mainGrid: {
    paddingTop: "125px",
    textAlign: "center",
  },
  qrGrid: {
    height: "270px",
    margin: "0px 20px 20px 15px",
    border: "3px dashed mediumpurple",
  },
  instGrid: {
    height: "280px",
    margin: "0px 20px 0px 15px",
    border: "3px dashed deepskyblue",
  },
  graphGrid: {
    height: "100%",
    marginRight: "20px",
    border: "3px dashed lightgreen",
    display: "flex",
  },
  header: {
    fontFamily: "'Monoton', cursive",
    fontWeight: "500",
  },
  graphHeader: {
    margin: "20px 0px 0px 100px",
    fontFamily: "'Monoton', cursive",
    fontWeight: "500",
  },
  list: {
    fontFamily: "'Poiret One', cursive",
    textAlign: "left",
    display: "grid",
    gridGap: "1em",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginTop: "10px",
  },
};

function DashboardGrid({
  auth: {
    user: { id },
  },
}) {
  const [customerData, setCustomerData] = useState();

  const timesOfDay = [
    0,
    2,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
  ];

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const { customer_details } = await API.getCustomerList(id);
        const customerList = customer_details.map((item) =>
          new Date(item.date).getHours()
        );
        const frequencyMap = customerList.reduce((acc, curr) => {
          acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
          return acc;
        }, {});
        const dataForTheGraph = timesOfDay.map((timeOfDay) => ({
          timeOfDay,
          visitors: frequencyMap[timeOfDay] || 0,
        }));
        console.log("dataForTheGraph: ", dataForTheGraph);
        setCustomerData(dataForTheGraph);
      } catch (err) {
        console.error(err);
      }
    };
    getCustomers();
  }, []);

  return (
    <>
      <Grid container spacing={0} style={dashboardStyles.mainGrid}>
        <Grid item xs={4}>
          <Paper style={dashboardStyles.qrGrid} elevation={3}>
            <h3 style={dashboardStyles.header}>Contact Form - QR Code:</h3>
            <QR />
          </Paper>
          <Grid item xs={12}>
            <Paper style={dashboardStyles.instGrid} elevation={3}>
              <h3 style={dashboardStyles.header}>How to get started:</h3>
              <ol style={dashboardStyles.list}>
                <li>
                  Create your theme for the mobile application by navigating to
                  Theme Builder.
                </li>
                <li>Scan the QR code to see your mobile contact form.</li>
                <li>
                  Navigate to the customer list to see the customer details
                  which will be stored for 28 days.
                </li>
              </ol>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Paper style={dashboardStyles.graphGrid} elevation={3}>
            <h3 style={dashboardStyles.graphHeader}>Store Foot Traffic:</h3>
            {customerData ? (
              <Graph data={customerData} timesOfDay={timesOfDay} />
            ) : (
              <p
                style={{
                  fontFamily: `"Poiret One", cursive`,
                  fontWeight: "bold",
                }}
              >
                "Loading...Refresh the page if it's taking too long"
              </p>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

DashboardGrid.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DashboardGrid);
