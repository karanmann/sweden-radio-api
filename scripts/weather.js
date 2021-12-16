const API_ONE_DAY = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=a77136eb90fd8d858de1f60c1ae1ee51`;

const setWeatherData = document.getElementById("weather");
const fetchWeatherData = () => {
  fetch(API_ONE_DAY)
    .then((res) => res.json())
    .then((weatherData) => displayWeatherData(weatherData));
};

fetchWeatherData();

displayWeatherData = (weatherData) => {
 
  const sunriseHour = new Date(weatherData.sys.sunrise * 1000).getHours();
  const sunriseMinutes = "0" + new Date(weatherData.sys.sunrise * 1000).getMinutes();
  const formattedSunrise = `${sunriseHour}:${sunriseMinutes.substr(-2)}`;

  const sunsetHour = new Date(weatherData.sys.sunset * 1000).getHours();
  const sunsetMinutes = "0" + new Date(weatherData.sys.sunset * 1000).getMinutes();
  const formattedSunset = `${sunsetHour}:${sunsetMinutes.substr(-2)}`;

  const date = new Date(weatherData.dt * 1000);
  const weekday = date.toLocaleDateString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

  const feelsLike = Math.round(weatherData.main.feels_like - 273);
  const maxTemperature = Math.round(weatherData.main.temp_max - 273);
  const minTemperature = Math.round(weatherData.main.temp_min - 273);


  let weatherOutput = "";

  weatherOutput += `
  <p>${weekday}</p>
  <p>${weatherData.name}, ${weatherData.sys.country}</p>
  <p>Temp : ${(weatherData.main.temp - 273).toFixed(1)} &#x2103</p>
  <div class="weather-temp">
    <p>Feels Like : ${feelsLike} &#x2103</p>
    <p>Max Temp: ${maxTemperature} &#x2103</p>
    <p>Min Temp: ${minTemperature} &#x2103</p>
  </div>
  <div class="weather-suns">
    <p>Sunrise : ${formattedSunrise}</p>
    <p>Sunset : ${formattedSunset}</p>
  </div>
  
  `;
  setWeatherData.innerHTML = weatherOutput;
};
