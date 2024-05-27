import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Single from "./views/single.js";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import CharacterList from "./views/CharacterList.jsx";
import VehicleList from "./views/VehicleList.jsx";
import PlanetList from "./views/PlanetList.jsx";
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
						<Route path="/:resource/:id" element={<Single />} />
						<Route path="/characters" element={<CharacterList />} />
						<Route path="/vehicles" element={<VehicleList />} />
						<Route path="/planets" element={<PlanetList />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
