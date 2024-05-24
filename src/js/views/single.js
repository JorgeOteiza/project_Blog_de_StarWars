import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useSwapi } from "react-swapi";
import Card from "./card.js";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [item, setItem] = useState(null);

	const { data, isLoading, error } = useSwapi("people", "vehicle", "planet", { id: item });

	useEffect(() => {
		const fetchData = async () => {
			const data = await actions.getItemById(id);
			setItem(data);
		};

		fetchData();
	}, [id, actions]);

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
