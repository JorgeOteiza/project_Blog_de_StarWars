import React, { createContext, useState, useEffect, useContext } from "react";

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

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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

  const isFavorite = (item) => {

    return favorites[item.type].some(favorite => favorite.name === item.name);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
