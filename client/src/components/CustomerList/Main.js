import React, { Component } from "react";
import SearchBar from './SearchBar';
import CustomerTable from './CustomerTable';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

class CustomerDirectory extends Component {

    state = {
        customers: [],
        query: '',
        sortedCustomers: [],
        sortType: ''
    };

    componentDidMount() {
       this.loadAllCustomers();
    }

    loadAllCustomers() {
        axios
        .get(`/api/customerForm/${this.props.auth.user.id}`)
        .then(res => {
            this.createNewCustomersList(res.data.customer_details);
            console.log(res.data.customer_details);
        })
        .catch(err => console.error(err));
    };

    createNewCustomersList = customers => {
        
        const newCustomersList = customers.map((customer => {

            return (
                {
                    c_firstName: customer.c_firstName,
                    c_lastName: customer.c_lastName,
                    c_email: customer.c_email,
                    c_mobileNumber: customer.c_mobileNumber,
                    date: `${customer.date}`
                }
            )

        }))

        this.setState({
            customers: newCustomersList
        })
    }

     //Filter by search input:
     filterByDate = event => {

        const query = event.target.value;

         this.setState({
            query
        }, () => {

            let customersList;

            if (this.state.sortedCustomers.length > 0) {
                customersList = this.state.sortedCustomers;
            } else {
                customersList = this.state.customers;
            }
           
            //add display: true/false to display the record if it matches the search string:
            const newCustomerTable = customersList.map(customer => {
           
                let date = customer.date;

                if (date.indexOf(this.state.query) !== -1) {
                    return {...customer, display: true}
                } else {
                    return {...customer, display: false}
                }
            });

            this.setState({
                customers: newCustomerTable,
                sortedCustomers: newCustomerTable
            });

        });

    }

    render() {
        const { user } = this.props.auth;

        let customersList;

        if (this.state.sortedCustomers.length > 0) {
            customersList = this.state.sortedCustomers;
        } else {
            customersList = this.state.customers;
        }

        return(
            <>
                <SearchBar filterByDate={this.filterByDate} query={this.state.query} />
                <CustomerTable customers={customersList} />
            </>
        );
    }
}

CustomerDirectory.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(CustomerDirectory);