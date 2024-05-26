import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavorites } from "../store/favorites.Context.jsx";

const SingleCharacter = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const { addFavorite, removeFavorite, favorites } = useFavorites();
    const [character, setCharacter] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacter = async () => {
            const data = await actions.getItemById('people', id);
            if (data) {
                setCharacter(data);
            } else {
                navigate('/404');
            }
        };

        fetchCharacter();
    }, [id, actions, navigate]);

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
        <div className="container mx-5 px-5 w-100 h-auto">
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
