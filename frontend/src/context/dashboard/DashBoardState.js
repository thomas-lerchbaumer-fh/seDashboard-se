import React, { useContext, useEffect, Fragment,useReducer } from 'react'
import AuthContext from '../auth/authContext';
import axios from 'axios';
import DashboardContext from './dashboardContext';
import setAuthToken from '../../utils/setAuthToken';
import dashboardReducer from './dashboardReducer';
import {
    SAVE_DASH,
    UPDATE_DASH,
    LOAD_DASH
} from '../types'


const DashboardState = props =>{
    const initialState ={
      layout:  [{i: 'weatherLarge', x: 0, y: 0, w: 8, h: 2, minW: 8},     {i: 'weaterSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4},                  
        ],
        id: null,
    };
    const [state, dispatch] = useReducer(dashboardReducer, initialState);

    const loadDash = async () =>{
        try {
            const res = await axios.get('/api/dashboard');
            console.log(res.data, ' im your res')

            dispatch({
               type: LOAD_DASH,
               payload: res.data
           }) 
          } catch (err) {
            console.error(err.message);
           // res.status(500).send('Server Error');
          }
    }

    const saveDash = async(data) =>{
        const config = {
            headers: {
                'Content-Type' :'application/json'
            }
           };
           try {
                const res = await axios.post('/api/dashboard', data.layout, config);        
               dispatch({
                   type:SAVE_DASH,
                   payload: res.data
               });
               //loadUser();
               console.log(res, 'im your res')
           } catch (e) {             
           }
    }

    const updateDash = async (id, data) => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          console.log(data)
          try {
            const res = await axios.put(
              `/api/dashboard/${id}`,
              data,
              config
            );   

            console.log(res, 'res at me')
            dispatch({
              type: UPDATE_DASH,
              payload: {layout: data,
                        id: id}
            });
          } catch (err) {

          }     
        
    }

    return(
        <DashboardContext.Provider value={{
            layout: state.layout,
            id: state.id,
            loadDash,
            saveDash,
            updateDash
           
           }}>
            {props.children}

        </DashboardContext.Provider>
    ) 

}

export default DashboardState;