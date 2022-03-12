import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

import Cat from '../images/Cat.svg';


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken,removeToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(false)
    let navigate = useNavigate()

    
    const loginBtn = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        APIService.LoginUser({username, password})
        .then(resp => {
            console.log(resp.token)
            if (resp.token) setToken('mytoken',resp.token)
            else {
                console.log(resp)
                document.getElementById('err__msg')!.style.display = "block";
            }
        }).catch(error => {
            console.log(error)
        })
        console.log(token)
    }
    
    useEffect(() => {
        if(token['mytoken']) {
            navigate('/profile')
        }
    }, [token])
    
    
    return (
        <div className="frontpage">
            <div className="frontpage__block">
                <div className="frontpage__title">
                    Work can give you more than just salary.
                </div>
                <div className="frontpage__subtitle">
                    Learn from those around you.
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
                            <input type="username" name="username" id="username" placeholder="Username"
                            value = {username} onChange = {e => setUsername(e.target.value)}/><br/>
                        </label>
                        <label>
                            <input type="password" name="password" id="password" placeholder="Password"
                            value = {password} onChange = {e => setPassword(e.target.value)}/><br/>
                        </label>
                        <div className='error__message' id='err__msg'>Incorrect details. Please try again.</div>
                        <input type="submit" className="submit__button" value="Sign In" onClick = {loginBtn}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

