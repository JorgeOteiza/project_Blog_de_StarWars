// favorites.Context.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    characters: [],
    vehicles: [],
    planets: []
  });

  const addFavorite = (favorite, type) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [type]: [...prevFavorites[type], favorite],
    }));
  };

  const removeFavorite = (favorite, type) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [type]: prevFavorites[type].filter((item) => item !== favorite),
    }));
  };

  useEffect(() => {
    const favoritesString = localStorage.getItem("favorites");
    if (favoritesString) {
      const favoritesObject = JSON.parse(favoritesString);
      setFavorites(favoritesObject);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};


export default FavoritesContext;
