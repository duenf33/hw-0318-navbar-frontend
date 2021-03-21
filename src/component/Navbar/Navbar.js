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
					<i className={click ? 'fas fa-times' : 'fa fa-bars'}/>
				</div>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/services" activeStyle>
						Services
					</NavLink>
					<NavLink to="/contact-us" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
					<NavBtnLink to="/sign-in">Sign In</NavBtnLink>
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to="/sign-in">Sign In</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
}

export default Navbar;
