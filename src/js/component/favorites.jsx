import React from "react";
import { useFavorites } from "../store/favorites.Context.jsx";
import Card from "../views/card.js";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="container">
            <h1>Favorite Characters</h1>
            <div className="row">
                {Array.isArray(favorites.characters) && favorites.characters.map(character => (
                    <div className="col-md-4" key={character.id}>
                        <Card item={character} type="character" />
                    </div>
                ))}

                {Array.isArray(favorites.vehicles) && favorites.vehicles.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                        <Card item={vehicle} type="vehicle" />
                    </div>
                ))}

                {Array.isArray(favorites.planets) && favorites.planets.map(planet => (
                    <div className="col-md-4" key={planet.id}>
                        <Card item={planet} type="planet" />
                    </div>
                ))}

            </div>
            {/* Repeat the same process for vehicles and planets */}
        </div>
    );
};

export default Favorites;
