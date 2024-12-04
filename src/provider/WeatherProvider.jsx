import { WeatherContext } from "../context/index.js";

import { useWeather } from "../hooks";

const weatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default weatherProvider;
