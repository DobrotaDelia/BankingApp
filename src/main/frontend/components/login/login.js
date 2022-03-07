import React from "react";
import "./login.css";


class Login extends React.Component {

	constructor(props) {
		super(props);
	}


	//	loadFromServer() {
	//		fetch("http://localhost:8080/banking-app/api/users")
	//			.then(res => res.json())
	//			.then(
	//				(data) => {
	//					this.setState({ employees: data });
	//
	//				});
	//	}
	//
	//	componentDidMount() {
	//	}
	//	

	render() {
		return (

			<><a href="https://front.codes/" class="logo" target="_blank">

			</a><div class="section">
					<div class="container">
						<div class="row full-height justify-content-center">
							<div class="col-12 text-center align-self-center py-5">
								<div class="section pb-5 pt-5 pt-sm-2 text-center">
									<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
									<input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
									<label for="reg-log"></label>
									<div class="card-3d-wrap mx-auto">
										<div class="card-3d-wrapper">
											<div class="card-front">
												<div class="center-wrap">
													<div class="section text-center">
														<h4 class="mb-4 pb-3">Log In</h4>
														<div class="form-group">
															<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"></input>
														</div>
														<div class="form-group mt-2">
															<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"></input>
														</div>
														<a href="#" class="btn mt-4">submit</a>
														<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
													</div>
												</div>
											</div>
											<div class="card-back">
												<div class="center-wrap">
													<div class="section text-center">
														<h4 class="mb-4 pb-3">Sign Up</h4>
														<div class="form-group">
															<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"></input>
														</div>
														<div class="form-group mt-2">
															<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"></input>
														</div>
														<div class="form-group mt-2">
															<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"></input>
														</div>
														<a href="http://localhost:8080/card" class="btn mt-4">submit</a>
														
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div></>

		);
	}

}

export default Login;