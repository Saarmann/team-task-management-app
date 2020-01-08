import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { customer } from '../../components/data/customerData.js';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';


const customerDetails = (e)=> {   
    //console.log(e.target);
    var { id} = e.target;
    // console.log("See Details for Id: "+id);
    //hashHistory.push('/contacts/details/'+id);
}

const formatEditCustomerButton =(cell, row)=>{  
    let clickHandler=customerDetails;
    var emptyContent = React.createElement('i',{id:row.id,onClick:clickHandler});			
    var aBtn = React.createElement('a',{id:row.id,className:"btn mdi mdi-lead-pencil", onClick:clickHandler}, emptyContent);
    return aBtn;	
}

const {SearchBar} = Search;

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
    </span>
);

const paginationConfig = {
    custom: true,
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [{
      text: '10', value: 10
    }, {
      text: '25', value: 25
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }, {
      text: 'All', value: customer.length
    }] // A numeric array is also available. the purpose of above example is custom the text
};

const columns = [{
    dataField: 'id',
    text: 'ID'

}, {
    dataField: 'customer_name',
    text: 'Customer name',
    sort: true

}, {
    dataField: 'registration_code',
    text: 'Registration No.'

}, {
    dataField: 'vat_no',
    text: 'VAT No.'

}, {
    dataField: 'address',
    text: 'Address'

}, {
    dataField: 'city',
    text: 'City'

}, {
    dataField: 'state',
    text: 'State'

}, {
    dataField: 'zip',
    text: 'Zip code'

}, {
    dataField: 'customer_email',
    text: 'Email'

}, {
    dataField: 'contact',
    text: 'Contact phone'

}, {
    dataField: 'payment_term',
    text: 'Payment term'

}, {
    text: 'Action',
    formatter: formatEditCustomerButton
}];

export default class CustomerTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            


            <div className="content-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-default">

                                <div className="card-header card-header-border-bottom d-flex justify-content-between" id="recent-orders">
                                
                                        <h2>Customers</h2>
                                </div>

                                <div className="card-body">
                                    <div className="basic-data-table">
                                        <div className="basic-data-table_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                            <div className="row justify-content-between top-information">
                                                <div className="dataTables_length" id="basic-data-table_length">
                                                <label>Show 
                                                    <select name="basic-data-table_length" aria-controls="basic-data-table"
                                                    className="custom-select custom-select form-control form-control">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="All">All</option>
                                                    </select> entries
                                                </label>
                                                </div>

                                                <div>
                                                <button type="button" className="btn btn-success">Add new customer</button>
                                                </div>

                                                <div id="basic-data-table_filter" className="dataTables_filter">
                                                
                                                       <input type="search" className="form-control form-control" placeholder="Search:" aria-controls="basic-data-table"/>
                                                
                                                </div>

                                            </div>
                                            <BootstrapTable
                                                keyField='id' 
                                                data={customer} 
                                                columns={columns}
                                                hover
                                                bordered={false}
                                            />

                                        </div>    
                                    </div>        
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}