
document.querySelector('#search').addEventListener('click', () => {
    const city = document.querySelector('#city-name').value;
    const apiKey = 'dc7e43da8933998603672ebf06aae5bc';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please try again.');
                return;
            }
            document.querySelector('#city').textContent = data.name;
            document.querySelector('#temperature').textContent = `Temperature: ${Math.round(data.main.temp)} °F`;
            document.querySelector('#feels-like').textContent = `Feels Like: ${Math.round(data.main.feels_like)} °F`;
            document.querySelector('#high-low').textContent = `High: ${Math.round(data.main.temp_max)} °F | Low: ${Math.round(data.main.temp_min)} °F`;
            document.querySelector('#conditions').textContent = `Conditions: ${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}`;
            document.querySelector('#weather-display').style.display = 'block';
        });
        
});

document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#city').textContent = '';
    document.querySelector('#temperature').textContent = '';
    document.querySelector('#feels-like').textContent = '';
    document.querySelector('#high-low').textContent = '';
    document.querySelector('#conditions').textContent = '';
    document.querySelector('#weather-display').style.display = 'none';
});