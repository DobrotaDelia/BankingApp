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
			
			<nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
  <div class="container">
    <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="ti-menu"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown @@home">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home
            <span><i class="ti-angle-down"></i></span>
          </a>
         
          <ul class="dropdown-menu">
            <li><a class="dropdown-item @@home1" href="index.html">Homepage</a></li>
            <li><a class="dropdown-item" href="homepage-2.html">Homepage 2</a></li>
            <li><a class="dropdown-item @@home3" href="homepage-3.html">Homepage 3</a></li>

            <li class="dropdown dropdown-submenu dropright">
              <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

              <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                <li><a class="dropdown-item" href="index.html">Submenu 11</a></li>
                <li><a class="dropdown-item" href="index.html">Submenu 12</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown @@pages">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages
            <span><i class="ti-angle-down"></i></span>
          </a>
         
          <ul class="dropdown-menu">
            <li><a class="dropdown-item @@team" href="team.html">Team</a></li>
            <li><a class="dropdown-item @@career" href="career.html">Career</a></li>
            <li><a class="dropdown-item @@blog" href="blog.html">Blog</a></li>
            <li><a class="dropdown-item @@blogSingle" href="blog-single.html">Blog Single</a></li>
            <li><a class="dropdown-item @@privacy" href="privacy-policy.html">Privacy</a></li>
            <li><a class="dropdown-item @@faq" href="FAQ.html">FAQ</a></li>
            <li><a class="dropdown-item" href="sign-in.html">Sign In</a></li>
            <li><a class="dropdown-item" href="sign-up.html">Sign Up</a></li>
            <li><a class="dropdown-item" href="404.html">404</a></li>
            <li><a class="dropdown-item" href="comming-soon.html">Coming Soon</a></li>

            <li class="dropdown dropdown-submenu dropleft">
              <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

              <ul class="dropdown-menu" aria-labelledby="dropdown0501">
                <li><a class="dropdown-item" href="index.html">Submenu 21</a></li>
                <li><a class="dropdown-item" href="index.html">Submenu 22</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item @@about">
          <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



<section class="section page-title">
	<div class="container">
		<div class="row">
			<div class="col-sm-8 m-auto">
			
				<h1>Contact Us</h1>
				
				<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
			</div>
		</div>
	</div>
</section>


<section class="address">
	<div class="container">
		<div class="row">
			<div class="col-lg-5 align-self-center">
				<div class="block">
					<div class="address-block text-center mb-5">
						<div class="icon">
							<i class="ti-mobile"></i>
						</div>
						<div class="details">
							<h3>(00) 789 456 7890 (USA)</h3>
							<h3>(88) 016 725 0455 (UK)</h3>
						</div>
					</div>
					<div class="address-block text-center">
						<div class="icon">
							<i class="ti-map-alt"></i>
						</div>
						<div class="details">
							<h3>36. St Michael’s St, Oxford OX1, UK</h3>
							<h3>123, Pennsylvania, USA</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-7 mt-5 mt-lg-0">
				<div class="google-map">
					
					<div id="map_canvas" data-latitude="51.507351" data-longitude="-0.127758"></div>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="contact-form section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2 class="mb-5 text-center">Drop us a mail</h2>
			</div>
			<div class="col-12">
				<form action="">
					<div class="row">
						
						<div class="col-md-6 mb-2">
							<input class="form-control main" type="text" placeholder="Name" required/>
						</div>
						
						<div class="col-md-6 mb-2">
							<input class="form-control main" type="email" placeholder="Your Email Address" required/>
						</div>
					
						<div class="col-md-12 mb-2">
							<input class="form-control main" type="text" placeholder="Subject" required/>
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
