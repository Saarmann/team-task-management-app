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
													<p>CEO</p>

												</div>
											</div>

											<hr className="w-100"/>
											<div className="contact-info pt-4">
												<h5 className="text-dark mb-1">Contact Information</h5>
												<p className="text-dark font-weight-medium pt-4 mb-2">Email address</p>
												<p>Albrecht.straub@gmail.com</p>
												<p className="text-dark font-weight-medium pt-4 mb-2">Phone Number</p>
												<p>+99 9539 2641 31</p>
											</div>
										</div>
									</div>
									<div className="col-lg-8 col-xl-9">
										<div className="profile-content-right py-5">
											<ul className="nav nav-tabs px-3 px-xl-5 nav-style-border" id="myTab" role="tablist">
												<li className="nav-item">
													<a className="nav-link active" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
												</li>
											</ul>
											<div className="tab-content px-3 px-xl-5" id="myTabContent">

												<div className="tab-pane fade show active" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                          <div className="mt-5">
                            <form>
                              <div className="form-group row mb-6">
                                <label for="coverImage" className="col-sm-4 col-lg-2 col-form-label">User Image</label>
                                <div className="col-sm-8 col-lg-10">
                                  <div className="custom-file mb-1">
                                    <input type="file" className="custom-file-input" id="coverImage" required/>
                                    <label className="custom-file-label" for="coverImage">Choose file...</label>
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label for="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label for="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" />
                                  </div>
                                </div>
                              </div>

                              <div className="row mb-2">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="row mb-2">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label for="firstName">Old password</label>
                                    <input type="text" className="form-control" id="firstName" />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label for="lastName">New password</label>
                                    <input type="text" className="form-control" id="lastName" />
                                  </div>
                                </div>
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