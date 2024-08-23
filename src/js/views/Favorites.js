import React from "react";
import { useFavorites } from "../store/favorites.Context.jsx";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Favorites</h1>
            <div>
                <h2>Characters</h2>
                <ul>
                    {favorites.characters.map((char, index) => (
                        <li key={index}>{char.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Vehicles</h2>
                <ul>
                    {favorites.vehicles.map((vehicle, index) => (
                        <li key={index}>{vehicle.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Planets</h2>
                <ul>
                    {favorites.planets.map((planet, index) => (
                        <li key={index}>{planet.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Favorites;
