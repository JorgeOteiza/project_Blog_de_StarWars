// Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">Height: {character.height}</p>
                        <p className="card-text">Mass: {character.mass}</p>
                        {/* Add more character details as needed */}
                        {/* Agregar un enlace que apunte a la ruta de detalle del personaje */}
                        <Link to={`/characters/${character.id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
