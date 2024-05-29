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
	const [imageUrl, setImageUrl] = useState(null);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/${resource}/${id}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setItem(data.result.properties);
				const imageEndpoint = data.result.image || `https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`;
				setImageUrl(imageEndpoint);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [resource, id]);

	if (!item) {
		return <div className="container d-flex justify-context-center text-mute m-5 p-3">Loading...</div>;
	}

	const handleAddFavorite = (item) => {
		if (isFavorite(item)) {
			removeFavorite(item, item - type)
		} else {
			actions.addFavorite(item, item - type);
		}
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
						<p className="text-info mt-4">Height: <span className="text-white">{item.height}</span></p>
						<p className="text-info">Mass: <span className="text-white">{item.mass}</span></p>
						<p className="text-info">Hair Color: <span className="text-white">{item.hair_color}</span></p>
						<p className="text-info">Skin Color: <span className="text-white">{item.skin_color}</span></p>
						<p className="text-info">Eye Color: <span className="text-white">{item.eye_color}</span></p>
						<p className="text-info">Birth Year: <span className="text-white">{item.birth_year}</span></p>
						<p className="text-info mb-1">Gender: <span className="text-white">{item.gender}</span></p>
					</>
				);
			case 'vehicles':
				return (
					<>
						<p className="text-info mt-4">Model: <span className="text-white">{item.model}</span></p>
						<p className="text-info">Manufacturer: <span className="text-white">{item.manufacturer}</span></p>
						<p className="text-info">Cost in Credits: <span className="text-white">{item.cost_in_credits}</span></p>
						<p className="text-info">Length: <span className="text-white">{item.length}</span></p>
						<p className="text-info">Max Atmosphering Speed: <span className="text-white">{item.max_atmosphering_speed}</span></p>
						<p className="text-info">Crew: <span className="text-white">{item.crew}</span></p>
						<p className="text-info mb-1">Passengers: <span className="text-white">{item.passengers}</span></p>
					</>
				);
			case 'planets':
				return (
					<>
						<p className="text-info mt-4">Climate: <span className="text-white">{item.climate}</span></p>
						<p className="text-info">Diameter: <span className="text-white">{item.diameter}</span></p>
						<p className="text-info">Gravity:  <span className="text-white">{item.gravity}</span></p>
						<p className="text-info">Population:  <span className="text-white">{item.population}</span></p>
						<p className="text-info mb-1">Terrain:  <span className="text-white">{item.terrain}</span></p>
					</>
				);
			default:
				return null;
		}
	};

	return (

		<div className="container mx-5 px-5 w-100 h-auto">
			<h1 className="text-font-monospace text-white">{item.name}</h1>

			<div className="d-flex justify-content-between">
				<div className="w-50 p-1">
					{renderProperties()}
				</div>
				<div className="w-50">
					<img className="card-img-top" src={imageUrl} alt={item.name} />
				</div>
			</div>

			<div className="d-flex justify-content-between">
				<Link to="/">
					<span className="btn btn-primary btn-lg mt-5" role="button">
						Back home
					</span>
				</Link>
				<button className="btn btn-outline-warning bg-transparent m-2" onClick={() => handleAddFavorite(item)}>
					<FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(item) ? 'red' : 'gray' }} />
				</button>
			</div>
		</div>

	);
};

Single.propTypes = {
	match: PropTypes.object
};

export default Single;
