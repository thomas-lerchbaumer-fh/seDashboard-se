import React, {useReducer, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import AuthContext from './authContext';
import setAuthToken from '../../utils/setAuthToken';

import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    AUTH_ERROR
} from '../types'


const AuthState = props =>{
    const initialState ={
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

   //Load User
   const loadUser = async() => {
       console.log(localStorage, 'local storage on load user')
     if(localStorage.token){
         setAuthToken(localStorage.token);
     }
     try{
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED, 
            payload:res.data
        })
      }catch (error){
        dispatch({type: AUTH_ERROR});

      }
   }

   //Register a new user
   const register = async (data) => {
       const config = {
        headers: {
            'Content-Type' :'application/json'
        }
       };

       try {
            const res = await axios.post('/api/users', data, config);
           
           dispatch({
               type:REGISTER_SUCCESS,
               payload: res.data
           });
           loadUser();
       } catch (e) {
           dispatch({
               type:REGISTER_FAIL,
               payload: e.response.data.msg
           })        
       }
   }

   //Login a user
   const login = async (data) => {

    const config = {
        headers: {
            'Content-Type' :'application/json'
        }
       };

       try {
            const res = await axios.post('/api/auth', data, config);
           
           dispatch({
               type:LOGIN_SUCCESS,
               payload: res.data
           });
           loadUser();
       } catch (e) {
           dispatch({
               type:LOGIN_FAIL,
               payload: e.response.data.msg
           })        
       }
}

   //Logout a user (destroys the token)
   const logout =() => {
    dispatch({
        type: LOGOUT
    })
}

   //rem errors (in case something failed )
   const removeErrors =() => {
   dispatch({type: CLEAR_ERRORS});
}

    return(
        <AuthContext.Provider value={{
           token: state.token,
           isAuthenticated: state.isAuthenticated,
           loading: state.loading,
           user: state.user,
           error: state.error,
           register,
           loadUser,
           login,
           logout,
           removeErrors
        }}>
            {props.children}

        </AuthContext.Provider>
    )

}

export default AuthState;