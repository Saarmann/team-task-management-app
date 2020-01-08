import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { customer } from '../../components/data/customerData.js';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';


const customerDetails = (e) => {
    //console.log(e.target);
    var { id } = e.target;
    // console.log("See Details for Id: "+id);
    //hashHistory.push('/contacts/details/'+id);
}

const formatEditCustomerButton = (cell, row) => {
    let clickHandler = customerDetails;
    var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
    var aBtn = React.createElement('a', { id: row.id, className: "mdi mdi-lead-pencil", onClick: clickHandler }, emptyContent);
    return aBtn;
}

const { SearchBar } = Search;

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

export default class CustomerTablePag extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const contentTable = ({ paginationProps, paginationTableProps }) => {

            return (
                <div className="card-body">

                    <ToolkitProvider
                        keyField="id"
                        columns={ columns }
                        data={ customer }
                        search
                    >
                        {
                            (toolkitprops) => {

                                return (
                                    <div>
                                        <div className="row">
                                            
                                            <div className="col-sm">
                                                <SizePerPageDropdownStandalone { ...paginationProps } />
                                            </div>

                                            <div className="col-sm">
                                                <button type="button" className="btn btn-success">Add new customer</button>
                                                </div>

                                            <div className="col-sm">                                                
                                                <SearchBar {...toolkitprops.searchProps} />                                                     
                                               
                                            </div>
                                        </div>
                                        <br />

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <BootstrapTable
                                                    bordered={false}
                                                    hover
                                                    {...toolkitprops.baseProps}
                                                    {...paginationTableProps}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-8">
                                            </div>
                                            <div className="col-sm-4">
                                                <div>
                                                    <PaginationListStandalone {...paginationProps}   />
                                                </div>                                                   
                                            </div>
                                        </div>
                                    </div>);


                            }
                        }
                    </ToolkitProvider>          


                </div>
            );
        }

        return (
            <div className="content-wrapper">
                <div className="content">

                    <div className="row">
                        <div className="col-12">
                            <div className="card card-default">

                                <div className="card-header card-header-border-bottom d-flex justify-content-between" id="recent-orders">
                                    <h2>Customers</h2>
                                </div>
                                
                                <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                                    {contentTable}
                                </PaginationProvider>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }


}

