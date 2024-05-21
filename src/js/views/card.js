import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavorites } from "../store/favorites.Context.jsx";

const Card = ({ item, type }) => {
  const { addFavorite } = useFavorites();

  return (
    <div className="card col-md-4 mb-3 mx-3 position-relative border-info">
      <img className="card-img-top" src={item.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text mb-5">{item.description}</p>
        <div className="learnmore-fav container d-flex justify-content-between bottom-0 mb-1 position-absolute start-0">
          <Link to={`/entity/${item.id}`} className="btn btn-outline-primary shadow-lg bg-gradient">
            Leer más!
          </Link>
          <button className="btn btn-outline-warning bg-light" onClick={() => addFavorite(item)}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;