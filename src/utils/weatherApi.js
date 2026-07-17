function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Error: ${response.status}`));
}

function getWeather({ latitude, longitude }, APIkey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
  ).then(checkResponse);
}

function filterWeatherData(data) {
  const weatherData = {
    city: data.name,
    temperature: Math.round(data.main.temp),
    condition: getWeatherCondition(data.main.temp),
    conditionType: getConditionType(data.weather[0].id),
    isDay: checkIsDaytime(data.sys, Date.now()),
  };
  return weatherData;
}

// Logic for defining temperature: returns the weather type
// for a given temperature in Fahrenheit.
function getWeatherCondition(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}

// Maps an OpenWeather condition code to one of the six
// weather card backgrounds from the design.
// See https://openweathermap.org/weather-conditions
function getConditionType(conditionCode) {
  if (conditionCode >= 200 && conditionCode < 300) {
    return "storm";
  } else if (conditionCode >= 300 && conditionCode < 600) {
    return "rain";
  } else if (conditionCode >= 600 && conditionCode < 700) {
    return "snow";
  } else if (conditionCode >= 700 && conditionCode < 800) {
    return "fog";
  } else if (conditionCode === 800) {
    return "sunny";
  } else {
    return "cloudy";
  }
}

// The API returns sunrise and sunset in seconds, while
// Date.now() returns milliseconds.
function checkIsDaytime({ sunrise, sunset }, currentTimestamp) {
  return sunrise * 1000 < currentTimestamp && currentTimestamp < sunset * 1000;
}

export { getWeather, filterWeatherData, getWeatherCondition };
