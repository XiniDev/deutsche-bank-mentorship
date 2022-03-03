import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import Cat from '../images/Cat.svg';


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken,removeToken] = useCookies(['mytoken'])
    let navigate = useNavigate()

    
    //removeToken('mytoken');
   

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken',resp.token))
        .catch(error => console.log(error))
        console.log(token)
    }
    
    const RegisterBtn = () => {
        
        APIService.RegisterUser({username, password})
        .then( () => loginBtn())
        .catch( error => console.log(error))
    }
    
    useEffect(() => {
        
        if(token['mytoken']) {
            navigate('/profile')

        }
    }, [token])
    
    console.log(token)
    return (
        <div className="frontpage">
            <div className="frontpage__block">
                <div className="frontpage__title">
                    Want to get more work on top of your job?
                </div>
                <div className="frontpage__subtitle">
                    Use our software.
                </div>
                <img src={Cat} className="frontpage__img"/>
                <div className="login__form__area">
                    <div className="login__form__title">
                        <hr/>
                        Sign In
                        <hr/>
                    </div>
                    <form className="login__form">
                        <label>
                            <input type="text" name="username" id="username" placeholder="Username"
                            value = {username} onChange = {e => setUsername(e.target.value)}/><br/>
                        </label>
                        <label>
                            <input type="password" name="password" id="password" placeholder="Password"
                            value = {password} onChange = {e => setPassword(e.target.value)}/><br/>
                        </label>
                        <input type="submit" className="submit__button" value="Sign In" onClick = {loginBtn}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

