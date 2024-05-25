import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useFavorites(); // Aquí obtienes las funciones y el estado de favoritos del contexto

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error(err));
  }, []);

  // Función para verificar si un personaje está en la lista de favoritos
  const isFavorite = (character) => {
    return favorites.some((fav) => fav.name === character.name);
  };

  // Función para añadir o remover un personaje de la lista de favoritos
  const toggleFavorite = (character) => {
    if (isFavorite(character)) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div>
      <h1>Characters</h1>
      <div className="row">
        {characters.map(character => (
          <div className="col-md-4" key={character.uid}>
            <div className="card mb-4">
              <h5 className="card-title">{character.name}</h5>
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name} />
              <div className="card-body">
                <div className="container d-flex justify-content-between bottom-0 mb-1 position-absolute start-0">
                  <Link to={`/character/${character.uid}`} className="btn btn-primary">Details</Link>
                  <button className="btn btn-outline-warning bg-light" onClick={() => toggleFavorite(character)}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(character) ? 'red' : 'gray' }} /> {/* Cambia el color del corazón si el personaje está en favoritos */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
