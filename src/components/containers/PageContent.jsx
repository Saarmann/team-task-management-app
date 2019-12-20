
import React from 'react';

export default class PageContent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="content-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-xl-9 col-md-12">

                            {/* <!-- Recent Order Table --> */}
                            <div className="card card-table-border-none" id="recent-orders">
                                <div className="card-header justify-content-between">
                                    <h2>Recent Orders</h2>
                                    <div className="date-range-report ">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table className="table card-table table-responsive table-responsive-large" style={{ width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Product Name</th>
                                                <th className="d-none d-lg-table-cell">Units</th>
                                                <th className="d-none d-lg-table-cell">Order Date</th>
                                                <th className="d-none d-lg-table-cell">Order Cost</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >24541</td>
                                                <td >
                                                    <a className="text-dark" href=""> Coach Swagger</a>
                                                </td>
                                                <td className="d-none d-lg-table-cell">1 Unit</td>
                                                <td className="d-none d-lg-table-cell">Oct 20, 2018</td>
                                                <td className="d-none d-lg-table-cell">$230</td>
                                                <td >
                                                    <span className="badge badge-success">Completed</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td >24541</td>
                                                <td >
                                                    <a className="text-dark" href=""> Speed 500 Ignite</a>
                                                </td>
                                                <td className="d-none d-lg-table-cell">1 Unit</td>
                                                <td className="d-none d-lg-table-cell">Dec 23, 2018</td>
                                                <td className="d-none d-lg-table-cell">$150</td>
                                                <td >
                                                    <span className="badge badge-danger">Cancelled</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order5" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false" data-display="static"></a>
                                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order5">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-12">

                            {/* <!-- Notification Table --> */}
                            <div className="card card-default" data-scroll-height="550">
                                <div className="card-header justify-content-between ">
                                    <h2>Latest Notifications</h2>
                                    <div>
                                        <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                                        <div className="dropdown show d-inline-block widget-dropdown">
                                            <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-notification">
                                                <li className="dropdown-item"><a href="#">Action</a></li>
                                                <li className="dropdown-item"><a href="#">Another action</a></li>
                                                <li className="dropdown-item"><a href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-body slim-scroll">
                                    <div className="media pb-3 align-items-center justify-content-between">
                                        <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                            <i className="mdi mdi-cart-outline font-size-20"></i>
                                        </div>
                                        <div className="media-body pr-3 ">
                                            <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Order</a>
                                            <p >Selena has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                    </div>

                                    <div className="media py-3 align-items-center justify-content-between">
                                        <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                                            <i className="mdi mdi-calendar-blank font-size-20"></i>
                                        </div>
                                        <div className="media-body pr-3">
                                            <a className="mt-0 mb-1 font-size-15 text-dark" href="">Comapny Meetup</a>
                                            <p >Phileine has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                    </div>

                                    <div className="media py-3 align-items-center justify-content-between">
                                        <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                            <i className="mdi mdi-stack-exchange font-size-20"></i>
                                        </div>
                                        <div className="media-body pr-3">
                                            <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Support Ticket</a>
                                            <p >Emma has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                    </div>

                                    <div className="media py-3 align-items-center justify-content-between">
                                        <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                                            <i className="mdi mdi-email-outline font-size-20"></i>
                                        </div>
                                        <div className="media-body pr-3">
                                            <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Enquiry</a>
                                            <p >Phileine has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 9 AM</span>
                                    </div>

                                </div>
                                <div className="mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}