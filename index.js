const cityInput = document.getElementById('city-input');
const search = document.querySelector('.search');
const weather_img = document.querySelector('#weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.wind');
const errorBox = document.querySelector('.error-box');
const weather_body = document.querySelector('.weather-body');



search.addEventListener('click', () =>{
    searchweather(cityInput.value);
});

async function searchweather(city){
    
    const api_key = '7cf65036687a5122583a6d3f36a9002f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    if (weather_data.cod == 404) {
        console.log("Error");
        errorBox.style.display= "flex";
        weather_body.style.display = "none";

        return; 
    }
    else{
        weather_body.style.display = "flex";
        errorBox.style.display= "none";

    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}ºC`;
    description.innerHTML =`${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}Km/hr`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;
        case 'Rain':
                weather_img.src = "assets/rain.png";
                break;
        case 'Clear':
                weather_img.src = "assets/clear.png";
                break; 
        case 'Snow':
                weather_img.src = "assets/snow.png";
                break; 
        default:
            break;
    }



}