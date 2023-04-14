function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = '460a3a3049cb982a3079ef92988a147a'; 
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var weatherDataContainer = document.getElementById('weatherData');
            weatherDataContainer.innerHTML = '';

            for (var i = 0; i < 7; i ++) {
                var weather = data.list[i];
                var weatherCard = document.createElement('div');
                weatherCard.className = 'weatherCard';


                var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
                var icon = document.createElement('img');
                icon.src = iconUrl;

                var description = document.createElement('p');
                description.textContent = weather.weather[0].description;

                var temperature = document.createElement('h3');
                temperature.textContent = `${weather.main.temp} °C`;

                weatherCard.appendChild(document.createTextNode('day'+(i+1)));
                weatherCard.appendChild(icon);
                weatherCard.appendChild(description);
                weatherCard.appendChild(temperature);

                weatherDataContainer.appendChild(weatherCard);
            }
        })
        .catch(error => console.error(error));
}
