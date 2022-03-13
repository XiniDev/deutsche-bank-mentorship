import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
//import { useCookies, withCookies, Cookies } from 'react-cookie';
import Rattus1 from '../images/Rat Logo.svg';
import { Console } from 'console';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import inbox from '../images/inbox.svg';

const Header = () => {

    const [token, setToken,removeToken] = useCookies(['mytoken'])
    const [isLogin2, setLogin] = useState(true)
    let navigate = useNavigate()
    
    useEffect(() => {
        console.log(window.location.href)
        if(window.location.pathname == "/") {
            setLogin(true)

        } else if(window.location.pathname == "/register") {
            setLogin(true)

        } else {
            setLogin(false)

        } 
    })

    
    useEffect(() => {
        if (window.location.pathname != "/" && !token['mytoken']) {
            console.log(token)
            navigate('/')
        }
    }, [token])
    
    return (
        
        <header className="header">
           <Link to="/profile">
                <div className="header__logo">
                    <img src={Rattus1} alt="Rattus1"/>
                    Rattus
                </div>
            </Link>
            
            <div className='header__links'>
            
            {isLogin2 ? 
                <Link to="/">
                    
                    <div className="header__signinup">
                        Sign In
                    </div>
                </Link> 
                : 
                <Link to="/inbox">
                    <div className="inbox__icon__container">
                        <img src={inbox} className="inbox__icon"/>
                    </div>
                </Link> 
            }
            {isLogin2 ? 
                <Link to="/register">
                    <div className="header__signinup">
                        Register
                    </div>
                </Link>
                : 
                <button className="signout__button" onClick={ () => removeToken('mytoken')}>
                
                <div className="header__signinUp">
                    Sign Out
                </div>
                </button>
            }
            </div>
            
            
        </header>
    );
}

export default Header;