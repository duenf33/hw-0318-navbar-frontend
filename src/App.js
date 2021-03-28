import React, { Component } from "react";
import MainRouter from "./MainRouter";
// import { ToastContainer, toast } from "react-toastify";
// import jwtDecode from 'jwt-decode'

// import "react-toastify/dist/ReactToastify.css"

export class App extends Component {
	state = {
		user: null,
	}

	handleUserLogin = (user) => {
		console.log(user)
		this.setState({
			user: {
				email: user.email,
			}
		})
	}

	render() {
		return (
			<>
				<MainRouter />
			</>
		);
	}
}

export default App;
