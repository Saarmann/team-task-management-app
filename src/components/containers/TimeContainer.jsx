
import React from 'react';

export default class TimeContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="col-lg-6">
									<div className="card card-default">
										<div className="card-header card-header-border-bottom">
											<h2>Basic Validation</h2>
										</div>
										<div className="card-body">
											<form >
												<div className="form-row">
													<div className="col-md-12 mb-3">
														<label for="validationServer01">First name</label>
														<input type="text" className="form-control" id="validationServer01" placeholder="First name" value="Md" required/>
														<div className="valid-feedback">
															Looks good!
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<label for="validationServer02">Last name</label>
														<input type="text" className="form-control" id="validationServer02" placeholder="Last name" value="Rahad" required/>
														<div className="valid-feedback">
															Looks good!
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<label for="validationServerUsername">Username</label>
														<input type="text" className="form-control" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3"
														 required/>
														<div className="invalid-feedback">
															Please choose a username.
														</div>
													</div>
												</div>
												<div className="form-row">
													<div className="col-md-6 mb-3">
														<label for="validationServer03">City</label>
														<input type="text" className="form-control" id="validationServer03" placeholder="City" required/>
														<div className="invalid-feedback">
															Please provide a valid city.
														</div>
													</div>
													<div className="col-md-3 mb-3">
														<label for="validationServer04">State</label>
														<input type="text" className="form-control" id="validationServer04" placeholder="State" required/>
														<div className="invalid-feedback">
															Please provide a valid state.
														</div>
													</div>
													<div className="col-md-3 mb-3">
														<label for="validationServer05">Zip</label>
														<input type="text" className="form-control" id="validationServer05" placeholder="Zip" required/>
														<div className="invalid-feedback">
															Please provide a valid zip.
														</div>
													</div>
												</div>
												<button className="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>

        );
    }
}