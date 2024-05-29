import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFavorites } from "../store/favorites.Context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Single = () => {
	const { resource, id } = useParams();
	const [item, setItem] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);
	const { favorites, addFavorite, removeFavorite } = useFavorites();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/${resource}/${id}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setItem(data.result.properties);
				const imageEndpoint =
					resource === "people" ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` :
						resource === "vehicles" ? `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg` :
							resource === "planets" ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` :
								null;
				setImageUrl(imageEndpoint);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [resource, id]);

	if (!item) {
		return <div>Loading...</div>;
	}

	const isFavorite = (item) => {
		return favorites[resource]?.some((favorite) => favorite.name === item.name);
	};

	const handleAddFavorite = (item) => {
		if (isFavorite(item)) {
			removeFavorite(item, resource);
		} else {
			addFavorite(item, resource);
		}
	};

	const renderProperties = () => {
		const properties = {
			people: [
				["Height", item.height],
				["Mass", item.mass],
				["Hair Color", item.hair_color],
				["Skin Color", item.skin_color],
				["Eye Color", item.eye_color],
				["Birth Year", item.birth_year],
				["Gender", item.gender],
			],
			vehicles: [
				["Model", item.model],
				["Manufacturer", item.manufacturer],
				["Cost in Credits", item.cost_in_credits],
				["Length", item.length],
				["Max Atmosphering Speed", item.max_atmosphering_speed],
				["Crew", item.crew],
				["Passengers", item.passengers],
			],
			planets: [
				["Climate", item.climate],
				["Diameter", item.diameter],
				["Gravity", item.gravity],
				["Population", item.population],
				["Terrain", item.terrain],
			],
		};

		return properties[resource]?.map(([label, value]) => (
			<p className="text-info" key={label}>
				{label}: <span className="text-white">{value}</span>
			</p>
		));
	};

	return (
		<div className="container mx-5 px-5 w-100 h-auto">
			<h1 className="text-decoration-underline text-font-monospace text-white">{item.name}</h1>

			<div className="d-flex hstack justify-content-between w-auto">
				<div className="w-50 p-1 h4">{renderProperties()}</div>
				<div className="w-50">
					<img className="card-img-top w-auto h-auto" src={imageUrl} alt={item.name} />
				</div>
			</div>

			<div className="d-flex justify-content-between">
				<Link to="/">
					<span className="btn btn-dark mt-5" role="button">
						Back home
					</span>
				</Link>
				<button className="bg-transparent border btn btn-lg btn-outline-light m-2 mt-5 rounded-pill" onClick={() => handleAddFavorite(item)}>
					<FontAwesomeIcon icon={faHeart} style={{ color: isFavorite(item) ? 'red' : 'gray' }} />
				</button>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
};

export default Single;
