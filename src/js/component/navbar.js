import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { favorites } = useFavorites();

  return (
    <nav className="navbar-light bg-black mb-3">
      <div className="navbar mx-5 px-5">
        <Link to="/">
          <span className="navbar-brand my-3 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
              alt="Star Wars"
              className="img-fluid"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </span>
        </Link>
        <div className="ml-auto my-3">
          <Link to="/favorites">
            <button className="button-26 dropdown-toggle opacity-75" role="button">
              Favoritos ({favorites.length})
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
