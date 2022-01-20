import React, {useState, useContext, useEffect} from 'react';
import Register from'./Register'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoteContext from '../../context/notes/noteContext';

//import DashboardContext from '../../context/dashboard/dashboardContext';

const Login = (props) =>{
    const alertContext = useContext(AlertContext) 
    const{setAlert} = alertContext;

    const noteContext = useContext(NoteContext);
    const {getNotes} = noteContext;

    //const dasboardContext = useContext(DashboardContext);
    const authContext = useContext(AuthContext)
    const {login, error, removeErrors, isAuthenticated } = authContext;

    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
            getNotes();
            //dasboardContext.loadDash();
        }
        if(error ==='Invalid credentials'){
            setAlert(error, 'danger');
            removeErrors();
        }

        //es-lint-disable-next-line
    },[error,isAuthenticated, props.history]);


    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})
    const onSubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert("Please fill in all fields", 'danger');
        }else{
            login({
                email,
                password
            })
        }
    }
    /*destructure */
    const { email, password} = user;
    return(
        <div className='form-container'>
            <h1>Login</h1>

            <form onSubmit={onSubmit}>

                <div className ="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} ></input>
                </div>
                <div className ="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} ></input>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"></input>
            </form>
            <h2>Not registered yet? <Link to="/register"> Register here </Link></h2>
        </div>
    )

}

export default Login