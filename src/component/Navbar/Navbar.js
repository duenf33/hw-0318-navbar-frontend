import React, { useState } from "react";
// import { NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "react-router-dom";
import {
	Nav,
	NavLink,
	Bars,
	Bs,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<Nav>
				<NavLink to="/">
					<h1>Logo</h1>
				</NavLink>
				<div onClick={handleClick}>
					{/* <i className={click ? Bars : null} style={{color: "white" }}/> */}
					<Bars className={(click) =>  Bs} />
					{console.log("Clicking works")}
				</div>
				<NavMenu>
					<NavLink to="/about">
						About
					</NavLink>
					<NavLink to="/services">
						Services
					</NavLink>
					<NavLink to="/contact-us">
						Contact Us
					</NavLink>
					<NavLink to="/sign-up">
						Sign Up
					</NavLink>
					<NavBtnLink to="/sign-in">Sign In</NavBtnLink>
				</NavMenu>
			</Nav>
		</>
	);
}

export default Navbar;
