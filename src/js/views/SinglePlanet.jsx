import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SinglePlanet = () => {
  const { id } = useParams();
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const [planet, setPlanet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.result) {
          setPlanet(data.result.properties);
        } else {
          navigate('/404');
        }
      })
      .catch(err => {
        console.error(err);
        navigate('/404');
      });
  }, [id, navigate]);

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

  return planet ? (
    <div>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(planet)}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(planet) ? 'red' : 'gray' }} />
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default SinglePlanet;
