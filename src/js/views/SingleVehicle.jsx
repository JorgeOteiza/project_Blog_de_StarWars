import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleVehicle = () => {
  const { id } = useParams(); // Obteniendo el ID del vehículo desde la URL
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then(res => res.json())
      .then(data => {
        setVehicle(data.result.properties);
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
      {vehicle ? (
        <div>
          <h1>{vehicle.name}</h1>
          <p><strong>Model:</strong> {vehicle.model}</p>
          <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
          <p><strong>Cost:</strong> {vehicle.cost_in_credits} credits</p>
          <p><strong>Length:</strong> {vehicle.length} meters</p>
          <p><strong>Crew:</strong> {vehicle.crew}</p>
          <p><strong>Passengers:</strong> {vehicle.passengers}</p>
          <p><strong>Max Speed:</strong> {vehicle.max_atmosphering_speed}</p>
          {/* Añade más propiedades según sea necesario */}
        </div>
      ) : (
        <div>Vehicle not found</div>
      )}
    </div>
  );
};

export default SingleVehicle;
