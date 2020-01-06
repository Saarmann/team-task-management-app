
import React from 'react';

export default class InvoiceContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
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
                                <table className="table card-table table-responsive table-responsive-large" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Invoice Nr.</th>
                                            <th>Customer</th>
                                            <th >Invoice date</th>
                                            <th >Payment date</th>
                                            <th >Amount</th>
                                            <th>VAT</th>
                                            <th>Total</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >20201</td>
                                            <td >Company1</td>
                                            <td>1 Unit</td>
                                            <td>Oct 20, 2018</td>
                                            <td>$200</td>
                                            <td >$40</td>
                                            <td >$240</td>
                                            <td ><button type="button" class="btn btn-primary">Button</button>
                                                <button type="button" class="btn btn-primary">Button</button>
                                            </td>
                                        </tr>

                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
}
           