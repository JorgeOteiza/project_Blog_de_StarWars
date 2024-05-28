import React from "react";
import Card from "../views/card.js";

const cardData = [
  {
    id: "characters",
    title: "Characters",
    image: "https://lacuevadelguampa.com/cdn/shop/articles/star_wars_personajes.jpg?v=1616087475&width=2000",
    type: "characters"
  },
  {
    id: "vehicles",
    title: "Vehicles",
    image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/12/17/1331765972884_2/los-vehiculos-star-wars-que-te-gustaria-ver-en-el-dakar",
    type: "vehicles"
  },
  {
    id: "planets",
    title: "Planets",
    image: "https://lafuerzanoticias.wordpress.com/wp-content/uploads/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1",
    type: "planets"
  }
];

export const Home = () => {

  return (
    <div className="container">
      <div className="card-container">
        <div className="col-md-12 container d-flex justify-content-around my-5 py-5 row-cols-lg-4 w-auto mx-auto">
          {cardData.map(item => (
            <Card key={item.id} item={item} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
