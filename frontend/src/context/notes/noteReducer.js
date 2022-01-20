import {
    ADD_NOTE,
    CLEAR_CURRENT,
    DELETE_NOTE,
    GET_NOTES,
  } from '../types';
  

  export default (state, action) => {
    switch (action.type) {
        case GET_NOTES:
            return{
                ...state,
                notes: action.payload
            }
          case ADD_NOTE:
            return{
              ...state,
              notes: [action.payload, ...state.notes]
            }
          case DELETE_NOTE:
            return{
              ...state,
              notes: state.notes.filter(
                note => note._id !== action.payload
              )
            }
          case CLEAR_CURRENT:
            return{
              ...state,
              current: null
            }
      default:
        return state;
    }
  };