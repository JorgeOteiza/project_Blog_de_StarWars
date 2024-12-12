import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card.css';

const Card = ({ item, path }) => {
  return (
    <Link to={path} className="card-link"> {/* Enlace que envuelve la tarjeta */}
      <div className="card m-4 bg-transparent">
        <img className="card-img-top h-100" src={item.image} alt={item.title} />
        <div className="card-body">
          <h5 className="border-bottom card-title d-flex font-monospace justify-content-center opacity-50">
            {item.title}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
