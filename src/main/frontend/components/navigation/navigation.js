import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { withTranslation } from 'react-i18next';
import "../../common.css";
import Accounts from "../accounts/accounts";
import { Redirect, Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';




const nowDate = new Date()
const DateFormatter = new Intl.DateTimeFormat(window.navigator.userLanguage || window.navigator.language)
const NumberFormater = new Intl.NumberFormat(window.navigator.userLanguage || window.navigator.language)
const money = 10000

class Navigation extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		const { t } = this.props;
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<NavLink className="nav-link" to="/login">
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/accounts">
								Accounts
							</NavLink>

						</li>
						<li>
							<DropdownButton
								alignRight
								title="About"
								id="dropdown-menu-align-right"
								

							>	<Dropdown.Item eventKey="some link"><NavLink className="nav-link" to="/about">
									contact
								</NavLink></Dropdown.Item>

								<Dropdown.Item eventKey="some link"><NavLink className="nav-link" to="/contact">
									ceva info
								</NavLink></Dropdown.Item>
								<Dropdown.Item eventKey="some link"><NavLink className="nav-link" to="/location">
									location
								</NavLink></Dropdown.Item>
							</DropdownButton>
						</li>



					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><button onClick={sayHello} type="button" className="btn btn-primary btn-small btn-nav">Log Out</button></li>
					</ul>
				</nav>
			</div >
		);
	}
}

function sayHello() {
	alert('You clicked me!');
}

export default withTranslation()(Navigation);
