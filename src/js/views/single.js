import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { resource, id } = useParams();
	const [item, setItem, imageUrl, setImageUrl] = useState(null);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/${resource}/${id}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setItem(data.result.properties);
				setImageUrl(`https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`);
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

		const updatedFavorites = store.favorites || {};

		localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
						<p className="text-info">Height: <span className="text-white">{item.height}</span></p>
						<p className="text-info">Mass: <span className="text-white">{item.mass}</span></p>
						<p className="text-info">Hair Color: <span className="text-white">{item.hair_color}</span></p>
						<p className="text-info">Skin Color: <span className="text-white">{item.skin_color}</span></p>
						<p className="text-info">Eye Color: <span className="text-white">{item.eye_color}</span></p>
						<p className="text-info">Birth Year: <span className="text-white">{item.birth_year}</span></p>
						<p className="text-info">Gender: <span className="text-white">{item.gender}</span></p>
						<img src={`https://starwars-visualguide.com/assets/img/people/${item.uid}.jpg`} alt={item.name} />
					</>
				);
			case 'vehicles':
				return (
					<>
						<p className="text-info">Model: <span className="text-white">{item.model}</span></p>
						<p className="text-info">Manufacturer: <span className="text-white">{item.manufacturer}</span></p>
						<p className="text-info">Cost in Credits: <span className="text-white">{item.cost_in_credits}</span></p>
						<p className="text-info">Length: <span className="text-white">{item.length}</span></p>
						<p className="text-info">Max Atmosphering Speed: <span className="text-white">{item.max_atmosphering_speed}</span></p>
						<p className="text-info">Crew: <span className="text-white">{item.crew}</span></p>
						<p className="text-info">Passengers: <span className="text-white">{item.passengers}</span></p>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} alt={item.name} />
					</>
				);
			case 'planets':
				return (
					<>
						<p className="text-info">Climate: <span className="text-white">{item.climate}</span></p>
						<p className="text-info">Diameter: <span className="text-white">{item.diameter}</span></p>
						<p className="text-info">Gravity:  <span className="text-white">{item.gravity}</span></p>
						<p className="text-info">Population:  <span className="text-white">{item.population}</span></p>
						<p className="text-info">Terrain:  <span className="text-white">{item.terrain}</span></p>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt={item.name} />
					</>
				);
			default:
				return null;
		}
	};

	return (

		<div className="container mx-5 px-5 w-100 h-auto">
			<div className="d-flex justify-content-between mb-3">
				<h1 className="row text-white">{item.name}</h1>
				<img className="card-img-top" src={imageUrl} alt={item.name} />
				<button className="btn btn-outline-warning bg-transparent" onClick={() => handleAddFavorite(item)}>
					<FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(item) ? 'red' : 'gray' }} />
				</button>
			</div>
			{renderProperties()}
			<Link to="/">
				<span className="btn btn-primary btn-lg mt-3" role="button">
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
