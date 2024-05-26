import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(err => console.error(err));
  }, []);

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

  return (
    <div className="List-content mx-3 px-3">
      <h1 className="bg-gradient text-center text-danger">Vehicles</h1>
      <div className="row p-3">
        {vehicles.map(vehicle => (
          <div className="col-md-4" key={vehicle.uid}>
            <div className="card mb-4">
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name} />
              <div className="card-body">
                <h5 className="card-title mb-5 text-info">{vehicle.name}</h5>
                <div className="container d-flex justify-content-between bottom-0 mb-2 position-absolute start-0">
                  <Link to={`/vehicle/${vehicle.uid}`} className="btn border-primary btn-outline-danger btn-outline-light">Details</Link>
                  <button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(vehicle)}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(vehicle) ? 'red' : 'gray' }} />
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

export default VehicleList;
