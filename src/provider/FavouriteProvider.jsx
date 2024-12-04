import { useLocalStorage } from "../hooks/index.js";
import { FavouriteContext } from "../context/index.js";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favorites", []);

  const addToFavourites = (longitude, latitude, location) => {
    setFavourites(...favourites, {
      longitude: longitude,
      latitude: latitude,
      location: location,
    });
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location,
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteProvider };
