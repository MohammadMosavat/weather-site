const apiKey = "0cb34ba0fb4d7f9ae8a9ad6c30fec97f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const weatherMain = document.getElementById("weatherMain");
const weatherDesc = document.getElementById("weatherDesc");

const WeatherChecking = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);
  console.log(document.getElementById("error"));

  if (Number(data.cod) == 404) {
    document.getElementById("error").style.display = "block";
    document.getElementById("weather").style.display = "none";
    console.log("if run");
  } else {
    console.log("else run");
    document.getElementById("error").style.display = "none";
    document.getElementById("weather").style.display = "flex";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "°C";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("country").innerHTML = data.sys.country;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    
    weatherMain.innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clouds") {
      weatherDesc.src = "/assets/svgs/cloud-icon.svg";
    } else if (data.weather[0].main == "Clear") {
      weatherDesc.src = "/assets/svgs/day-sunny-icon.svg";
    } else if (data.weather[0].main == "Rain") {
      weatherDesc.src = "/assets/svgs/cloud-rain-icon.svg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherDesc.src = "/assets/svgs/cloud-rain-lightning-icon.svg";
    } else if (data.weather[0].main == "Mist") {
      weatherDesc.src = "/assets/svgs/cloud-fog-icon.svg";
    } else if (data.weather[0].main == "Snow") {
      weatherDesc.src = "/assets/svgs/snow-icon.svg";
    }
  }
};

console.log(searchBtn);
searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    console.log(searchInput.value);
    WeatherChecking(searchInput.value);
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.keyCode == 13 && searchInput.value) {
    WeatherChecking(searchInput.value);
  }
});
