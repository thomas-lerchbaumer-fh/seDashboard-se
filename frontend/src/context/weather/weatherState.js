import React, { useContext, useEffect, Fragment,useReducer } from 'react'
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import {
    SAVE_DASH,
    UPDATE_DASH,
    LOAD_DASH
} from '../types'


const WeatherState = props =>{
    const initialState ={
      weather:  [
        {
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
 

        ],
        id: null,
    };
    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    const loadWeather = async () =>{
        try {
           
          } catch (err) {
            console.error(err.message);
           // res.status(500).send('Server Error');
          }
    }

    const searchWeather = async(data) =>{
        const config = {
            headers: {
                'Content-Type' :'application/json'
            }
           };
           try {
             
           } catch (e) {             
           }
    }


    return(
        <WeatherContext.Provider value={{
            weather: state.weather,
            searchWeather,
            loadWeather
           
           }}>
            {props.children}

        </WeatherContext.Provider>
    ) 

}

export default WeatherState;