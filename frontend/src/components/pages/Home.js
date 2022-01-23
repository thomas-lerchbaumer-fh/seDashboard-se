import React, { useContext, useEffect, Fragment } from 'react'

import GridLayout from 'react-grid-layout';
import WeatherSmall from '../weather/WeatherSmall';
import StandardRss from '../standardrss/StandardRss';
import Notes from '../notes/Notes';
import WeatherDetail from '../weather/WeatherDetail';
import AuthContext from '../../context/auth/authContext';
import NotesForm from '../notes/NotesForm';


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
                  {i: 'standardRss', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4},
                  {i: 'spotify', x: 0, y: 2, w: 4, h: 2, minW: 4, maxH:3},
                ]

  const unAuthLayoutContent=(
    <Fragment>
      <GridLayout className="unAuthlayout" layout={unAuthlayout} cols={12} rowHeight={150} heigth={500} width={1200} >
        <div key="weatherLarge">
          <WeatherDetail></WeatherDetail>
        </div>
        <div key="weatherSmall">
          <WeatherSmall></WeatherSmall>
        </div>
        <div key="standardRss">
          <StandardRss></StandardRss>
        </div>
        <div key="spotify" className="notes-wrapper-dash">
          <h2>Spotify</h2>
          <div className="spotify-dash">
          <iframe src="https://open.spotify.com/embed/playlist/2h30YpCYHNGqPfxktve6nh" width="90%" height="80%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </GridLayout>
    </Fragment>
  )

  const authLayout = [{i: 'weatherLarge', x: 0, y: 0, w: 8, h: 2, minW: 8}, 
  {i: 'weatherSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4},
  {i: 'notes', x: 0, y: 1, w: 6, h: 2, },
  {i: 'notes-form', x: 6, y: 1, w: 6, h: 2},
  {i: 'standardRss', x: 0, y: 2, w: 4, h: 2, minW: 4, maxW: 4},
  {i: 'spotify', x: 4, y: 2, w: 4, h: 2, minW: 4, maxH:3},
]

    const authLayoutContet =(
      <Fragment>
      <GridLayout className="layout" layout={authLayout} cols={12}   rowHeight={150} heigth={500} width={1200} >
        <div key="weatherLarge">
          <WeatherDetail></WeatherDetail>
        </div>
        <div key="weatherSmall">
          <WeatherSmall></WeatherSmall>
        </div>

        <div key="notes" className="notes-wrapper-dash">
          <h2>Your Notes</h2>
          <div className="notes-dash">
          <Notes></Notes>
          </div>
        </div>
        <div key="notes-form" className="notes-wrapper-dash">
          <h2>Add notes</h2>
        <div className="notes-dash-form">
          <NotesForm></NotesForm>
        </div>
        </div>
        <div key="standardRss">
          <StandardRss></StandardRss>
        </div>
        <div key="spotify" className="notes-wrapper-dash">
          <h2>Spotify</h2>
          <div className="spotify-dash">
          <iframe src="https://open.spotify.com/embed/playlist/2h30YpCYHNGqPfxktve6nh" width="90%" height="80%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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