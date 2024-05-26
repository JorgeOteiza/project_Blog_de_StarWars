import React from "react";
import { useFavorites } from "../store/favorites.Context.jsx";
import Card from "../views/card.js";

const Favorites = () => {
    const { favorites } = useFavorites();

    const allFavorites = [...favorites.characters, ...favorites.vehicles, ...favorites.planets];

    return (
        <div className="container">
            <h1>Favorites</h1>
            <div className="row">
                {allFavorites.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <Card item={item} type={item.type} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
