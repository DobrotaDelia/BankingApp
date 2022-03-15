const React = require('react');
const ReactDOM = require('react-dom');
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Blog from "./components/blog/blog";
import Login from "./components/login/login";
import Card from "./components/card/card";
import { ReactNotifications } from 'react-notifications-component';
import Googlemaps from "./components/googleMaps/googleMaps";
import "./components/utils/i18n";





class App extends React.Component {



	constructor(props) {
		super(props);
	}



	componentDidMount() {
	}



	render() {
		return (
			<Router>
				<ReactNotifications />
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/login" element={<Login />} />
					<Route path="/card" element={<Card />} />
					<Route path="/location" element={<Googlemaps />} />


				</Routes>
				<Footer />
			</Router>



		)
	}
}
export default App;
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('react')
)