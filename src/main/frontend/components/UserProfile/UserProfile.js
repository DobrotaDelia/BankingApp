import React from "react";
//import "./UserProfile.css";
//
class UserProfile extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
			<div class="header">
		<div class="menu-icon-wrapper">
			<div class="dots-wrapper">
				<div class="light-dot"></div>
				<div class="dark-dot"></div>
			</div>
			<div class="dots-wrapper">
				<div class="dark-dot"></div>
				<div class="light-dot"></div>
			</div>
		</div>
		<h1>My wallets</h1>
		<div class="calender-icon-wrapper">
			<svg width="24" height="24" fillRule="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z" fillRule="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z" fillRule="currentColor"/></svg>
		</div>
	</div>

	<div class="balance-wrapper">
		<h3>TOTAL BALANCE</h3>
		<h1>65,000.00 <span>USD</span></h1>
	</div>

	<div class="hr"></div>

	<div class="activity-wrapper">
		<h3>Your activitiy</h3>
		<div class="expense-btn">
			<h4>Expense</h4>
			<svg width="24" height="24" fillRule="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.343 7.757L4.93 9.172 12 16.242l7.071-7.07-1.414-1.415L12 13.414 6.343 7.757z" fillRule="currentColor"/></svg>
		</div>
	</div>

	<div class="graph-wrapper">
		<img src="/img/graph.png" alt="Graph" class="graph"> </img>
		<div class="months-wrapper">
			<h3>OCT</h3>
			<h3 id="active-month">NOV</h3>
			<h3>DEC</h3>
			<h3>JAN</h3>
		</div>
	</div>

	<div class="cards-wrapper">
		<div class="card">
			<div class="top">
				<img src="/img/visa_white.png" alt="VISA Icon"> </img>
				<span>09/12</span>
			</div>
			<div class="bottom">
				<h3>Credit Card</h3>
				<span>●●●●●●4354</span>
			</div>
		</div>

		<div class="card card-two">
			<div class="top">
				<img src="/img/visa_white.png" alt="VISA Icon"> </img>
				<span>09/12</span>
			</div>
			<div class="bottom">
				<h3>Credit Card</h3>
				<span>●●●●●●4354</span>
			</div>
		</div>

		<div class="card card-two">
			<div class="top">
				<img src="/img/visa_white.png" alt="VISA Icon"> </img>
				<span>09/12</span>
			</div>
			<div class="bottom">
				<h3>Credit Card</h3>
				<span>●●●●●●4354</span>
			</div>
		</div>
	</div>
			</div >
			

		);
	}
}

export default UserProfile;
