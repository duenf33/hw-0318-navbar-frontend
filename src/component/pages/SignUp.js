import React, { Component } from "react";

export class SignUp extends Component {
	render() {
		return (
			<div className="form-body">
				<main className="form-signin">
					<form>
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
							name="name"
							placeholder="First Name"
							// value={firstName}
							required
						/>
						<label htmlFor="inputLastName" className="visually-hidden">
							Last Name
						</label>
						<input
							className="form-control"
							type="text"
							name="name"
							placeholder="Last Name"
							// value={lastName}
							required
						/>
						<label htmlFor="inputEmail" className="visually-hidden">
							Email address
						</label>
						<input
							className="form-control"
							type="email"
							name="email"
							placeholder="E-mail Address"
							// value={email}
							required
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
							// value={password}
							required
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
							// value={confirmPassword}
							required
						/>
						<div className="form-button">
							<button className="w-100 btn btn-lg btn-primary" type="submit">
								Register
							</button>
						</div>
					</form>
				</main>
			</div>
		);
	}
}

export default SignUp;
