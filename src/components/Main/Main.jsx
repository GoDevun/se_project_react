import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, clothingItems, onCardClick }) {
  const filteredClothingItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === weatherData.condition,
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <p className="main__weather-text">
          Today is {weatherData.temperature}&deg; F / You may want to wear:
        </p>
        <ul className="main__cards">
          {filteredClothingItems.map((item) => (
            <ItemCard key={item._id} card={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
