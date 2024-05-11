import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://w7.pngwing.com/pngs/441/131/png-transparent-yoda-star-wars-logo-star-wars-text-star-wars-episode-vii-desktop-wallpaper.png"
            alt="Star Wars"
            className="img-fluid"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            y aquí el botón lista de favoritos
          </button>
        </Link>
      </div>
    </nav>
  );
};
