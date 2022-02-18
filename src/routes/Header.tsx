import React from 'react';
import { Link } from "react-router-dom";

import Rattus1 from '../Rat Logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Rattus1} alt="Rattus1"/>
                Rattus
            </div>
            <div className='header_links'>
                <div className="header__signinup">
                    <Link to="/">Sign in</Link>
                </div>
                <div className="header__signinup">
                    <Link to="/register">Register</Link>
                </div>
                <div className="header__signinup">
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;