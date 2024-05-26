import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleCharacter = () => {
    const { id } = useParams();
    const { addFavorite, removeFavorite, favorites } = useFavorites();
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

    const isFavorite = (character) => {
        return favorites.characters.some((fav) => fav.name === character.name);
    };

    const handleAddFavorite = (character) => {
        if (isFavorite(character)) {
            removeFavorite(character, 'characters');
        } else {
            addFavorite(character, 'characters');
        }
    };

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
            <button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(character)}>
                <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(character) ? 'red' : 'gray' }} />
            </button>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default SingleCharacter;
