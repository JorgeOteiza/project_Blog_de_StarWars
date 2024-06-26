import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, type }) => {
  return (
    <div className="card m-4 bg-transparent">
      <img className="card-img-top h-100" src={item.image} alt={item.title} />
      <div className="card-body">
        <h5 className="border-bottom card-title d-flex font-monospace justify-content-center opacity-50 text-success">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <Link to={`/${type}`} className="btn btn-close-white card-img-overlay">
        </Link>
      </div>
    </div>
  );
};

export default Card;