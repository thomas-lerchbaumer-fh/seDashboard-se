import React, {useState, useContext, useEffect, Fragment} from 'react';
import WeatherContext from '../../context/weather/weatherContext';


const WeatherSmall = () => {
    const weatherContext = useContext(WeatherContext) 
    const dataFetched = weatherContext.weather;

const {name,weather,wind,main} = dataFetched[0]; 
//console.log(weather.icon, 'weather')  

 return (
    <Fragment>
        <div className="container-dash">
        <h2>Weahter Today</h2>
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