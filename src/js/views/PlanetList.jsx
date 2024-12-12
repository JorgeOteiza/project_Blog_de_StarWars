import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));
  }, []);

  const isFavorite = (planet) => {
    return favorites.planets.some((fav) => fav.name === planet.name);
  };

  const handleAddFavorite = (planet) => {
    if (isFavorite(planet)) {
      removeFavorite(planet, 'planets');
    } else {
      addFavorite(planet, 'planets');
    }
  };

  return (
    <div className="List-content PlanetList mx-5 px-5">
      <h1 className="btn bg-gradient text-center text-danger opacity-50 font-monospace">Planets</h1>
      <div className="row row-cols-lg-4 m-3 p-1">
        {planets.map(planet => (
          <div className="col-md-4 p-5" key={planet.uid}>
            <div className="card">
              <img className="card-img-top h-100" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} />
              <div className="card-body">
                <h5 className="card-title mb-5 text-black font-monospace">{planet.name}</h5>
                <div className="container d-flex justify-content-between bottom-0 mb-2 position-absolute start-0">
                  <Link to={`/planets/${planet.uid}`} className="border-primary btn btn-outline-light btn-success font-monospace">Details</Link>
                  <button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(planet)}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(planet) ? 'red' : 'gray' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetList;