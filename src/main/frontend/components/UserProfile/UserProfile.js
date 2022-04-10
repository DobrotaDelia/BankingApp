import React from "react";
import "./UserProfile.css";
import FetchUtils from "../utils/fetchUtils.js";
import UrlConstants from "../utils/urlConstants.js";
import NotificationUtils from "../utils/notificationUtils.js";


class UserProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			employees: []
		};
	}
	loadFromServer() {
		FetchUtils.get(UrlConstants.API_GET_ALL_USERS_URL)
			.then(res => res.json())
			.then(
				(data) => {
					this.setState({ employees: data.content });
					NotificationUtils.displayNotification(data.status);

				});
	}

	componentDidMount() {
		this.loadFromServer();
	}

	render() {
		return (
			<div>

				<section class="u-align-center u-clearfix u-section-1" id="sec-21d9">
					<div class="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
						<div class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
							<div class="u-repeater u-repeater-1">
								<div class="u-container-style u-list-item u-repeater-item">
									<div class="u-container-layout u-similar-container u-container-layout-1">

										<div class="u-container-style u-group u-group-1">
											<div class="u-container-layout u-valign-top u-container-layout-2">
												<h5 class="u-text u-text-1">Credits</h5>
											</div>
											<div class="u-container-layout u-valign-top u-container-layout-2">
												<h5 class="u-text u-text-1">Economics</h5>
											</div>
											<div class="u-container-layout u-valign-top u-container-layout-2">
												<h5 class="u-text u-text-1">Transactions</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="u-container-style u-list-item u-repeater-item">
									<div class="u-container-layout u-similar-container u-container-layout-3">

										<div class="u-container-style u-group u-video-cover u-group-2">
											<div class="u-container-layout u-valign-top u-container-layout-4">
												<h5 class="u-text u-text-default u-text-3">Welcome LastName+FirstName</h5>
												<img class="user" src="data:image/png;base64,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" height={100} width={100} />
											</div>
										</div>
									</div>
								</div>
								<div class="u-container-style u-list-item u-repeater-item">
									<div class="u-container-layout u-similar-container u-container-layout-5">

										<div class="u-container-style u-group u-video-cover u-group-3">
											<div class="u-container-layout u-valign-top u-container-layout-6">
												<h5 class="u-text u-text-default u-text-5">Statistics</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="u-container-style u-list-item u-repeater-item">
									<div class="u-container-layout u-similar-container u-container-layout-7">

										<div class="u-container-style u-group u-video-cover u-group-4">
											<div class="u-container-layout u-valign-top u-container-layout-8">
												<h5 class="u-text u-text-default u-text-7">Current/ Main Account: 50 lei</h5>
												<p class="u-text u-text-default u-text-8">New transfer </p>
												<p class="u-text u-text-default u-text-8">Your cards  </p>
												<p class="u-text u-text-default u-text-8">Change in diff currency   </p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>




			</div>
		);
	}
}

export default UserProfile;
