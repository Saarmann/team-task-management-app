import React from 'react';

export default class TaskContainer extends React.Component {

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
                    </div>
                </div>
            </div>

        );
    }
}