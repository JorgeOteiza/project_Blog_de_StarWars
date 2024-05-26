import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleVehicle = () => {
  const { id } = useParams();
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const [vehicle, setVehicle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.result) {
          setVehicle(data.result.properties);
        } else {
          navigate('/404');
        }
      })
      .catch(err => {
        console.error(err);
        navigate('/404');
      });
  }, [id, navigate]);

  const isFavorite = (vehicle) => {
    return favorites.vehicles.some((fav) => fav.name === vehicle.name);
  };

  const handleAddFavorite = (vehicle) => {
    if (isFavorite(vehicle)) {
      removeFavorite(vehicle, 'vehicles');
    } else {
      addFavorite(vehicle, 'vehicles');
    }
  };

  return vehicle ? (
    <div className="container mx-5 px-5 w-100 h-auto">
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost in Credits: {vehicle.cost_in_credits}</p>
      <p>Length: {vehicle.length}</p>
      <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
      <p>Crew: {vehicle.crew}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(vehicle)}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(vehicle) ? 'red' : 'gray' }} />
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default SingleVehicle;
