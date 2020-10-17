import React, { Component } from "react";

class CustomerDetails extends Component {

    render(props) {

        const { order, c_firstName, c_lastName, c_mobileNumber, c_email, date} = this.props;
        
        return (
            <tr>
                <td>{order}</td>
                <td>{c_firstName}</td>
                <td>{c_lastName}</td>
                <td>{c_mobileNumber}</td>
                <td>{c_email}</td>
                <td>{date}</td>
            </tr>
        )
    }

}

export default CustomerDetails;