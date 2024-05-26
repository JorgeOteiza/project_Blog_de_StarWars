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
    <div className="List-content mx-3 px-3">
      <h1 className="bg-gradient text-center text-danger">Planets</h1>
      <div className="row p-3">
        {planets.map(planet => (
          <div className="col-md-4" key={planet.uid}>
            <div className="card mb-4">
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} />
              <div className="card-body">
                <h5 className="card-title mb-5 text-info">{planet.name}</h5>
                <div className="container d-flex justify-content-between bottom-0 mb-2 position-absolute start-0">
                  <Link to={`/planet/${planet.uid}`} className="btn border-primary btn-outline-danger btn-outline-light">Details</Link>
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