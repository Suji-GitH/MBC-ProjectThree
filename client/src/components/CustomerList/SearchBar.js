import React, { Component } from "react";

class Search extends Component {

    render(props) {
        return (
            <>
                <input id="search" type="text" placeholder="Search Customer by Date..." onChange={this.props.filterByDate} />
                <p>
                    Search User by Date or click on the "Date" column header to sort by ascending or descending order.
                </p>
                   
            
            </>
        )
    }
}

export default Search;