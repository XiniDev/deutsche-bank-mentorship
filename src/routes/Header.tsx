import React from 'react';
import { Link } from "react-router-dom";

import Rattus1 from '../images/Rat Logo.svg';

const Header = () => {
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
                
            </div>
        </header>
    );
}

export default Header;