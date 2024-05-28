import React from "react";
import { useFavorites } from "../store/favorites.Context.jsx";
import Card from "../views/card.js";

const Favorites = () => {
    const { favorites, removeFavorite, isFavorite } = useFavorites();

    const allFavorites = [...favorites.characters, ...favorites.vehicles, ...favorites.planets];

    return (
        <div className="container">
            <h1>Favorites</h1>
            <div className="row">
                {allFavorites.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <Card item={item} type={item.type} />
                        {isFavorite(item) && (
                            <button onClick={() => removeFavorite(item, item.type)}>Eliminar</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
