import {
    GET_QUOTES
} from '../types'

export default (state, action) => {
    switch (action.type) {

        case GET_QUOTES:
            return {
                ...state,
                quotes: action.payload,
                loading: false
            }
        default:
            return state;

    }


}