import React from "react";
import { NavLink } from "react-router-dom";
import "./accounts.css";
import { withTranslation } from 'react-i18next';
import "../../common.css";


class Accounts extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() { //aici leg partea de backend
	}

	render() {
		const { t } = this.props;
		return (
			<div className="navigation">

				<nav className="navbar navbar-dark bg-dark ">
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<NavLink className="nav-link" to="/login">
								Current Account
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/accounts">
								Savings Accounts
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">
								Credit Accounts
							</NavLink>
						</li>
					</ul>




				</nav>
			</div>
		);
	}
}



export default Accounts;
