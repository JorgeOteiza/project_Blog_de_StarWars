import React, { createContext, useState, useContext } from "react";

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

  const addFavorite = (item, type) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [type]: [...prevFavorites[type], item]
    }));
  };

  const removeFavorite = (item, type) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [type]: prevFavorites[type].filter(fav => fav.id !== item.id)
    }));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
