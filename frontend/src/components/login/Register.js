import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
//import DashboardContext from '../../context/dashboard/dashboardContext';



const Register = (props) =>{

    /*bring in alert context*/
    const alertContext = useContext(AlertContext) 
    const{setAlert} = alertContext;
    const authContext = useContext(AuthContext)
    const {register, error, removeErrors, isAuthenticated } = authContext;

    //const {layout, saveDash} = useContext(DashboardContext)



    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')

            /* saveDash({
                layout
            }) */
        }
        if(error ==='User already exists'){
            setAlert(error, 'danger');
            removeErrors();
        }

        //es-lint-disable-next-line
    },[error,isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2nd: ''
    })

 const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if( password !== password2nd){
            setAlert("Passwords do not match!", 'danger')
        }else {
           register({
               name,
               email,
               password
           });


        }
       
    }
    /*destructure */
    const {name, email, password, password2nd} = user;
    return(
        <div className='form-container'>
            <h1>Create a new account</h1>

            <form onSubmit={onSubmit}>
                <div className ="form-group">
                    <label htmlFor="name">Username</label>
                    <input required type="text" name="name" value={name} onChange={onChange}></input>
                </div>
                <div className ="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input required type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className ="form-group">
                    <label htmlFor="password">Password</label>
                    <input minLength="4" required type="password" name="password" value={password} onChange={onChange}></input>
                </div>
                <div className ="form-group">
                    <label htmlFor="password2nd">Verify your Password</label>
                    <input minLength="4" reqruired type="password" name="password2nd" value={password2nd} onChange={onChange}></input>
                </div>

                <input type="submit" value="Register" className="btn btn-primary btn-block"></input>
            </form>

        </div>
    )

}

export default Register