import React from 'react';

export default class UserInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

          <div className="content-wrapper">
          <div className="content">
              <div className="row">
                  <div className="col-12">
                      <div className="card card-default">

                          <div className="card-header card-header-border-bottom d-flex justify-content-between" id="recent-orders">
    
                            <h2>Tasks</h2>
                          </div>

                          <div className="card-body">
                           
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="media-image mr-3 rounded-circle">
                                                    <a href="profile.html"><img className="rounded-circle w-45" src="assets/img/user/u1.jpg" alt="customer image"/></a>
                                                </div>
                                                <div className="media-body align-self-center">
                                                    <a href="profile.html"><h6 className="mt-0 text-dark font-weight-medium">Selena Wagner</h6></a>
                                                <small>@selena.oi</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2 Orders</td>
                                        <td className="text-dark d-none d-md-block">$150</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="media">
                                            <div className="media-image mr-3 rounded-circle">
                                                <a href="profile.html"><img className="rounded-circle w-45" src="assets/img/user/u2.jpg" alt="customer image"/></a>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <a href="profile.html"><h6 className="mt-0 text-dark font-weight-medium">Walter Reuter</h6></a>
                                            <small>@walter.me</small>
                                            </div>
                                        </div>
                                        </td>
                                        <td>5 Orders</td>
                                        <td className="text-dark d-none d-md-block">$200</td>
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