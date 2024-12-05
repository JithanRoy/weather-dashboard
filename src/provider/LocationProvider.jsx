import { useState } from "react";

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    longitude: 0,
    latitude: 0,
  });
  return (
    <LocationProvider.Provider
      value={{ selectedLocation, setSelectedLocation }}
    >
      {children}
    </LocationProvider.Provider>
  );
};

export default LocationProvider;
