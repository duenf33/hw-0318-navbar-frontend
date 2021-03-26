import React, { Component } from "react";
import axios from "axios";

import "./SignUp.css";

export class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			isError: false,
			isErrorObj: {},
		};
	}
	handleSignup = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOnPasswordChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOnSubmit = async (event) => {
		event.preventDefault();
	
		let {
			firstName,
			lastName,
			email,
			password,
			isError,
			// confirmPassword,
		} = this.state;

		if (isError) {
			console.log("its broken, line 46")
		}

		try {
			let result = await axios.post("http://localhost:3001/sign-up", {
				firstName,
				lastName,
				email,
				password,
			});
console.log(result)
			console.log("on submit works");
			this.setState({
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		} = this.state;
		return (
			<div className="form-body">
				<main className="form-signin">
					<form onSubmit={this.handleOnSubmit}>
						<h3 className="h3 mb-3 fw-normal">Please Register and...</h3>
						<p className="h6 mb-3 fw-normal">
							Access to the most powerful tool in the entire design and web
							industry.
						</p>
						<label htmlFor="inputFirstName" className="visually-hidden">
							First Name
						</label>
						<input
							className="form-control"
							type="text"
							name="firstName"
							placeholder="First Name"
							id="inputFirstName"
							value={firstName}
							required
							onChange={this.handleSignup}
						/>
						<label htmlFor="inputLastName" className="visually-hidden">
							Last Name
						</label>
						<input
							className="form-control"
							type="text"
							name="lastName"
							placeholder="Last Name"
							id="inputLastName"
							value={lastName}
							required
							onChange={this.handleSignup}
						/>
						<label htmlFor="inputEmail" className="visually-hidden">
							Email address
						</label>
						<input
							className="form-control"
							type="email"
							name="email"
							placeholder="E-mail Address"
							id="inputEmail"
							value={email}
							required
							onChange={this.handleSignup}
						/>
						<label htmlFor="inputPassword" className="visually-hidden">
							Password
						</label>
						<input
							className="form-control"
							// type="password"
							type="text"
							name="password"
							placeholder="Password"
							id="inputPassword"
							value={password}
							required
							onChange={this.handleOnPasswordChange}
						/>
						<label htmlFor="inputConfirmPassword" className="visually-hidden">
							Confirm Password
						</label>
						<input
							className="form-control"
							// type="password"
							type="text"
							name="confirmPassword"
							placeholder="Confirm Password"
							id="inputConfirmPassword"
							value={confirmPassword}
							required
							onChange={this.handleOnPasswordChange}
						/>
						<button className="w-100 btn btn-lg btn-primary" type="submit">
							Register
						</button>
					</form>
				</main>
			</div>
		);
	}
}

export default SignUp;
