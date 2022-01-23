import React, { useContext, useEffect, Fragment, useReducer } from 'react'
import axios from 'axios';
import GasPriceContext from './gasPriceContext';
import GasPriceReducer from './gasPriceReducer';
import {
    GET_GAS_PRICE
} from '../types'


const GasPriceState = props => {
  const initialState = {
    gasStation: [],
    loading: true
  };
  const [state, dispatch] = useReducer(GasPriceReducer, initialState);



  const getPrice = async () => {
    try {
      const res = await axios.get('/api/dashboard/gasStation');
      dispatch({
        type: GET_GAS_PRICE,
        payload: res.data
      })

    } catch (err) {
      console.error(err.message, 'my err?');
      // res.status(500).send('Server Error');
    }
  }


  return (
    <GasPriceContext.Provider value={{
      gasStation: state.gasStation,
      loading: state.loading,
      getPrice
    }}>
      {props.children}

    </GasPriceContext.Provider>
  )

}

export default GasPriceState;