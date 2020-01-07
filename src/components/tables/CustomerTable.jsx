import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {customer} from '../../components/data/customerData.js';

const columns = [{
    dataField: 'id',
    text: 'Customer ID'

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
    text: 'payment term'
   
}, {  
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

                    <div className="col-xl-12 col-md-12">

                            <h2>Customers</h2>
                         
                            <BootstrapTable
                             keyField='id' data={customer} columns={columns}
                             sriped
                             hover
                             condensed
                             />
                             </div>
             </div>

    );
}
}