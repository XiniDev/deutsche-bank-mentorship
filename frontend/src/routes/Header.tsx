import React from 'react';
import { Link } from "react-router-dom";
//import { useCookies, withCookies, Cookies } from 'react-cookie';
import Rattus1 from '../images/Rat Logo.svg';
import { Console } from 'console';
import { useCookies } from 'react-cookie';

const Header = () => {

    const [token, setToken,removeToken] = useCookies(['mytoken'])
    //const myCookie = cookies.get('myCookie');
    //console.log(myCookie);

    const logoutBtn = () => {
       // cookies.remove('token', { path: '/' });
        setToken('mytoken', null, { path: '/' });

    }
    
    
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Rattus1} alt="Rattus1"/>
                Rattus
            </div>
            <div className='header_links'>

                <Link to="/">
                    <div className="header__signinup">
                        Sign in
                    </div>
                </Link>

                <Link to="/register">
                    <div className="header__signinup">
                        Register
                    </div>
                </Link>

                <Link to="/profile">
                    <div className="header__signinup">
                        Profile
                    </div>
                </Link>

                <div className="header__signinup" onClick = {logoutBtn}>
                    Sign out
                </div>
                
            </div>
        </header>
    );
}

export default Header;