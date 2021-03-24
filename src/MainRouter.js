import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Services from "./component/pages/Services";
import ContactUs from "./component/pages/ContactUs";
import SignUp from "./component/pages/SignUp";
import SignIn from "./component/pages/SignIn";
import Navbar from "./component/Navbar/Navbar";

const MainRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/services" component={Services} />
				<Route path="/contact-us" component={ContactUs} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/about" component={About} />
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	);
};

export default MainRouter;
