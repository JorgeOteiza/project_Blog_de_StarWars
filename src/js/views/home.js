import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getProductId } from "../utils";
import Card from "./card.js";


export const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="text-center my-5 link-danger opacity-50">Blog de Star Wars</h1>
      </div>
    </div>
    <div className="card-container">
      <div className="col-md-12 container d-flex justify-content-around my-5 py-3 row-cols-lg-4 w-auto">
        <div className="card col-md-4 mb-3 mx-3 position-relative">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Entidades</h5>
            <p className="card-text mb-5">
              Rellenar datos
            </p>
            <div className="learnmore-fav container d-flex justify-content-between bottom-0 mb-1 position-absolute start-0">

              <Link to={`/entity/${getProductId('entity')}`} className="btn btn-outline-primary">Leer más!</Link>
              <button class="btn btn-outline-warning bg-light" type="submit"><FontAwesomeIcon icon={faHeart} /></button>

            </div>
          </div>
        </div>
        <div className="card col-md-4 mb-3 mx-3 position-relative">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">vehículos</h5>
            <p className="card-text mb-5">
              Rellenar datos / Cambiar los estilos
            </p>
            <div className="learnmore-fav container d-flex justify-content-between bottom-0 mb-1 position-absolute start-0">

              <Link to={`/vehicle/${getProductId('vehicle')}`} className="btn btn-outline-primary">Leer más!</Link>
              <button class="btn btn-outline-warning bg-light" type="submit"><FontAwesomeIcon icon={faHeart} /></button>

            </div>
          </div>
        </div>
        <div className="card col-md-4 mb-3 mx-3 position-relative">
          <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Planetas</h5>
            <p className="card-text mb-5">
              Rellenar datos / Cambiar estilos / Crear card single/id
            </p>
            <div className="learnmore-fav container d-flex justify-content-between bottom-0 mb-1 position-absolute start-0">

              <Link to={`/planet/${getProductId('planet')}`} className="btn btn-outline-primary">Leer más!</Link>
              <button class="btn btn-outline-warning bg-light" type="submit"><FontAwesomeIcon icon={faHeart} /></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;