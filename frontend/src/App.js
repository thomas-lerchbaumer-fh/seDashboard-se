import './App.css';
import BurgerMenu from './components/layout/BurgerMenu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Fragment,useState} from 'react'
import setAuthToken from './utils/setAuthToken';
import Header from './components/layout/Header';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

/* theme options*/
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/theme/global';
import { lightTheme, darkTheme } from './components/theme/theme';

import Alert from './components/layout/Alerts'

//*import pages below *//
import Register from './components/login/Register';
import Login from './components/login/Login';
import About from './components/pages/About'
import Home from './components/pages/Home';

//*import states below*//
import AuthState from './context/auth/AuthState';
import AlertState from'./context/alert/AlertState';
import DashboardState from './context/dashboard/DashBoardState';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () =>  {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
        <AuthState>
          <DashboardState>
          <Router>
            <AlertState>
                <Fragment>
                <button onClick={themeToggler}>Switch Theme</button>
                  <BurgerMenu></BurgerMenu>
                  <Header>
         
                  </Header>
                    <div className="container">
                    <Alert></Alert>
                    <Switch>
                      <Route exact path='/' component={Home}></Route>
                      <Route exact path='/about' component={About}></Route>
                      <Route exact path='/login' component={Login}></Route>
                      <Route exact path='/register' component={Register}></Route>
                    </Switch>
                  </div>
                </Fragment>  
            </AlertState>
          </Router>
          </DashboardState>
        </AuthState>
    </ThemeProvider>


    
     


  );
}

export default App;
