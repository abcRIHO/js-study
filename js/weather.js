API_KEY = 'd81cce3c7a0f38789b456036d05b837e'

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('You live it', lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json()).then(data => {
            // span에서 날씨/지역을 주는 컨테이너
            const city = document.querySelector('#weather span:first-child');
            const weather = document.querySelector('#weather span:last-child');

            city.innerText = `${data.name}, `;
            weather.innerText = `${data.weather[0].main}. ${Math.round(data.main.temp)}˚C`;
    });
}

function onGeoError() {
    alert('can\'t find you. No weather for you')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);