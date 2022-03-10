import React from "react";

class About extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<section class="section page-title">
					<div class="container">
						<div class="row">
							<div class="col-sm-8 m-auto">



								<p class="mb-5 text-center">Welcome! This is our official WebPage</p>
							</div>
						</div>
					</div>
				</section>



				<section class="contact-form section">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<h1 class="mb-5 text-center">Contact Us</h1>
								<h2 class="mb-5 text-center">Drop us a mail if you encounter any problem</h2>
							</div>
							<div class="col-12">
								<form action="">
									<div class="row">

										<div class="col-md-6 mb-2">
											<input class="form-control main" type="text" placeholder="Name" required />
										</div>

										<div class="col-md-6 mb-2">
											<input class="form-control main" type="email" placeholder="Your Email Address" required />
										</div>

										<div class="col-md-12 mb-2">
											<input class="form-control main" type="text" placeholder="Subject" required />
										</div>

										<div class="col-md-12 mb-2">
											<textarea class="form-control main" name="message" rows="10" placeholder="Your Message"></textarea>
										</div>

										<div class="col-12 text-right">
											<button class="btn btn-main-md">Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default About;
