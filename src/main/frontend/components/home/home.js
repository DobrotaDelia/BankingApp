import React from "react";
import "./home.css";
import NotificationUtils from "../utils/notificationUtils.js";
import FetchUtils from "../utils/fetchUtils.js";

class Home extends React.Component {

		constructor(props) {
		super(props);
		this.state = {
			employees: [],
			mystyle: {
				color: "white",
				backgroundColor: "DodgerBlue",
				padding: "10px",
				fontFamily: "Arial"
			}
		};
	}

	loadFromServer() {
		fetchUtils("http://localhost:8080/banking-app/api/users")
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
				<h1 className="text-center"> Employees List</h1>
				<table>
					<thead>
						<tr>


							<td> Employe First Name</td>
							<td> Employe Last Name</td>
							<td> Employe Email</td>
						</tr>

					</thead>
					<tbody>
						{
							this.state.employees.map(
								employe =>
									<tr key={employe.username}>
										<td> {employe.firstName}</td>
										<td> {employe.lastName}</td>
										<td> {employe.email}</td>
									</tr>
							)
						}

					</tbody>
				</table>

			</div>

		)
	}
}
export default Home;
