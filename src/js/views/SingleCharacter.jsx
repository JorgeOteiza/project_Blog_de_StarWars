
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.result) {
                    setCharacter(data.result.properties);
                } else {
                    navigate('/404');
                }
            })
            .catch(err => {
                console.error(err);
                navigate('/404');
            });
    }, [id, navigate]);

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