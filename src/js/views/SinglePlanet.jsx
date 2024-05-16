import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePlanet = () => {
  const { id } = useParams(); // Obteniendo el ID del planeta desde la URL
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(res => res.json())
      .then(data => {
        setPlanet(data.result.properties);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {planet ? (
        <div>
          <h1>{planet.name}</h1>
          <p><strong>Climate:</strong> {planet.climate}</p>
          <p><strong>Diameter:</strong> {planet.diameter}</p>
          <p><strong>Gravity:</strong> {planet.gravity}</p>
          <p><strong>Population:</strong> {planet.population}</p>
          <p><strong>Terrain:</strong> {planet.terrain}</p>
          {/* Añade más propiedades según sea necesario */}
        </div>
      ) : (
        <div>Planet not found</div>
      )}
    </div>
  );
};

export default SinglePlanet;
