import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import QR from "../QRcode/QRcode";

const dashboardStyles = {
    mainGrid: {
        paddingTop: "125px",
        textAlign: "center"
    },
    qrGrid: {
        height: "250px",
        margin: "0px 20px 20px 15px",
        border: "3px dashed mediumpurple"
    },
    instGrid: {
        height: "300px",
        margin: "0px 20px 0px 15px",
        border: "3px dashed deepskyblue"
    },
    graphGrid: {
        height: "100%",
        marginRight: "20px",
        border: "3px dashed lightgreen"
    },
    header: {
        fontFamily: "'Monoton', cursive",
        fontWeight: "500"
    },
    list: {
        fontFamily: "'Poiret One', cursive",
        textAlign: "left",
        display: "grid",
        gridGap: "1em"
    },
    link: {
        textDecoration: "none",
        color: "black",
        marginTop: "10px",
    }
};

function DashboardGrid() {

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
                            <h3 style={dashboardStyles.header}>How  to  get  started:</h3>
                            <ol style={dashboardStyles.list}>
                                <li>Create your theme for the mobile application by navigating to Theme Builder.</li>
                                <li>Scan the QR code to see your mobile contact form.</li>
                                <li>Navigate to the customer list to see the customer details which will be stored for 28 days.</li>
                            </ol>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={8}>
                    <Paper style={dashboardStyles.graphGrid} elevation={3}>
                    <h3 style={dashboardStyles.header}>Store Foot Traffic:</h3>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );

}

export default DashboardGrid;