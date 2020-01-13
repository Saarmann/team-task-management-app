import React from 'react';

export default class Invoice extends React.Component{
     
    render() {
        return (
          
            <div className="content-wrapper">

                    <div className="content">	

                                <div className="invoice-wrapper rounded border bg-white py-5 px-3 px-md-4 px-lg-5">

                                    <div className="d-flex justify-content-between">
                                        <h2 className="text-dark font-weight-medium">Invoice #2365546</h2>
                                        <div className="btn-group">
                                            <button className="btn btn-sm btn-secondary">
                                                <i className="mdi mdi-content-save"></i> Save</button>
                                            <button className="btn btn-sm btn-secondary ml-2">
                                                <i className="mdi mdi-printer"></i> Print</button>
                                        </div>
                                    </div>

                                    <div className="row pt-5">
                                        <div className="col-xl-3 col-lg-4">
                                            <p className="text-dark mb-2">From</p>
                                            <address>
                                                Company Name
                                                <br/> 47 Holmes Green, Sophiebury, WP9M 3ZZ
                                                <br/> Email: example@gmail.com
                                                <br/> Phone: +91 5264 251 325
                                            </address>
                                        </div>

                                        <div className="col-xl-3 col-lg-4">
                                            <p className="text-dark mb-2">To</p>
                                            <address>
                                                Company Name
                                                <br/> 58 Jamie Ways, North Faye, Q5 5ZP
                                                <br/> Email: example@gmail.com
                                                <br/> Phone: +91 5264 521 943
                                            </address>
                                        </div>

                                        <div className="col-xl-3 col-lg-4">
                                            <p className="text-dark mb-2">Details</p>
                                            <address>
                                                Invoice ID:
                                                <span className="text-dark">#2365546</span>
                                                <br/> March 25, 2018
                                                <br/> VAT: PL6541215450
                                            </address>
                                        </div>

                                    </div>

                                    <table className="table mt-3 table-striped table-responsive table-responsive-large">
                                    
							<thead>
								<tr>
									<th>#</th>
									<th>Item</th>
									<th>Description</th>
									<th>Quantity</th>
									<th>Unit Cost</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Platinum Support</td>
									<td>1 year subcription 24/7</td>
									<td>1</td>
									<td>$3.999,00</td>
									<td>$3.999,00</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Custom Services</td>
									<td>Instalation and Customization (cost per hour)</td>
									<td>10</td>
									<td>$250,00</td>
									<td>$250,000</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Origin License</td>
									<td>Extended License</td>
									<td>1</td>
									<td>$799,00</td>
									<td>$799,00</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Hosting</td>
									<td>1 year subcription</td>
									<td>1</td>
									<td>$599,00</td>
									<td>$599,00</td>
								</tr>
							</tbody>
						
                                    </table>

                                    <div className="row justify-content-end">
                                        <div className="col-lg-5 col-xl-4 col-xl-3 ml-sm-auto">
                                            <ul className="list-unstyled mt-4">
                                                <li className="mid pb-3 text-dark"> Subtotal
                                                    <span className="d-inline-block float-right text-default">$7.897,00</span>
                                                </li>
                                                <li className="mid pb-3 text-dark">Vat(10%)
                                                    <span className="d-inline-block float-right text-default">$789,70</span>
                                                </li>
                                                <li className="pb-3 text-dark">Total
                                                    <span className="d-inline-block float-right">$8.686,70</span>
                                                </li>
                                            </ul>
                                            <button className="btn btn-block btn-primary"> Proceed to Payment</button>
                                        </div>
                                    </div>

                                </div>

                    </div>

            </div>
                  
        );
    }


}