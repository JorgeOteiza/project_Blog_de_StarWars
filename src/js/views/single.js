import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useSwapi } from "react-swapi";
import Card from "./card.js";

const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const characterId = params.theid;
	const [character, setCharacter] = useState(null);

	const { data, isLoading, error } = useSwapi("people", { id: characterId });

	useEffect(() => {
		if (data) {
			setCharacter(data.result.properties);
		}
	}, [data]);

	return (
		<div className="jumbotron mx-5">
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{character && <Card character={character} />}
			<hr className="my-4" />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
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
