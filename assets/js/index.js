const apiKey = "0cb34ba0fb4d7f9ae8a9ad6c30fec97f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const WeatherChecking = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);
  if (data.status === 404) {
    document.getElementById("error").classList = "inline-block";
    document.getElementById("weather").classList = "none";
  } else if (data.status === 404){
    document.getElementById("error").style.display = "none";
    document.getElementById("weather").style.display= "flex";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "°C";
    document.getElementById('wind').innerHTML = data.wind.speed + 'km/h'
    document.getElementById('country').innerHTML = data.sys.country
    document.getElementById('humidity').innerHTML = data.main.humidity + "%"

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/clouds.png?raw=true"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/clear.png?raw=true"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/rain.png?raw=true"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/drizzle.png?raw=true"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/mist.png?raw=true"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/snow.png?raw=true"
    }
  }
};

console.log(searchBtn);
searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    console.log(searchInput.value);
    WeatherChecking(searchInput.value)
  }
});
