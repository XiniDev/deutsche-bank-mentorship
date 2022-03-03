import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
//import { useCookies, withCookies, Cookies } from 'react-cookie';
import Rattus1 from '../images/Rat Logo.svg';
import { Console } from 'console';
import { useCookies } from 'react-cookie';

const Header = () => {

    const [token, setToken,removeToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    //const myCookie = cookies.get('myCookie');
    //console.log(myCookie);
    useEffect(() => {
        console.log(window.location.href)
        if(window.location.href == "http://localhost:3000/") {
            setLogin(true)

        } else if(window.location.href == "http://localhost:3000/register") {
            setLogin(true)

        } else {
            setLogin(false)
        }
        
    })
    
    return (
        
        <header className="header">
            {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>}
            <div className="header__logo">
                <img src={Rattus1} alt="Rattus1"/>
                Rattus
            </div>
            
            <div className='header_links'>
            
            {isLogin ? 
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
            {isLogin ? 
                <Link to="/register">
                    <div className="header__signinup">
                        Register
                    </div>
                </Link>
                : 
                <Link to="/">
                    <span onClick={ () => removeToken('mytoken')}></span>
                    <div className="header__signinUp">
                        Signout
                    </div>
                </Link> 
            }
            </div>
            
            
        </header>
    );
}

export default Header;