import React, { useContext, useEffect, Fragment, useReducer } from 'react'
import axios from 'axios';
import WeatherForecastContext from './weatherForecastContext';
import WeatherForecasatReducer from './weatherForecasatReducer';
import {
  GET_HOURLY_WEATHER
} from '../types'


const WeatherForecastState = props => {
  const initialState = {
    hourlyForecast: [],
    loading: true
  };
  const [state, dispatch] = useReducer(WeatherForecasatReducer, initialState);

  const getHourlyForecast = async () => {
    try {
      const res = await axios.get('/api/dashboard/tempForecast');

      dispatch({
        type: GET_HOURLY_WEATHER,
        payload: res.data
      })

    } catch (err) {
      console.error(err.message);
      // res.status(500).send('Server Error');
    }
  }


  return (
    <WeatherForecastContext.Provider value={{
      hourlyForecast: state.hourlyForecast,
      loading: state.loading,
      getHourlyForecast

    }}>
      {props.children}

    </WeatherForecastContext.Provider>
  )

}

export default WeatherForecastState;