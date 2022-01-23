import {
    GET_COVID
} from '../types'

export default (state, action) => {
    switch (action.type) {

        case GET_COVID:
            return {
                ...state,
                covidData: action.payload,
                loading: false
            }
        default:
            return state;

    }


}