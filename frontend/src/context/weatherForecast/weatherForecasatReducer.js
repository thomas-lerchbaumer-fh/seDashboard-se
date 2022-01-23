import {
    SEARCH_WEATHER,
    GET_WEATHER,
    GET_HOURLY_WEATHER
} from '../types'


export default (state, action) =>{
 switch(action.type){

            case GET_HOURLY_WEATHER:
                return{
                    ...state,
                    hourlyForecast: action.payload,
                    loading: false
                }
            default:
                return state;
    
        }
    
    
    }