import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <div className="row">
        {characters.map(character => (
          <div className="col-md-4" key={character.uid}>
            <div className="card mb-4">
              <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <Link to={`/character/${character.uid}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
