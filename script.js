const input = document.querySelector('.inp');
const temper = document.querySelector('.temperature');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=ru&appid=a70cb2c86dfa50fbf508c376f24dc284&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  temper.textContent = `${Math.round(data.main.temp)} °C`;
}
getWeather()

input.addEventListener('change', getWeather)