import React, { useContext, useEffect, Fragment } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import GridLayout from 'react-grid-layout';
import WeatherSmall from '../weather/WeatherSmall';

import AuthContext from '../../context/auth/authContext';
//import DashboardContext from '../../context/dashboard/dashboardContext';
import { compareSync } from 'bcryptjs';

 const Home = () => {
    const authContext = useContext(AuthContext);
    //const dashboardContext = useContext(DashboardContext);

    const {isAuthenticated, user} = authContext
    //const { updateDash,loadDash, id} = dashboardContext;


    useEffect(()=>{
      if(localStorage.token){
          authContext.loadUser();
          //loadDash();
      }


      //eslint-disable-next-line
  }, []);


  const layout = [{i: 'weatherLarge', x: 0, y: 0, w: 8, h: 2, minW: 8},     {i: 'weatherSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4}]
    const onLayoutChange = (newLay) =>{
         // loadDash();
      if(user != null){
          //updateDash(id, newLay);
          //loadDash();
      }
    }

  

     //const layouts = getLayoutsFromSomewhere();
    return (
    <Fragment>
      <GridLayout className="layout" layout={layout} cols={12}  onLayoutChange={onLayoutChange} rowHeight={150} heigth={500} width={1200} >
        <div key="weatherLarge">
          Large
        </div>
        <div key="weatherSmall">
          <WeatherSmall></WeatherSmall>
        </div>
      </GridLayout>
    </Fragment>
    )
}

export default Home