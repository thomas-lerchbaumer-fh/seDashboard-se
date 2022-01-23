import React, { useReducer } from 'react'
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import {
    GET_WEATHER,
} from '../types'


const WeatherState = props => {
    const initialState = {
        weather: [],
        loading: true
    };
    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    const getWeather = async () => {
        try {
            const res = await axios.get('/api/dashboard/tempCurrent');
            dispatch({
                type: GET_WEATHER,
                payload: res.data
            })

        } catch (err) {
            console.error(err.message);
            // res.status(500).send('Server Error');
        }
    }


    return (
        <WeatherContext.Provider value={{
            weather: state.weather,
            loading: state.loading,
            getWeather
        }}>
            {props.children}

        </WeatherContext.Provider>
    )

}

export default WeatherState;