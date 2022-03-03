import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
//import { useCookies, withCookies, Cookies } from 'react-cookie';
import Rattus1 from '../images/Rat Logo.svg';
import { Console } from 'console';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';

const Header = () => {

    const [token, setToken,removeToken] = useCookies(['mytoken'])
    const [isLogin2, setLogin] = useState(true)
    let navigate = useNavigate()
    
    useEffect(() => {
        console.log(window.location.href)
        if(window.location.href == "http://localhost:3000/") {
            setLogin(true)

        } else if(window.location.href == "http://localhost:3000/register") {
            setLogin(true)

        } else if(window.location.href == "http://localhost:3000/profile") {
            setLogin(false)

        } 
    })

    
    useEffect(() => {
        if ( window.location.href != "http://localhost:3000/"){
            if(!token['mytoken']) {
                console.log(token)
                navigate('/')
    
            }
        }
        
    }, [token])
    
    return (
        
        <header className="header">
           
            <div className="header__logo">
                <img src={Rattus1} alt="Rattus1"/>
                Rattus
            </div>
            
            <div className='header_links'>
            
            {isLogin2 ? 
                <Link to="/">
                    
                    <div className="header__signinup">
                        Sign In
                    </div>
                </Link> 
                : 
                <Link to="/profile">
                    <div className="header__signinup">
                        Profile
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
                <button onClick={ () => removeToken('mytoken')}>
                
                <div className="header__signinUp">
                    Signout
                </div>
                </button>
            }
            </div>
            
            
        </header>
    );
}

export default Header;