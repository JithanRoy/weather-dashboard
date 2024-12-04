import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { useContext, useState } from "react";
import { FavouriteContext } from "../../context/index.js";

export default function AddToFavourite() {
  const { addToFavourite, removeFromFavourite, favourites } =
    useContext(FavouriteContext);
  const [favourite, toggleFavourite] = useState(false);

  const handleOnFavourite = () => {
    toggleFavourite(!favourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleOnFavourite}
        >
          <span>Add to Favourite</span>
          <img src={favourite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
