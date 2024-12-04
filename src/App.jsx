import "./App.css";
import Header from "./components/header/Header.jsx";
import WeatherBoard from "./components/weather/WeatherBoard.jsx";
import WeatherProvider from "./provider/WeatherProvider.jsx";
import { FavouriteProvider } from "./provider/FavouriteProvider.jsx";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
