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





class App extends React.Component {



	constructor(props) {
		super(props);
	}



	componentDidMount() {
	}



	render() {
		return (
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
				<Footer />
			</Router>



		)
	}
}
export default App;
ReactDOM.render(
	<App />,
	document.getElementById('react')
)