import React, {Fragment, useContext, useEffect} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import AuthContext from '../../context/auth/authContext'


 const BurgerMenu = ({title, icon}) => {
    const authContext = useContext(AuthContext);


    const {isAuthenticated, logout, user,loadUser} = authContext;

    const logOut = () =>{
        logout();
    }
    useEffect(()=>{
        loadUser();
        // eslint-disable-next-line
    },[])

  

    const authLinks = (
        <Fragment>
            <li> Hey, {user && user.name} </li>
            <li>
                <Link to='/'>
                    <i className="fas fa-home"></i>{' '}
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                <i className="fas fa-users"></i>{' '}
                About
                </Link>
            </li>
            <li>
                <Link to="/notes">
                <i className="far fa-sticky-note"></i>{' '}
                Notes
                </Link>
            </li>
            <li>
                <a onClick={logOut} href="#!">
                    <i className='fas fa-sign-out-alt' /> {' '}
                  Logout
                </a>
            </li>
        </Fragment>
    );

    const unauthLinks = (
        <Fragment>
            <li>
                <Link to='/'>
                <i className="fas fa-home"></i>{' '}
                Home</Link>
            </li>
            <li>
                <Link to="/about">
                <i className="fas fa-users"></i>{' '}
                About</Link>
            </li>
            <li>
                <Link to="/login">
                <i className="fas fa-sign-in-alt"></i>{' '}
                Login</Link>
            </li>
        </Fragment>
    );

    return (
   
        <Menu>
            
            <ul>
                {isAuthenticated ? authLinks : unauthLinks}
            </ul>
        </Menu>
 
    )
}
BurgerMenu.propTypes ={
    title:PropTypes.string.isRequired,
    icon: PropTypes. string
}

BurgerMenu.defaultProps = {
    title: 'seDashboard',
    icon: 'fas fa-id-card-alt'
}

export default BurgerMenu
