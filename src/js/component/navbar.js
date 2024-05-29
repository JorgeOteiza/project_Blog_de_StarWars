import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { favorites, removeFavorite } = useFavorites();
  const allFavorites = [
    ...favorites.characters,
    ...favorites.vehicles,
    ...favorites.planets,
  ];

  return (
    <nav className="navbar navbar-light bg-black">
      <div className="navbar mx-5 px-5 w-100">
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
            <button className="border-danger button-26 font-monospace dropdown-toggle opacity-75" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites {allFavorites.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {allFavorites.length > 0 ? (
                allFavorites.map((favorite, index) => (
                  <li
                    key={index}
                    className="align-content-between d-flex dropdown-item justify-content-between p-1"
                  >
                    <span className="dropdown-item m1 p-1">
                      {favorite.name || favorite.title}
                    </span>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        removeFavorite(favorite, favorite.type);
                      }}
                    >
                      ×
                    </button>
                  </li>
                ))
              ) : (
                <li>
                  <span className="dropdown-item">No favorites yet</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
