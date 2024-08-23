import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Favorites from "./views/Favorites";
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
                        {/* Ruta principal */}
                        <Route path="/" element={<Home />} />

                        {/* Rutas para mostrar listas */}
                        <Route path="/people" element={<CharacterList />} />
                        <Route path="/vehicles" element={<VehicleList />} />
                        <Route path="/planets" element={<PlanetList />} />

                        {/* Ruta dinámica para elementos individuales */}
                        <Route path="/people/:id" element={<Single resource="people" />} />
                        <Route path="/vehicles/:id" element={<Single resource="vehicles" />} />
                        <Route path="/planets/:id" element={<Single resource="planets" />} />

                        {/* Ruta para mostrar favoritos de usuarios */}
                        <Route path="/users/favorites" element={<Favorites />} />

                        {/* Ruta comodín para cualquier otra ruta no definida */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
