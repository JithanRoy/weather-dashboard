import { useLocalStorage, useWeather } from "../hooks/index.js";
import { FavouriteContext } from "../context/index.js";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const { weatherData, loading, error } = useWeather();
  console.log(favourites);

  const addToFavourites = (longitude, latitude, location) => {
    setFavourites([
      ...favourites,
      {
        longitude: longitude,
        latitude: latitude,
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
