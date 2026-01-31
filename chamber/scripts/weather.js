const apiKey = "YOUR_API_KEY";
const city = "Kampala";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("current-temp").textContent =
    `Temperature: ${data.list[0].main.temp} °C`;

  document.getElementById("weather-desc").textContent =
    data.list[0].weather[0].description;

  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "<h3>3-Day Forecast</h3>";

  for (let i = 8; i <= 24; i += 8) {
    const day = document.createElement("p");
    day.textContent = `${data.list[i].main.temp} °C`;
    forecastDiv.appendChild(day);
  }
}

getWeather();
