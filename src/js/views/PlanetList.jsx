import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      <div className="row">
        {planets.map(planet => (
          <div className="col-md-4" key={planet.uid}>
            <div className="card mb-4">
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <Link to={`/planet/${planet.uid}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetList;
