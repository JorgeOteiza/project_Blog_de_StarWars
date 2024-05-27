import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { resource, id } = useParams(); // Obtiene el tipo de recurso de la URL
	const [item, setItem] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/${resource}/${id}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setItem(data.result.properties);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [resource, id]);

	if (!item) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container">
			<h1>{item.name}</h1>
			{/* Mostrar diferentes propiedades según el tipo de recurso */}
			{resource === "people" && (
				<>
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
				</>
			)}
			{resource === "vehicles" && (
				<>
					<div className="container mx-5 px-5 w-100 h-auto">
						<h1>{vehicle.name}</h1>
						<p>Model: {vehicle.model}</p>
						<p>Manufacturer: {vehicle.manufacturer}</p>
						<p>Cost in Credits: {vehicle.cost_in_credits}</p>
						<p>Length: {vehicle.length}</p>
						<p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
						<p>Crew: {vehicle.crew}</p>
						<p>Passengers: {vehicle.passengers}</p>
						<button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(vehicle)}>
							<FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(vehicle) ? 'red' : 'gray' }} />
						</button>
					</div>
				</>
			)}
			{resource === "planets" && (
				<>
					<div className="container mx-5 px-5 w-100 h-auto">
						<h1>{planet.name}</h1>
						<p>Climate: {planet.climate}</p>
						<p>Diameter: {planet.diameter}</p>
						<p>Gravity: {planet.gravity}</p>
						<p>Population: {planet.population}</p>
						<p>Terrain: {planet.terrain}</p>
						<button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(planet)}>
							<FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(planet) ? 'red' : 'gray' }} />
						</button>
					</div>
				</>
			)}
			<Link to="/">
				<span className="btn btn-primary btn-lg" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

export default Single;