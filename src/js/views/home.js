import React from "react";
import { useFavorites } from "../store/favorites.Context.jsx";
import Card from "../views/card.js";

const cardData = [
  {
    id: 1,
    title: "Entidades",
    description: "Rellenar datos",
    image: "https://starwars-visualguide.com/assets/img/categories/character.jpg",
    type: "characters"
  },
  {
    id: 2,
    title: "Vehículos",
    description: "Rellenar datos / Cambiar los estilos",
    image: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
    type: "vehicles"
  },
  {
    id: 3,
    title: "Planetas",
    description: "Rellenar datos / Cambiar estilos / Crear card single/id",
    image: "https://starwars-visualguide.com/assets/img/categories/planets.jpg",
    type: "planets"
  }
];

export const Home = () => {
  const { favorites } = useFavorites();


  return (
    <div className="container">
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
