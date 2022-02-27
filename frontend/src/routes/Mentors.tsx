import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';

import { Link } from "react-router-dom";

const Mentors = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentors</h1>
                        <hr />
                        <Link to="/mentor">
                            <div className='user__box'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Bea</h2>
                                    <div className='user__box__topic'>
                                        Learning: 
                                        <div className='user__box__tag'>Fine Art</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <hr />
                        <div className='suggest__button__container'>
                            <Link to="/suggestmentor">
                                <div className='suggest__button'>
                                    Suggest New Mentor
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentors;