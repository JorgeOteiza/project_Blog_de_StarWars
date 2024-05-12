import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/home.css";

export const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="text-center my-5">Star Wars Blog</h1>
      </div>
    </div>
    <div className="card-container">
      <div className="col-md-12 container d-flex justify-content-around my-5 py-3 row-cols-lg-4 w-auto">
        <div className="card col-md-4 mb-3 mx-3">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Entity</h5>
            <p className="card-text">
              identificar a c/u con su fetch/id
            </p>
            <div className="learnmore-fav container d-flex justify-content-between">

              <button type="button" class="btn btn-outline-primary">Learn more!</button>
              <button class="btn btn-primary" type="submit"><FontAwesomeIcon icon={faHeart} /></button>

            </div>
          </div>
        </div>
        <div className="card col-md-4 mb-3 mx-3">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">vehicles</h5>
            <p className="card-text">
              dirigir contenido a single y crear buttons "leer más" y "agregar a favoritos"
            </p>
            <div className="learnmore-fav container d-flex justify-content-between">

              <button type="button" class="btn btn-outline-primary">Learn more!</button>
              <button class="btn btn-primary" type="submit"><FontAwesomeIcon icon={faHeart} /></button>

            </div>
          </div>
        </div>
        <div className="card col-md-4 mb-3 mx-3">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Planets</h5>
            <p className="card-text">
              crear nuevo archivo y ruta en layout para favoritos.
            </p>
            <div className="learnmore-fav container d-flex justify-content-between">

              <button type="button" class="btn btn-outline-primary">Learn more!</button>
              <button class="btn btn-primary" type="submit"><FontAwesomeIcon icon={faHeart} /></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);