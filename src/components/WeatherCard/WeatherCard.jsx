import daySunny from "../../assets/weather-card-day-sunny.png";
import dayCloudy from "../../assets/weather-card-day-cloudy.png";
import dayRain from "../../assets/weather-card-day-rain.png";
import dayStorm from "../../assets/weather-card-day-storm.png";
import daySnow from "../../assets/weather-card-day-snow.png";
import dayFog from "../../assets/weather-card-day-fog.png";
import nightSunny from "../../assets/weather-card-night-sunny.png";
import nightCloudy from "../../assets/weather-card-night-cloudy.png";
import nightRain from "../../assets/weather-card-night-rain.png";
import nightStorm from "../../assets/weather-card-night-storm.png";
import nightSnow from "../../assets/weather-card-night-snow.png";
import nightFog from "../../assets/weather-card-night-fog.png";
import "./WeatherCard.css";

const weatherBackgrounds = {
  day: {
    sunny: daySunny,
    cloudy: dayCloudy,
    rain: dayRain,
    storm: dayStorm,
    snow: daySnow,
    fog: dayFog,
  },
  night: {
    sunny: nightSunny,
    cloudy: nightCloudy,
    rain: nightRain,
    storm: nightStorm,
    snow: nightSnow,
    fog: nightFog,
  },
};

function WeatherCard({ weatherData }) {
  const timeOfDay = weatherData.isDay ? "day" : "night";
  const backgroundImage =
    weatherBackgrounds[timeOfDay][weatherData.conditionType] ||
    weatherBackgrounds.day.sunny;

  return (
    <section
      className="weather-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="weather-card__temperature">
        {weatherData.temperature}&deg;F
      </p>
    </section>
  );
}

export default WeatherCard;
