import React, { Fragment} from 'react';

const WeatherSmall = () => {

    const tmpData = {
        "coord": {
          "lon": 16.3721,
          "lat": 48.2085
      },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 25.23,
          "feels_like": 25.19,
          "temp_min": 22.12,
          "temp_max": 28.14,
          "pressure": 1011,
          "humidity": 53
        },
        "visibility": 10000,
        "wind": {
          "speed": 2.24,
          "deg": 242,
          "gust": 6.71
    },
        "clouds": {
          "all": 1
        },
    "dt": 1623503895,
        "sys": {
            "type": 2,
            "id": 2037452,
            "country": "AT",
            "sunrise": 1623466432,
            "sunset": 1623524104
        },
        "timezone": 7200,
        "id": 2761369,
        "name": "Vienna",
        "cod": 200 
    }

    console.log(tmpData, 'tmp data')

const {name,weather,wind,main} = tmpData  
//console.log(weather.icon, 'weather')  

 return (
    <Fragment>
        <div className="container-dash">
        <h2>Weahter Forecast</h2>
        <p className="weahter-text-minmax">{name}, Min {main.temp_min}° / Max {main.temp_max}°</p> 
        <div className="image-wrapper">        
            <img className="weahter-icon" src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} align="left" alt={`${name}`} width="100px" height="100px"/>
            <p className="weahter-text-icon">{main.temp}°</p> 
        </div>

        <ul className="weahter-ul">Details</ul>
          <li>Feels Like {main.feels_like}°</li>
          <li>Wind {wind.speed} m/s</li>
          <li>Humidity {main.humidity}%</li>
          <li>Pressure {main.pressure}hPa</li>
        </div>
    </Fragment>

)
};

export default WeatherSmall;