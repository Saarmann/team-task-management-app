import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {customerData} from '.data/customerData.js';

const columns = [{
    dataField: 'id',
    text: 'Customer ID'

}, {
    dataField: 'client_name',
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
    dataField: 'client_email',
    text: 'Email'
   
}, {
    dataField: 'phone',
    text: 'Contact phone'
   
}, {
    dataField: 'payment_term',
    text: 'payment term'
   
},{  
    dataField: 'action',    
    text:'',
    // formatter: formatProductDetailsButtonCell
}];

export default class CustomerTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render (){
        return (
            
            <div className="content-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-xl-12 col-md-12">

                        {/* <!-- Recent Order Table --> */}
                        <div className="card card-table-border-none" id="recent-orders">
                            <div className="card-header justify-content-between">
                                <h2>Invoices</h2>
                                <div className="date-range-report ">
                                    <span></span>
                                </div>
                            </div>
                            <div className="card-body pt-0 pb-5">

                            <BootstrapTable
                             keyfield='id' data={customerData} columns={columns}
                             sriped
                             hover
                             condensed
                             />
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
}