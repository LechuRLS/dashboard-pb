document.addEventListener("DOMContentLoaded", () => {
  const forecast = document.querySelector(".forecast");
  if (forecast) {
    forecast.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        forecast.scrollLeft += e.deltaY;
      }
    });
  }
});

const weatherApiKey = "8a724bcf02b741c2934194701251404";

const btnWeather = document.getElementById("getWeather");
const btnClose = document.getElementById("closeWeather");
const cityInput = document.getElementById("city");
const weatherDiv = document.getElementById("weather");

btnWeather.addEventListener("click", async () => {
const city = cityInput.value.trim();
if (!city) return;

const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&days=1&aqi=no&alerts=no`;

try {
  const res = await fetch(url);
  const data = await res.json();

  const location = `${data.location.name}, ${data.location.country}`;
  const temp = `${data.current.temp_c} °C`;
  const condition = data.current.condition.text;
  const icon = data.current.condition.icon;

  const humidity = `${data.current.humidity}%`;
  const wind = `${data.current.wind_kph} km/h`;
  const rain = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

  let html = `
    <h3>${location}</h3>
    <img src="https:${icon}" alt="${condition}">
    <p>${condition}</p>
    <p><strong>Temperatura:</strong> ${temp}</p>
    <p><strong>Humedad:</strong> ${humidity}</p>
    <p><strong>Viento:</strong> ${wind}</p>
    <p><strong>Probabilidad de lluvia:</strong> ${rain}</p>
    <h4>Previsión por horas:</h4>
    <div class="forecast">
  `;

  data.forecast.forecastday[0].hour.forEach(hour => {
    const time = hour.time.split(" ")[1];
    html += `
      <div class="hour-block">
        <p>${time}</p>
        <img src="https:${hour.condition.icon}" alt="${hour.condition.text}">
        <p>${hour.temp_c} °C</p>
      </div>
    `;
  });

  html += "</div>";
  weatherDiv.innerHTML = html;

  btnClose.style.display = "inline-block";

} catch (error) {
  weatherDiv.innerHTML = `<p>Error al obtener el clima.</p>`;
}
});

btnClose.addEventListener("click", () => {
weatherDiv.innerHTML = "";
btnClose.style.display = "none";
});

