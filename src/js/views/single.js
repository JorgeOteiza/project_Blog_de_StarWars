import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { resource, id } = useParams();
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

	const handleAddFavorite = (item) => {
		actions.addFavorite(item);
	};

	const isFavorite = (item) => {
		if (!store.favorites || !store.favorites[resource]) {
			return false;
		}
		return store.favorites[resource].some(favorite => favorite.name === item.name);
	};

	const renderProperties = () => {
		switch (resource) {
			case 'people':
				return (
					<>
						<p>Height: {item.height}</p>
						<p>Mass: {item.mass}</p>
						<p>Hair Color: {item.hair_color}</p>
						<p>Skin Color: {item.skin_color}</p>
						<p>Eye Color: {item.eye_color}</p>
						<p>Birth Year: {item.birth_year}</p>
						<p>Gender: {item.gender}</p>
					</>
				);
			case 'vehicles':
				return (
					<>
						<p>Model: {item.model}</p>
						<p>Manufacturer: {item.manufacturer}</p>
						<p>Cost in Credits: {item.cost_in_credits}</p>
						<p>Length: {item.length}</p>
						<p>Max Atmosphering Speed: {item.max_atmosphering_speed}</p>
						<p>Crew: {item.crew}</p>
						<p>Passengers: {item.passengers}</p>
					</>
				);
			case 'planets':
				return (
					<>
						<p>Climate: {item.climate}</p>
						<p>Diameter: {item.diameter}</p>
						<p>Gravity: {item.gravity}</p>
						<p>Population: {item.population}</p>
						<p>Terrain: {item.terrain}</p>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div className="container mx-5 px-5 w-100 h-auto">
			<h1>{item.name}</h1>
			{renderProperties()}
			<button className="btn btn-outline-warning bg-light" onClick={() => handleAddFavorite(item)}>
				<FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(item) ? 'red' : 'gray' }} />
			</button>
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
