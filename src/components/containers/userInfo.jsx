import React from 'react';

export default class UserInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

      <div className="content-wrapper">
        <div className="content">							
        <div className="bg-white border rounded">
								<div className="row no-gutters">
									<div className="col-lg-4 col-xl-3">
										<div className="profile-content-left pt-5 pb-3 px-3 px-xl-5">
											<div className="card text-center widget-profile px-0 border-0">
												<div className="card-img mx-auto rounded-circle">
													<img src="assets/img/user/u6.jpg" alt="user image"/>
												</div>
												<div className="card-body">
													<h4 className="py-2 text-dark">Albrecht Straub</h4>
													<p>Albrecht.straub@gmail.com</p>
													<a className="btn btn-primary btn-pill btn-lg my-4">Follow</a>
												</div>
											</div>
											<div className="d-flex justify-content-between ">
												<div className="text-center pb-4">
													<h6 className="text-dark pb-2">1503</h6>
													<p>Friends</p>
												</div>
												<div className="text-center pb-4">
													<h6 className="text-dark pb-2">2905</h6>
													<p>Followers</p>
												</div>
												<div className="text-center pb-4">
													<h6 className="text-dark pb-2">1200</h6>
													<p>Following</p>
												</div>
											</div>
											<hr className="w-100"/>
											<div className="contact-info pt-4">
												<h5 className="text-dark mb-1">Contact Information</h5>
												<p className="text-dark font-weight-medium pt-4 mb-2">Email address</p>
												<p>Albrecht.straub@gmail.com</p>
												<p className="text-dark font-weight-medium pt-4 mb-2">Phone Number</p>
												<p>+99 9539 2641 31</p>
												<p className="text-dark font-weight-medium pt-4 mb-2">Birthday</p>
												<p>Nov 15, 1990</p>
												<p className="text-dark font-weight-medium pt-4 mb-2">Social Profile</p>
												<p className="pb-3 social-button">
													<a className="mb-1 btn btn-outline btn-twitter rounded-circle">
														<i className="mdi mdi-twitter"></i>
													</a>
													<a className="mb-1 btn btn-outline btn-linkedin rounded-circle">
														<i className="mdi mdi-linkedin"></i>
													</a>
													<a className="mb-1 btn btn-outline btn-facebook rounded-circle">
														<i className="mdi mdi-facebook"></i>
													</a>
													<a className="mb-1 btn btn-outline btn-skype rounded-circle">
														<i className="mdi mdi-skype"></i>
													</a>
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-8 col-xl-9">
										<div className="profile-content-right py-5">
											<ul className="nav nav-tabs px-3 px-xl-5 nav-style-border" id="myTab" role="tablist">
												<li className="nav-item">
													<a className="nav-link" id="timeline-tab" data-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="true">Timeline</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
												</li>
												<li className="nav-item">
													<a className="nav-link active" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
												</li>
											</ul>
											<div className="tab-content px-3 px-xl-5" id="myTabContent">
												<div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
													<div className="media mt-5 profile-timeline-media">
														<div className="align-self-start iconbox-45 overflow-hidden mr-3">
															<img  src="assets/img/user/u3.jpg" alt="Generic placeholder image"/>
														</div>
														<div className="media-body">
															<h6 className="mt-0 text-dark">Larissa Gebhardt</h6>
															<span>Designer</span>
															<span className="float-right">5 mins ago</span>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
																magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
															<div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
																<img src="assets/img/products/pa1.jpg" alt="Product"/>
															</div>
															<div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
																<img src="assets/img/products/pa2.jpg" alt="Product"/>
															</div>
															<div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
																<img src="assets/img/products/pa3.jpg" alt="Product"/>
															</div>
														</div>
													</div>
													<div className="media mt-5 profile-timeline-media">
														<div className="align-self-start iconbox-45 overflow-hidden mr-3">
															<img  src="assets/img/user/u4.jpg" alt="Generic placeholder image"/>
														</div>
														<div className="media-body">
															<h6 className="mt-0 text-dark">Walter Reuter</h6>
															<span>Designer</span>
															<span className="float-right">2 hrs ago</span>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
																magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

														</div>
													</div>
													<div className="media mt-5 profile-timeline-media">
														<div className="align-self-start iconbox-45 overflow-hidden mr-3">
															<img  src="assets/img/user/u7.jpg" alt="Generic placeholder image"/>
														</div>
														<div className="media-body">
															<h6 className="mt-0 text-dark">Albrecht Straub</h6>
															<span>Designer</span>
															<span className="float-right">5 days ago</span>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
																magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
															<div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
																<img src="assets/img/products/pa4.jpg" alt="Product"/>
															</div>
														</div>
													</div>
													<div className="media mt-5 profile-timeline-media">
														<div className="align-self-start iconbox-45 overflow-hidden mr-3">
															<img  src="assets/img/user/u8.jpg" alt="Generic placeholder image"/>
														</div>
														<div className="media-body">
															<h6 className="mt-0 text-dark">Selena Wagner</h6>
															<span>Designer</span>
															<span className="float-right">Mar 05, 2018</span>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
																magna aliqua. ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
															<div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
																<img src="assets/img/products/pa5.jpg" alt="Product"/>
															</div>
															<div className="d-inline-block rounded overflow-hidden mt-4 mr-0 mr-lg-4">
																<img src="assets/img/products/pa6.jpg" alt="Product"/>
															</div>
														</div>
													</div>
												</div>
												<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-xl-4">
                                <div className="media widget-media p-4 bg-white border">
                                  <div className="icon rounded-circle mr-4 bg-primary">
                                    <i className="mdi mdi-account-outline text-white "></i>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <h4 className="text-primary mb-2">5300</h4>
                                    <p>New Users</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4">
                                <div className="media widget-media p-4 bg-white border">
                                  <div className="icon rounded-circle bg-warning mr-4">
                                    <i className="mdi mdi-cart-outline text-white "></i>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <h4 className="text-primary mb-2">1953</h4>
                                    <p>Order Placed</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4">
                                <div className="media widget-media p-4 bg-white border">
                                  <div className="icon rounded-circle mr-4 bg-danger">
                                    <i className="mdi mdi-cart-outline text-white "></i>
                                  </div>
                                  <div className="media-body align-self-center">
                                    <h4 className="text-primary mb-2">1450</h4>
                                    <p>Total Sales</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-6"> 
                        {/* <!-- Notification Table --> */}
                        <div className="card card-default" data-scroll-height="550">
                          <div className="card-header justify-content-between ">
                            <h2>Latest Notifications</h2>
                            <div>
                                <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                                <div className="dropdown show d-inline-block widget-dropdown">
                                    <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-notification">
                                      <li className="dropdown-item"><a  href="#">Action</a></li>
                                      <li className="dropdown-item"><a  href="#">Another action</a></li>
                                      <li className="dropdown-item"><a  href="#">Something else here</a></li>
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
                              <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                                <i className="mdi mdi-email-outline font-size-20"></i>
                              </div>
                              <div className="media-body pr-3">
                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Enquiry</a>
                                <p >Phileine has placed an new order</p>
                              </div>
                              <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 9 AM</span>
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
                              <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                <i className="mdi mdi-cart-outline font-size-20"></i>
                              </div>
                              <div className="media-body pr-3">
                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New order</a>
                                <p >Ryan has placed an new order</p>
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
                              <div className="col-xl-6"> 
                  {/* <!-- To Do list --> */}
                  <div className="card card-default todo-table" id="todo" data-scroll-height="550">
                    <div className="card-header justify-content-between">
                      <h2>To Do List</h2>
                      <a className="btn btn-primary btn-pill" id="add-task" href="#" role="button"> Add task </a>
                    </div>
                    <div className="card-body slim-scroll">
                      <div className="todo-single-item d-none" id="todo-input">
                        <form >
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Todo" autofocus/>
                          </div>
                        </form>
                      </div>
                      <div className="todo-list" id="todo-list">
                        <div className="todo-single-item d-flex flex-row justify-content-between finished">
                          <i className="mdi"></i>
                          <span >Finish Dashboard UI Kit update</span>
                          <span className="badge badge-primary">Finished</span>
                        </div>
                        <div className="todo-single-item d-flex flex-row justify-content-between current">
                          <i className="mdi"></i>
                          <span >Create new prototype for the landing page</span>
                          <span className="badge badge-primary">Today</span>
                        </div>
                        <div className="todo-single-item d-flex flex-row justify-content-between ">
                          <i className="mdi"></i>
                          <span > Add new Google Analytics code to all main files </span>
                          <span className="badge badge-danger">Yesterday</span>
                        </div>

                        <div className="todo-single-item d-flex flex-row justify-content-between ">
                          <i className="mdi"></i>
                          <span >Update parallax scroll on team page</span>
                          <span className="badge badge-success">Dec 15, 2018</span>
                        </div>

                        <div className="todo-single-item d-flex flex-row justify-content-between ">
                          <i className="mdi"></i>
                          <span >Update parallax scroll on team page</span>
                          <span className="badge badge-success">Dec 15, 2018</span>
                        </div>
                        <div className="todo-single-item d-flex flex-row justify-content-between ">
                          <i className="mdi"></i>
                          <span >Create online customer list book</span>
                          <span className="badge badge-success">Dec 15, 2018</span>
                        </div>
                        <div className="todo-single-item d-flex flex-row justify-content-between ">
                          <i className="mdi"></i>
                          <span >Lorem ipsum dolor sit amet, consectetur.</span>
                          <span className="badge badge-success">Dec 15, 2018</span>
                        </div>

                        <div className="todo-single-item d-flex flex-row justify-content-between mb-1">
                          <i className="mdi"></i>
                          <span >Update parallax scroll on team page</span>
                          <span className="badge badge-success">Dec 15, 2018</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3"></div>
                  </div>
</div>
                              <div className="col-12">
                                {/* <!-- Recent Order Table --> */}
                                <div className="card card-table-border-none" id="recent-orders">
                                  <div className="card-header justify-content-between">
                                    <h2>Recent Orders</h2>
                                    <div className="date-range-report ">
                                      <span></span>
                                    </div>
                                  </div>
                                  <div className="card-body pt-0 pb-5">
                                    <table className="table card-table table-responsive table-responsive-large" style="width:100%">
                                      <thead>
                                        <tr>
                                          <th>Order ID</th>
                                          <th>Product Name</th>
                                          <th className="d-none d-xl-table-cell">Units</th>
                                          <th className="d-none d-xl-table-cell">Order Date</th>
                                          <th className="d-none d-xl-table-cell">Order Cost</th>
                                          <th>Status</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>24541</td>
                                          <td>
                                            <a className="text-dark" href=""> Coach Swagger</a>
                                          </td>
                                          <td className="d-none d-xl-table-cell">1 Unit</td>
                                          <td className="d-none d-xl-table-cell">Oct 20, 2018</td>
                                          <td className="d-none d-xl-table-cell">$230</td>
                                          <td>
                                            <span className="badge badge-success">Completed</span>
                                          </td>
                                          <td className="text-right">
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                              <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
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
                                          <td>24541</td>
                                          <td>
                                            <a className="text-dark" href=""> Toddler Shoes, Gucci Watch</a>
                                          </td>
                                          <td className="d-none d-xl-table-cell">2 Units</td>
                                          <td className="d-none d-xl-table-cell">Nov 15, 2018</td>
                                          <td className="d-none d-xl-table-cell">$550</td>
                                          <td>
                                            <span className="badge badge-warning">Delayed</span>
                                          </td>
                                          <td className="text-right">
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                              <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order2"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order2">
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
                                          <td>24541</td>
                                          <td>
                                            <a className="text-dark" href=""> Hat Black Suits</a>
                                          </td>
                                          <td className="d-none d-xl-table-cell">1 Unit</td>
                                          <td className="d-none d-xl-table-cell">Nov 18, 2018</td>
                                          <td className="d-none d-xl-table-cell">$325</td>
                                          <td>
                                            <span className="badge badge-warning">On Hold</span>
                                          </td>
                                          <td className="text-right">
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                              <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order3"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order3">
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
                                          <td>24541</td>
                                          <td>
                                            <a className="text-dark" href=""> Backpack Gents, Swimming Cap Slin</a>
                                          </td>
                                          <td className="d-none d-xl-table-cell">5 Units</td>
                                          <td className="d-none d-xl-table-cell">Dec 13, 2018</td>
                                          <td className="d-none d-xl-table-cell">$200</td>
                                          <td>
                                            <span className="badge badge-success">Completed</span>
                                          </td>
                                          <td className="text-right">
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                              <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order4"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order4">
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
                                          <td>24541</td>
                                          <td>
                                            <a className="text-dark" href=""> Speed 500 Ignite</a>
                                          </td>
                                          <td className="d-none d-xl-table-cell">1 Unit</td>
                                          <td className="d-none d-xl-table-cell">Dec 23, 2018</td>
                                          <td className="d-none d-xl-table-cell">$150</td>
                                          <td>
                                            <span className="badge badge-danger">Cancelled</span>
                                          </td>
                                          <td className="text-right">
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                              <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order5"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order5">
                                                <li className="dropdown-item">
                                                  <a >View</a>
                                                </li>
                                                <li className="dropdown-item">
                                                  <a >Remove</a>
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
												<div className="tab-pane fade show active" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                          <div className="mt-5">
                            <form>
                              <div className="form-group row mb-6">
                                <label for="coverImage" className="col-sm-4 col-lg-2 col-form-label">User Image</label>
                                <div className="col-sm-8 col-lg-10">
                                  <div className="custom-file mb-1">
                                    <input type="file" className="custom-file-input" id="coverImage" required/>
                                    <label className="custom-file-label" for="coverImage">Choose file...</label>
                                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label for="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" value="Albrecht"/>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label for="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" value="Straub"/>
                                  </div>
                                </div>
                              </div>

                              <div className="form-group mb-4">
                                <label for="userName">User name</label>
                                <input type="text" className="form-control" id="userName" value="Straub"/>
                                <span className="d-block mt-1">Accusamus nobis at omnis consequuntur culpa tempore saepe animi.</span>
                              </div>

                              <div className="form-group mb-4">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" value="albrecht.straub@gmail.com"/>
                              </div>

                              <div className="form-group mb-4">
                                <label for="oldPassword">Old password</label>
                                <input type="password" className="form-control" id="oldPassword"/>
                              </div>

                              <div className="form-group mb-4">
                                <label for="newPassword">New password</label>
                                <input type="password" className="form-control" id="newPassword"/>
                              </div>

                              <div className="form-group mb-4">
                                <label for="conPassword">Confirm password</label>
                                <input type="password" className="form-control" id="conPassword"/>
                              </div>

                              <div className="d-flex justify-content-end mt-5">
                                <button type="submit" className="btn btn-primary mb-2 btn-pill">Update Profile</button>
                              </div>

                            </form>
                          </div>
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