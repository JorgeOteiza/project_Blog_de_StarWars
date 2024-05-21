import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavorites } from "../store/favorites.Context.jsx";
import Card from "../views/card.js";

const cardData = [
  {
    id: 1,
    title: "Entidades",
    description: "Rellenar datos",
    image: "https://starwars-visualguide.com/assets/img/categories/character.jpg",
    type: "entity"
  },
  {
    id: 2,
    title: "Vehículos",
    description: "Rellenar datos / Cambiar los estilos",
    image: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
    type: "vehicle"
  },
  {
    id: 3,
    title: "Planetas",
    description: "Rellenar datos / Cambiar estilos / Crear card single/id",
    image: "https://starwars-visualguide.com/assets/img/categories/planets.jpg",
    type: "planet"
  }
];

export const Home = () => {
  const { favorites } = useFavorites();


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3 link-danger opacity-50">Blog de Star Wars</h1>
        </div>
      </div>
      <div className="card-container">
        <div className="col-md-12 container d-flex justify-content-around my-5 py-3 row-cols-lg-4 w-auto">
          {cardData.map(item => (
            <Card key={item.id} item={item} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
