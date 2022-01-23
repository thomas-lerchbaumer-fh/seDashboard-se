import React, { useContext, useEffect, Fragment, useReducer } from 'react'
import axios from 'axios';
import CovidContext from './covidContext';
import CovidReducer from './covidReducer';
import {
  GET_COVID
} from '../types'


const CovidState = props => {
  const initialState = {
    covidData: [],
    loading: true
  };
  const [state, dispatch] = useReducer(CovidReducer, initialState);

  const getCovid = async () => {
    try {
      const res = await axios.get('/api/dashboard/coronaData');
      dispatch({
        type: GET_COVID,
        payload: res.data
      })

    } catch (err) {
      console.error(err.message);
      // res.status(500).send('Server Error');
    }
  }


  return (
    <CovidContext.Provider value={{
      covidData: state.covidData,
      loading: state.loading,
      getCovid
    }}>
      {props.children}

    </CovidContext.Provider>
  )

}

export default CovidState;