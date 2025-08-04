const apiKey = "YOUR_API_KEY_HERE"; // replace with your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("weatherResult").innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = <p>City not found. Please try again.</p>;
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherResult").innerHTML = <p>Unable to fetch data. Try again later.</p>;
    });
}
