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

    //sort customers alphabetically by some name key:
    sortNum = customers => {

        const sortType = this.state.sortType;

        if (sortType === 'desc' || sortType === '') {
            //sort alpha ascending order:
            customers.sort(this.dynamicSort("date"));
            this.setState({
                sortedCustomers: customers,
                sortType: 'asc'
            });
        } else if (sortType === 'asc') {
            //sort alpha descending order:
            customers.sort(this.dynamicSort("-date"));
            this.setState({
                sortedCustomers: customers,
                sortType: 'desc'
            });
        }

    }

    //reorders customers list alphabetically
    dynamicSort = property => {

        var sortOrder = 1;

        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a,b) {
            if (sortOrder === -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }        
        }
    }

    render() {
        const { user } = this.props.auth;

        let customersList;

        if (this.state.sortedCustomers.length > 0) {
            customersList = this.state.sortedCustomers;
        } else {
            customersList = this.state.customers;
        }

        let sortArrow;

        const sortState = this.state.sortType;

        if (sortState === 'asc') {
            //down arrow
            sortArrow = <span>&#9660;</span>;
        } else if (sortState === 'desc') {
            //up arrow
            sortArrow = <span>&#9650;</span>;
        } else {
            sortArrow = '';
        }

        return(
            <>
                <SearchBar filterByDate={this.filterByDate} query={this.state.query} />
                <CustomerTable customers={customersList} sortNum={this.sortNum} sortArrow={sortArrow}  />
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