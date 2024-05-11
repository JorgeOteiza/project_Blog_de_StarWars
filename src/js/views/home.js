import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Blog de StarWars</h1>
    <p>
      <img src={rigoImage} />
    </p>
    <a href="#" className="btn btn-success">
      Aquí va la target de bootstrap
    </a>
  </div>
);
