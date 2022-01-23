import React, {useState, useContext, useEffect, Fragment} from 'react';
import WeatherContext from '../../context/weather/weatherContext';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const WeatherSmall = () => {
    const weatherContext = useContext(WeatherContext) 
    const {weather, getWeather, loading} = weatherContext;


    const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
    `;

    const {wind, maxTemp, minTemp,pressure,temp,feelsLike,humidity, icon, name}  = weather; 

    let [color, setColor] = useState("#ffffff");
    useEffect(()=>{
        getWeather();
        // eslint-disable-next-line
    },[]); 

 return (
    
        <div className="container-dash">
           {loading ? (
                <div className="spinner-placement">
              <BeatLoader color={color} loading={loading} css={override} size={20}></BeatLoader>
              </div>
            ) :
            (
            <div>
              <h2>Weather Today</h2>
                <p className="weather-text-minmax">{name}, Min {minTemp}° / Max {maxTemp}°</p> 
                <div className="image-wrapper">        
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} align="left" alt={`${name}`} width="100px" height="100px"/>
                    <p className="weather-text-icon">{temp}°</p> 
                </div>
                    <h4>Details <i className="fas fa-bolt"></i></h4>
                    <div className="grid-2 grid-smaller">
                        <ul >
                        <li>Feels Like {feelsLike}°</li>
                        <li>Wind {wind} m/s</li>
                        </ul>
                        <ul >
                            <li>Humidity {humidity}%</li>
                            <li>Pressure {pressure}hPa</li>
                        </ul>
                    </div>
                </div>
            )}
  

      </div>   


            )};

export default WeatherSmall;