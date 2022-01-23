import {
    ADD_NOTE,
    CLEAR_CURRENT,
    DELETE_NOTE,
    GET_NOTES,
    SET_CURRENT,
    UPDATE_NOTE
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
          case SET_CURRENT:
            return{
              ...state,
              current: action.payload
            }
          case UPDATE_NOTE:
            return{
              ...state,
              notes: state.notes.map(note => note._id === action.payload._id ? action.payload : note)
            }
      default:
        return state;
    }
  };