import {
    GET_GAS_PRICE
} from '../types'

export default (state, action) => {
    switch (action.type) {

        case GET_GAS_PRICE:
            return {
                ...state,
                gasStation: action.payload,
                loading: false
            }
        default:
            return state;

    }


}