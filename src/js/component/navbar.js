// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { favorites, removeFavorite } = useFavorites();

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
          <div className="dropdown">
            <button className="border-danger button-26 dropdown-toggle opacity-75" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Favoritos {favorites.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {Array.isArray(favorites) && favorites.map((favorite, index) => (
                <li key={index}>
                  <Link to={`/favorite/${index}`} className="dropdown-item">{favorite.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
