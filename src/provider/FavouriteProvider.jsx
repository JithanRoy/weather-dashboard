import { useLocalStorage } from "../hooks/index.js";
import { FavouriteContext } from "../context/index.js";

// eslint-disable-next-line react/prop-types
const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (longitude, latitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location,
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFavourites, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteProvider };
