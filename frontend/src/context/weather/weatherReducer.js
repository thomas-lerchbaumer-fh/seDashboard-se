import {
    SEARCH_WEATHER,
    LOAD_WEATHER
} from '../types'


export default (state, action) =>{
 switch(action.type){
    
            case LOAD_WEATHER:
                return{
                    ...state,
                    weather: action.payload,
                }

            default:
                return state;
    
        }
    
    
    }