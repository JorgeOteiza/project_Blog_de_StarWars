import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [starship, setStarship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                const data = await response.json();
                setCharacter(data.result.properties);

                if (data.result.properties.starships.length > 0) {
                    const starshipResponse = await fetch(data.result.properties.starships[0]);
                    const starshipData = await starshipResponse.json();
                    setStarship(starshipData.result.properties);
                } else {
                    setStarship(null);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return character ? (
        <div>
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default SingleCharacter;
