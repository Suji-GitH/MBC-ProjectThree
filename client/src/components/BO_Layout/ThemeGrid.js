import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import QR from "../QRcode/QRcode";
import CustomerForm from "../Mobile_Layout/Form";
import Theme from "../ThemePicker/Theme";

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
    colorGrid: {
        height: "300px",
        margin: "0px 20px 0px 15px",
        border: "3px dashed deepskyblue"
    },
    appGrid: {
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

function ThemeGrid() {

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
                            <Theme />
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={8}>
                    <Paper style={dashboardStyles.appGrid} elevation={3}>
                    <h3 style={dashboardStyles.header}>How Your Contact Form Looks on Mobile:</h3>
                    <CustomerForm />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );

}

export default ThemeGrid;