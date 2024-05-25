import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const { addFavorite } = useFavorites();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Vehicles</h1>
      <div className="row">
        {vehicles.map(vehicle => (
          <div className="col-md-4" key={vehicle.uid}>
            <div className="card mb-4">
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name} />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <div className="container d-flex justify-content-between bottom-0 mb-1 position-absolute start-0">
                  <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-primary">Details</Link>
                  <button className="btn btn-outline-warning bg-light" onClick={() => addFavorite(vehicle)}>
                    <FontAwesomeIcon icon={faHeart} />
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
