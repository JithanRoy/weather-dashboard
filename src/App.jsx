import "./App.css";
import WeatherProvider from "./provider/WeatherProvider.jsx";
import { FavouriteProvider } from "./provider/FavouriteProvider.jsx";
import LocationProvider from "./provider/LocationProvider.jsx";
import Page from "./page.jsx";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
