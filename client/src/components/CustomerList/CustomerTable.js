import React, { Component } from "react";
import CustomerDetails from "./CustomerDetails";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class CustomerTable extends Component {
  renderCustomer = (customer, index) => {
    let displayed;

    if (customer.display === undefined) {
      displayed = true;
    } else {
      displayed = customer.display;
    }

    if (displayed === true) {
      return (
        <CustomerDetails
          key={index}
          order={index + 1}
          c_firstName={customer.c_firstName}
          c_lastName={customer.c_lastName}
          c_mobileNumber={customer.c_mobileNumber}
          c_email={customer.c_email}
          date={customer.date}
        />
      );
    }
  };

  render(props) {
    const tableStyle = {
      fontFamily: "'Poiret One', cursive",
      fontWeight: "bold",
      textAlign: "center",
      border: "solid 3px gold",
      display: "block",
      borderStyle: "dashed",
    };

    return (
      <>
        <TableContainer style={tableStyle} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Mobile</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Visited Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.customers.map((customer, index) =>
                this.renderCustomer(customer, index)
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <table style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Visited Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((customer, index) =>
              this.renderCustomer(customer, index)
            )}
          </tbody>
        </table> */}
      </>
    );
  }
}

export default CustomerTable;
