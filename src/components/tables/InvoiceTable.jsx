import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { invoices } from '../../components/data/invoices.js';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';
import { URL_API } from '../../config.js';

const axios = require("axios");
const options = {
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
};

const customerDetails = (e) => {
    //console.log(e.target);
    var { id } = e.target;
    // console.log("See Details for Id: "+id);
    //hashHistory.push('/contacts/details/'+id);
}

const formatEditCustomerButton = (cell, row) => {
    let clickHandler = customerDetails;
    // var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
    var aBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-primary mdi mdi-lead-pencil btn-sm", onClick: clickHandler });
    var bBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-success mdi mdi-check btn-sm ml-2", onClick: clickHandler });
    var cBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-info mdi mdi-email-outline btn-sm ml-2", onClick: clickHandler });
    var invoiceButtons = React.createElement('div', {}, aBtn, bBtn, cBtn);
    return invoiceButtons;
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
        text: 'All', value: invoices.length
    }] // A numeric array is also available. the purpose of above example is custom the text
};

const columns = [{
    dataField: 'invoiceNumber',
    text: 'Number',
    style: {
        fontWeight: 'bold'
    },
    sort: true

}, {
    dataField: 'invoiceDate',
    text: 'Date',
    sort: true

}, {
    dataField: 'customer.customerName',
    text: 'Customer',
    sort: true

}, {
    dataField: 'invoiceAmount',
    text: 'Amount',
    headerAlign: 'center',
    style: {
        textAlign: 'center'
    },
    sort: true

}, {
    dataField: 'user.email',
    text: 'Submitter',
    sort: true

}, {
    dataField: 'dueDate',
    text: 'Payment date',
    headerAlign: 'center',
    style: {
        textAlign: 'center'
    },
    sort: true

}, {
    dataField: 'invoiceStatus',
    text: 'Status',
    headerAlign: 'center',
    style: {
        textAlign: 'center'
    },
    sort: true,
    formatter: (cell, row) => {

        if (row.invoiceStatus !== 0) {
            return (
                <div>
                    <span className="badge badge-success">Confirmed</span>
                </div>
            );
        }
        return (
            <div>
                <span className="badge badge-warning">On hold</span>
            </div>
        );
    }

}, {
    dataField: 'invoiceSent',
    text: 'Sent',
    headerAlign: 'center',
    style: {
        textAlign: 'center'
    },
    sort: true,
    formatter: (cell, row) => {

        if (row.invoiceSent !== 0) {
            return (
                <div>
                    <span class="mdi mdi-check" style={{ color: "#29cc97", fontSize: "22px" }}></span>
                </div>
            );
        }
        return (
            ""
        );
    }

}, {
    text: 'Action',
    style: {
        textAlign: 'center'
    },
    headerAlign: 'center',
    formatter:
        (cell, row) => {

            if (row.invoiceStatus === 1 && row.invoiceSent === 1) {
                return (
                    <div>
                        <button type="button" className="btn btn-outline-info mdi mdi-eye-outline btn-sm ml-2" ></button>
                        <button type="button" className="btn btn-outline-success mdi mdi-check btn-sm ml-2"></button>
                    </div>
                )
            } else if (row.invoiceStatus === 1 && row.invoiceSent === 0) {
                return (
                    <div>
                        <button type="button" className="btn btn-outline-info mdi mdi-eye-outline btn-sm ml-2" ></button>
                        <button type="button" className="btn btn-outline-success mdi mdi-check btn-sm ml-2"></button>
                        <button type="button" className=" btn btn-outline-info mdi mdi-email-outline btn-sm ml-2"></button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <button type="button" className="btn btn-outline-info mdi mdi-eye-outline btn-sm ml-2" ></button>
                        <button type="button" className="btn btn-outline-primary mdi mdi-lead-pencil btn-sm ml-2" ></button>
                        <button type="button" className="btn btn-outline-success mdi mdi-check btn-sm ml-2"></button>
                        <button type="button" className=" btn btn-outline-info mdi mdi-email-outline btn-sm ml-2"></button>
                        <button type="button" className="btn btn-outline-danger mdi mdi-delete btn-sm ml-2"></button>
                    </div>
                )
            }
        }
}];

export default class InvoiceTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            invoicesData: [],
            customerList: [],
            openInvoiceModal: true,
            rows: [{}],
            rowTotal: 0

        }

        this.openInvoiceModal = this.openInvoiceModal.bind(this);
        this.closeInvoiceModal = this.closeInvoiceModal.bind(this);
        this.showInvoiceList = this.showInvoiceList.bind(this);
    }

    componentWillMount() {
        this.showInvoiceList();
    }

    openInvoiceModal() {
        this.setState({ openInvoiceModal: true })
    }

    closeInvoiceModal() {
        this.setState({ openInvoiceModal: false })
    }

    showInvoiceList() {
        axios.get(URL_API + `/invoice/`)
            .then((invoices) => {

                this.setState({ invoicesData: invoices.data });
                // console.log(invoices.data);
                // console.log(invoices.data[0].customer.customerName)

            }).catch((exception) => {
                console.log(exception);
            });
    }

    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
      }

      handleAddRow = () => {
        const item = {
          description: "",
          quantity: "",
          price: "",
          total: ""
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
      }

      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
      }

    render() {

    const contentTable = ({ paginationProps, paginationTableProps }) => {

            return (
                <div className="card-body">

                    <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={this.state.invoicesData}
                        search

                    >
                        {
                            (toolkitprops) => {

                                return (
                                    <div>

                                        {
                                            this.state.openInvoiceModal &&
                                            <Modal size={1600} onClose={this.closeInvoiceModal}>
                                                <Modal.Header>
                                                    <Modal.Title>
                                                        Create new invoice
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body padding>
                                            
                                                        <div className="invoice-wrapper rounded border bg-white py-5 px-3 px-md-4 px-lg-5 col-sm-12">

                                                            <div className="d-flex justify-content-between">
                                                                <h2 className="text-dark font-weight-medium">Invoice</h2>
                                                            </div>

                                                            <div className="row pt-5">
                                                                <div className="col-sm-6 col-lg-4">
                                                                    <p className="text-dark mb-2"><b>To</b></p>
                                                                    <div>
                                                                        <input type="text" value="" className="form-control" placeholder="Customer name" required/> 
                                                                    </div>
                                                                </div>
                                                                                                                   
                                                                <div className="col-sm-3 col-lg-3">
                                                                    <p className="text-dark mb-2"><b>Invoice date</b></p>
                                                                    <div>
                                                                        <input type="date" className="form-control" required/> 
                                                                    </div>
                                                                </div>

                                                                <div className="col-sm-3 col-lg-3">
                                                                    <p className="text-dark mb-2"><b>Payment term</b></p>
                                                                    <div>
                                                                        <input type="text" className="form-control" placeholder="Days"/> 
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <br/>

                                                            <table className="table mt-3 table-striped table-responsive table-responsive-large">
                                                                <thead>
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Description</th>
                                                                        <th>Qty</th>
                                                                        <th>Price</th>
                                                                        <th>Total</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                {this.state.rows.map((item, idx) => (
                                                                    <tr key={idx}>
                                                                    <td>{idx}</td>
                                                                    <td>
                                                                        <input type="text" value={this.state.rows[idx].description} onChange={this.handleChange(idx)} className="form-control" placeholder="Description"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="number" value={this.state.rows[idx].quantity} onChange={this.handleChange(idx)} className="form-control" placeholder="Enter quantity"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="number" value={this.state.rows[idx].price} onChange={this.handleChange(idx)} className="form-control" placeholder="Unit price"/>
                                                                    </td>
                                                                    <td>
                                                                        {this.state.rows[idx].quantity * this.state.rows[idx].price}
                                                                    </td>
                                                                    <td>
                                                                        <button className="btn btn-outline-danger mdi mdi-close btn-sm" onClick={this.handleRemoveSpecificRow(idx)}></button>
                                                                    </td>
                                                                    </tr>
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                                <button onClick={this.handleAddRow} className="btn-sm btn-secondary">Add Row</button>
                                                            <div className="row justify-content-end">
                                                                <div className="col-lg-5 col-xl-4 col-xl-3 ml-sm-auto">
                                                                    <ul className="list-unstyled mt-4">
                                                                        <li className="mid pb-3 text-dark"> Subtotal
                                                                             <span className="d-inline-block float-right text-default">$7.897,00</span>
                                                                        </li>
                                                                        <li className="mid pb-3 text-dark">Vat(10%)
                                                                            <span className="d-inline-block float-right text-default">$789,70</span>
                                                                        </li>
                                                                        <li className="pb-3 text-dark"><b>Total</b>
                                                                            <span className="d-inline-block float-right"><b>$8.686,70</b></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                  
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-primary" onClick={this.saveCustomer}>Save invoice</button>
                                                    <button type="button" class="btn btn-danger" onClick={this.closeInvoiceModal}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                        }

                                        <div className="row-between">

                                            <div>
                                                <SizePerPageDropdownStandalone {...paginationProps} />
                                            </div>

                                            <div>
                                                <button type="button" onClick={this.openInvoiceModal} className="btn btn-success">Create new invoice</button>
                                            </div>

                                            <div>
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
                                        <div className="row-between">
                                            <div className="col-sm-8">
                                            </div>
                                            <div>
                                                <div>
                                                    <PaginationListStandalone {...paginationProps} />
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
                                    <h2>Invoices</h2>
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

