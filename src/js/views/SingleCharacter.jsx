// ./src/js/views/SingleCharacter.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err));
    }, [id]);

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
