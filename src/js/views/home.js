import React from "react";
import "../../styles/home.css";

export const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="text-center my-5">Blog de StarWars</h1>
      </div>
    </div>
    <div className="card-container row overflow-auto">
      <div className="col-md-12 d-flex my-5 py-5 w-auto">
        <div className="card col-md-4 mb-3 mx-3">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Entity</h5>
            <p className="card-text">
identificar a c/u con su fetch/id
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card col-md-4 mb-3 mx-3">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">vehicles</h5>
            <p className="card-text">
dirigir contenido a single y crear buttons "leer más" y "agregar a favoritos"
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card col-md-4 mb-3 mx-3">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Planets</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);