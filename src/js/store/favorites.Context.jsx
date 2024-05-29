import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    characters: [],
    vehicles: [],
    planets: []
  });

  const validTypes = ["characters", "vehicles", "planets"];

  const addFavorite = (favorite, type) => {
    if (!validTypes.includes(type)) {
      console.error('invalid favorite type: ${type}')
      return;
    }

    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [type]: [...prevFavorites[type], favorite],
    }));
  };

  const removeFavorite = (favorite, type) => {
    if (!validTypes.includes(type)) {
      console.error(`Invalid favorite type: ${type}`);
      return;
    }
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [type]: prevFavorites[type].filter((item) => item !== favorite),
    }));
  };

  useEffect(() => {
    const favoritesString = localStorage.getItem("favorites");
    if (favoritesString) {
      setFavorites(JSON.parse(favoritesString));
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
