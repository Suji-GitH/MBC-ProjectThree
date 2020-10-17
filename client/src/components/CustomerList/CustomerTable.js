import React, { Component } from "react";
import CustomerDetails from './CustomerDetails';

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

    }

    render(props) {
        
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Visited Date</th>
                        <th scope="col" className="clickable" title="Sort Date" 
                            onClick={() => this.props.sortDate(this.props.customer)}>Visited Date {this.props.sortArrow}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.customers.map((customer, index) => (
                            this.renderCustomer(customer, index)
                        ))
                    }
                </tbody>
            </table>
        );
    }

}

export default CustomerTable;