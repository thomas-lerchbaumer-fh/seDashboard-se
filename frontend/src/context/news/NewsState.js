import React, { useContext, useEffect, Fragment, useReducer } from 'react'
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
  GET_NEWS
} from '../types'


const NewsState = props => {
  const initialState = {
    news: [],
    loading: true
  };
  const [state, dispatch] = useReducer(NewsReducer, initialState);

  const getNews = async () => {
    try {
      const res = await axios.get('/api/dashboard/standardFeed');

      dispatch({
        type: GET_NEWS,
        payload: res.data
      })

    } catch (err) {
      console.error(err.message);
      // res.status(500).send('Server Error');
    }
  }


  return (
    <NewsContext.Provider value={{
      news: state.news,
      loading: state.loading,
      getNews
    }}>
      {props.children}

    </NewsContext.Provider>
  )

}

export default NewsState;