import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, type }) => {
  return (
    <div className="card mb-4">
      <img className="card-img-top" src={item.image} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <Link to={`/${type}`} className="btn btn-outline-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;