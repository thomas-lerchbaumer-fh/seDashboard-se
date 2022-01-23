import React, { useContext, useEffect, Fragment, useReducer, useState } from 'react'

import GridLayout from 'react-grid-layout';
import WeatherSmall from '../weather/WeatherSmall';
import StandardRss from '../standardrss/StandardRss';
import Notes from '../notes/Notes';
import WeatherDetail from '../weather/WeatherDetail';
import AuthContext from '../../context/auth/authContext';
import NotesForm from '../notes/NotesForm';
import { Responsive, WidthProvider } from 'react-grid-layout';
import useForceUpdate from 'use-force-update';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import Covid from '../covid/Covid';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;


  const unAuthlayout = [
    { i: 'weatherLarge', x: 0, y: 0, w: 6, h: 2, minW: 6 },
    { i: 'weatherSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4 },
    { i: 'standardRss', x: 0, y: 1, w: 3, h: 2, minW: 3, maxW: 4 },
    { i: 'spotify', x: 3, y: 1, w: 3, h: 2, minW: 3, maxH: 3 },
    { i: 'quote', x: 6, y: 2, w: 4, h: 2, minW: 4, maxH: 3 },
    { i: 'corona', x: 0, y: 3, w: 10, h: 1.5, minW: 10, maxH: 2, maxW: 10 },

  ]

  const authLayout = [
    { i: 'weatherLarge', x: 0, y: 0, w: 6, h: 2, minW: 6 },
    { i: 'weatherSmall', x: 8, y: 0, w: 4, h: 2, minW: 4, maxW: 4 },
    { i: 'notes', x: 0, y: 1, w: 5, h: 2, },
    { i: 'notes-form', x: 6, y: 1, w: 5, h: 2 },
    { i: 'standardRss', x: 0, y: 2, w: 3, h: 2, minW: 3 },
    { i: 'spotify', x: 3, y: 2, w: 3, h: 2, minW: 3, maxH: 3 },
    { i: 'quote', x: 6, y: 2, w: 4, h: 2, minW: 4, maxH: 3 },
    { i: 'corona', x: 0, y: 3, w: 12, h: 2, minW: 12, maxH: 2 },
  ]

  const unAuthlayoutMD = [
    { i: 'weatherLarge', x: 0, y: 0, w: 10, h: 2, minW: 10 },
    { i: 'weatherSmall', x: 5, y: 1, w: 3, h: 2, minW: 4, maxW: 4 },
    { i: 'standardRss', x: 0, y: 1, w: 3, h: 2, minW: 4, maxW: 4 },
    { i: 'spotify', x: 2, y: 3, w: 2, h: 2, minW: 1, maxH: 3 },
    { i: 'quote', x: 5, y: 3, w: 2, h: 2, minW: 4, maxH: 3 },
    { i: 'corona', x: 0, y: 2, w: 10, h: 2, minW: 10, maxH: 2 },
  ]

  const authLayoutMD = [
    { i: 'weatherLarge', x: 0, y: 0, w: 10, h: 2, minW: 10 },
    { i: 'weatherSmall', x: 5, y: 1, w: 3, h: 2, minW: 4, maxW: 4 },
    { i: 'standardRss', x: 0, y: 1, w: 3, h: 2, minW: 4, maxW: 4 },
    { i: 'notes', x: 0, y: 2, w: 3, h: 2, },
    { i: 'notes-form', x: 4, y: 2, w: 3, h: 2 },
    { i: 'corona', x: 0, y: 3, w: 10, h: 2, minW: 10, maxH: 2 },
    { i: 'spotify', x: 2, y: 4, w: 2, h: 2, minW: 2, maxH: 3 },
    { i: 'quote', x: 4, y: 4, w: 2, h: 2, minW: 2, maxH: 3 },
  ]

  const [authLay, setAuthLay] = useState({
    mounted: false,
  })

  const [unAuth, setLayout] = useState({
    mounted: false,
    currentBreakpoint: 'lg',
  });

  const { mounted, currentBreakpoint, layouts } = unAuth;

  const ResponsiveReactGridLayout = WidthProvider(Responsive);

  useEffect(() => {
    if (localStorage.token) {
      authContext.loadUser();
    }
    setLayout({
      mounted: true,
      layouts: {
        lg: unAuthlayout,
        md: unAuthlayout,
        sm: unAuthlayoutMD

      }
    });

    setAuthLay({
      mounted: true,
      layouts: {
        lg: authLayout,
        md: authLayout,
        sm: authLayoutMD
      }
    })

    //eslint-disable-next-line
  }, []);

  const override = css`
      display: block;
      margin: 0 auto;
      border-color: white;
    `;

  let [color, setColor] = useState("#ffffff");
  //dt --> change Unix time stamp 

  const onWidthChange = (width, all) => {
    //console.log(width, 'current')


  }

  const onBreakpointChange = (all) => {
    //console.log(all, 'breakpoint');
  }

  const unAuthLayoutContent = (
    <Fragment>
      {!mounted ? (
        <div className="spinner-placement">
          <BeatLoader color={color} css={override} size={20}></BeatLoader>
        </div>
      ) : (
        <ResponsiveReactGridLayout className="unAuthlayout" layouts={layouts} rowHeight={150} heigth={500} width={1200}
          breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 767, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          onLayoutChange={onWidthChange}
          onBreakpointChange={onBreakpointChange}
        >
          <div key="weatherLarge">
            <WeatherDetail></WeatherDetail>
          </div>
          <div key="weatherSmall">
            <WeatherSmall></WeatherSmall>
          </div>
          <div key="standardRss">
            <h2>derStandard Newsroom</h2>
            <StandardRss></StandardRss>
          </div>
          <div key="spotify" className="notes-wrapper-dash">
            <h2>Spotify</h2>
            <div className="spotify-dash">
              <iframe src="https://open.spotify.com/embed/playlist/2h30YpCYHNGqPfxktve6nh" width="90%" height="80%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
          <div key="quote" className="wrapper-dash">
            <h2>Quote</h2>
            <div className="spotify-dash">
              hii
            </div>
          </div>
          <div key="corona" className="wrapper-dash">
            <h2>Covid 19 Data</h2>
            <div className="covid-wrapper">
              <Covid></Covid>
            </div>
          </div>
        </ResponsiveReactGridLayout>

      )}

    </Fragment>
  )

  const authLayoutContet = (
    <Fragment>
      {!mounted ? (
        <div className="spinner-placement">
          <BeatLoader color={color} css={override} size={20}></BeatLoader>
        </div>
      ) : (
        <ResponsiveReactGridLayout className="unAuthlayout" layouts={authLay.layouts} rowHeight={150} heigth={500} width={1200}
          breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 767, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          onLayoutChange={onWidthChange}
          onBreakpointChange={onBreakpointChange}
        >
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
            <h2>derStandard Newsroom</h2>
            <StandardRss></StandardRss>
          </div>
          <div key="spotify" className="notes-wrapper-dash">
            <h2>Spotify</h2>
            <div className="spotify-dash">
              <iframe src="https://open.spotify.com/embed/playlist/2h30YpCYHNGqPfxktve6nh" width="90%" height="80%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
          <div key="quote" className="notes-wrapper-dash">
            <h2>Quote</h2>
            <div className="spotify-dash">
              hii
            </div>
          </div>
          <div key="corona" className="wrapper-dash">
            <h2>Covid 19 Data</h2>
            <div className="covid-wrapper">
              <Covid></Covid>
            </div>
          </div>
        </ResponsiveReactGridLayout>

      )}
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