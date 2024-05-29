import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error(err));
  }, []);

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

  return (
    <div className="List-content mx-5 px-5">
      <h1 className="btn bg-gradient text-center text-danger opacity-50 font-monospace">Characters</h1>
      <div className="row m-3 p-1">
        {characters.map(character => (
          <div className="col-md-4 p-5" key={character.uid}>
            <div className="card">
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name} />
              <div className="card-body">
                <h5 className="card-title mb-5 text-black font-monospace">{character.name}</h5>
                <div className="container d-flex justify-content-between bottom-0 mb-2 position-absolute start-0">
                  <Link to={`/people/${character.uid}`} className="border-primary btn btn-outline-light btn-success font-monospace">Details</Link>
                  <button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(character)}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(character) ? 'red' : 'gray' }} />
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
