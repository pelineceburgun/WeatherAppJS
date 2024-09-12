document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-weather');
    if (button) {
        button.addEventListener('click', () => {
            const city = document.getElementById('city-input').value;
            const apiKey = '#'; 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    
                    const weatherResult = document.getElementById('weather-result');
                    const temperatureDiv = document.getElementById('temperature');
                    const humidityDiv = document.getElementById('humidity');
                    const windSpeedDiv = document.getElementById('wind-speed');
                    
                    if (data.cod === 200) {
                        weatherResult.innerHTML = `<h2>${data.name}</h2>`;
                        temperatureDiv.innerHTML = `Temperature: ${data.main.temp}°C`;
                        humidityDiv.innerHTML = `Humidity: ${data.main.humidity}%`;
                        windSpeedDiv.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
                    } else {
                        weatherResult.innerHTML = `<p>${data.message}</p>`;
                        temperatureDiv.innerHTML = '';
                        humidityDiv.innerHTML = '';
                        windSpeedDiv.innerHTML = '';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('weather-result').innerHTML = `<p>Unable to fetch weather data.</p>`;
                    document.getElementById('temperature').innerHTML = '';
                    document.getElementById('humidity').innerHTML = '';
                    document.getElementById('wind-speed').innerHTML = '';
                });
        });
    } else {
        console.error('The button with id "get-weather" was not found.');
    }
});
