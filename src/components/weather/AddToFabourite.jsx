import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { useContext, useEffect, useState } from "react";
import { FavouriteContext } from "../../context/index.js";
import { useWeather } from "../../hooks/index.js";

export default function AddToFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const [isFavourite, toggleFavourite] = useState(false);
  const { weatherData } = useWeather();
  const { longitude, latitude, location } = weatherData;

  const handleOnFavourite = () => {
    toggleFavourite(!isFavourite);
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(true);
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleOnFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
