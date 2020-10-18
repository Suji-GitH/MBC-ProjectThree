import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import QRCode from "qrcode.react";

class QR extends Component {
  state = {
    vendorDetails: [],
  };

  componentDidMount() {
    this.getQrCode();
  }

  getQrCode = () => {
    axios
      .get(`/api/businessVendor/${this.props.auth.user.id}`)
      .then((response) => {
        const data = response.data;
        this.setState({ vendorDetails: data });
        console.log(this.state.vendorDetails.QR_link);
      })
      .catch((err) => console.error(err));
  };

  render() {
    // const { user } = this.props.auth;

    return (
      <>
        <QRCode value={`${this.state.vendorDetails.QR_link}`} />
        <p style={{ fontFamily: `"Poiret One", cursive`, fontWeight: "bold" }}>
          Right click and "save image as" to download the QR code{" "}
        </p>
      </>
    );
  }
}

QR.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(QR);
