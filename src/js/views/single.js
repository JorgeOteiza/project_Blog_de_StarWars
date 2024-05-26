import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			// Intentamos obtener el item del contexto de la aplicación
			const foundItem = store.items.find(item => item.id === id);
			if (foundItem) {
				setItem(foundItem);
			} else {
				// Si el item no está en el contexto, hacemos una llamada a la API
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					setItem(data.result.properties);
				} catch (error) {
					console.error(error);
				}
			}
		};

		fetchData();
	}, [id, store.items]);

	if (!item) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container">
			<h1>{item.name}</h1>
			<p>{item.description}</p>
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
