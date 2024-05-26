import React from "react";
import Card from "../views/card.js";

const cardData = [
  {
    id: "characters",
    title: "Characters",
    image: "https://starwars-visualguide.com/assets/img/categories/character.jpg",
    type: "characters"
  },
  {
    id: "vehicles",
    title: "Vehicles",
    image: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
    type: "vehicles"
  },
  {
    id: "planets",
    title: "Planets",
    image: "https://starwars-visualguide.com/assets/img/categories/planets.jpg",
    type: "planets"
  }
];

export const Home = () => {

  return (
    <div className="container">
      <div className="card-container">
        <div className="col-md-12 container d-flex justify-content-around my-5 py-5 row-cols-lg-4 w-auto">
          {cardData.map(item => (
            <Card key={item.id} item={item} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
