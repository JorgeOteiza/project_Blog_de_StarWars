
import React from "react";
import App from '../App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import Single from "./views/single";
import SingleCharacter from "./views/SingleCharacter.jsx";
import SingleVehicle from "./views/SingleVehicle.jsx";
import SinglePlanet from "./views/SinglePlanet.jsx";
import "../styles/home.css";
import "../styles/twinkling.css";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route exact path="/character/:id" component={SingleCharacter} />
						<Route path="/vehicles/:id" component={SingleVehicle} />
						<Route path="/planets/:id" component={SinglePlanet} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
