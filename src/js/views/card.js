import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ item, type }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <Link to={`/${type}/${item.id}`} className="btn btn-primary">Leer más!</Link>
      </div>
    </div>
  );
};

export default CardComponent;
