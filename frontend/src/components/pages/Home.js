import React, { useContext, useEffect, Fragment } from 'react'

import GridLayout from 'react-grid-layout';
import WeatherSmall from '../weather/WeatherSmall';
import StandardRss from '../standardrss/StandardRss';
import Notes from '../notes/Notes';
import AuthContext from '../../context/auth/authContext';


 const Home = () => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, user} = authContext

    useEffect(()=>{
      if(localStorage.token){
          authContext.loadUser();

      }
      //eslint-disable-next-line
  }, []);


  
  const unAuthlayout = [{i: 'weatherLarge', x: 0, y: 0, w: 8, h: 2, minW: 8}, 
                  {i: 'weatherSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4},
                  {i: 'standardRss', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4}
                ]

  const unAuthLayoutContent=(
    <Fragment>
      <GridLayout className="unAuthlayout" layout={unAuthlayout} cols={12} rowHeight={150} heigth={500} width={1200} >
        <div key="weatherLarge">
          Large
        </div>
        <div key="weatherSmall">
          <WeatherSmall></WeatherSmall>
        </div>
        <div key="standardRss">
          <StandardRss></StandardRss>
        </div>
      </GridLayout>
    </Fragment>
  )

  const authLayout = [{i: 'weatherLarge', x: 0, y: 0, w: 8, h: 2, minW: 8}, 
  {i: 'weatherSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4},
  {i: 'standardRss', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4},
  {i: 'notes', x: 0, y: 0, w: 8, h: 2, }
]

    const authLayoutContet =(
      <Fragment>
      <GridLayout className="layout" layout={authLayout} cols={12}   rowHeight={150} heigth={500} width={1200} >
        <div key="weatherLarge">
          Large
        </div>
        <div key="weatherSmall">
          <WeatherSmall></WeatherSmall>
        </div>
        <div key="standardRss">
          <StandardRss></StandardRss>
        </div>
        <div key="notes" className="notes-wrapper-dash">
          <h2>Your Notes</h2>
          <div className="notes-dash">
          <Notes></Notes>
          </div>
        </div>
      </GridLayout>
    </Fragment>
    )


    return (
    <Fragment>
      <div>
        {isAuthenticated ? authLayoutContet : unAuthLayoutContent}
      </div>
    </Fragment>
    )
}

export default Home